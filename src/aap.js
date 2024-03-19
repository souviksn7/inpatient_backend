const chartConfig = require("./healthChartConfig");
var rowMap = (chartConfig.rowMap = {});
chartConfig.rows.forEach(function (v, i) {
  chartConfig.rowMap[v.name] = i;
});
const customHosts = require('./chopcustomHosts')
const { search } = require("./http");
var carePlans = [];
const {
    addEHRListener,
    ehrHandshake,
    ehrToken,
    executeAction,
    setEHRToken
} = require('./chopehrcomms')

var {
    getcsnList,
    setcsnList,
    getcsnToFhirIdMap,
    setcsnToFhirIdMap,
    setTokenResponse,
    today,
    getTokenResponse,
    setState,
    getState
    
  } = require('./chopShared')
let tokenResponse;
let lookbackDays;
let csnToFhirIdMap
function getAsthmaActionPlan() {
    tokenResponse = getTokenResponse()
     lookbackDays = Math.ceil((today.getTime() - chartConfig.chart.dates.contextStart.getTime()) / (1000 * 3600 * 24));
    return search(customHosts[sessionStorage["env"]] + "CHOP/2015/CHOP/Clinical/GetSmartDataElement", {
        patientID: tokenResponse.eptId,
        csn: tokenResponse.csn,
        lookback: lookbackDays,
        sde: "EPIC#31000061123"
    }).then(function(aap, state, xhr) {
        try {
            if (xhr.status != 200) {
                // chartConfig.chart.failure = true;
                console.log(this.type + " " + this.url + " " + xhr.status, "error");
                return;
            }
            aap.entry = aap.entry || [];
            carePlans.push.apply(carePlans, aap.entry);
        } catch (error) {
            // chartConfig.chart.failure = true;
            console.log(error.stack, "error");
        }
    });
}

function getAsthmaCarePlan() {
    lookbackDays = Math.ceil((today.getTime() - chartConfig.chart.dates.contextStart.getTime()) / (1000 * 3600 * 24));
    return search(customHosts[sessionStorage["env"]] + "CHOP/2015/CHOP/Clinical/GetSmartDataElement", {
        patientID: tokenResponse.eptId,
        csn: tokenResponse.csn,
        lookback: lookbackDays,
        sde: "MEDCIN#258735"
    }).then(function(acp, state, xhr) {
        try {
            if (xhr.status != 200) {
                // chartConfig.chart.failure = true;
                console.log(this.type + " " + this.url + " " + xhr.status, "error");
                return;
            }
            acp.entry = acp.entry || [];
            carePlans.push.apply(carePlans, acp.entry);
        } catch (error) {
            // chartConfig.chart.failure = true;
            console.log(error.stack, "error");
        }
    });
}
function chopFilterCarePlans(encMap) {
    // console.log(chartConfig.chart.dates)
    // chartConfig.chart.dates ={}
    csnToFhirIdMap = getcsnToFhirIdMap()
    carePlans = carePlans.filter(function(obj, index) {
        // Use date of entry as start date
        
        obj.start = new Date(obj.date);
        if (obj.start < today) {
            // Move basic data higher on the object
            var group = obj.group = csnToFhirIdMap[obj.encounter.identifier];
            setcsnToFhirIdMap(csnToFhirIdMap)

            // Used as metadata for plotting and logging what was viewed
            obj.row = "Asthma Care Plan";

            // Don't display if the asthma care plan was created on an encounter
            // we don't have access to
            if (!encMap[group]) {
                // This is unlikely to occur, but EHRs are complex systems
                log("Couldn't link care plan to encounter", "warn");
                return false;
            }

            // Use the date of the encounter the document was filed in
            obj.start = encMap[group]._start;

            // Add to count
            if (obj.start > chartConfig.chart.dates.line) {
                chartConfig.rows[chartConfig.rowMap[obj.row]].count++;
            }

            obj.hoverDetails = [
                {
                    key: "Date",
                    value: obj.start.toLocaleDateString()
                }
            ];

            // Only do this for the historical ACPs
            if (obj.element == "MEDCIN#258735" && encMap[group].detailMap) {
                encMap[group].detailMap["Asthma Care Plan"] = {
                    link: asthmaCarePlanReport
                };
                encMap[group]._acp = obj.value && obj.value.length > 0 ? obj.value.replace(/\,/g, "%2C") : "";
            }
            return true;
        } else {
            return false;
        }
    });
}


function asthmaCarePlanReport(elem, data) {
    try {
        log("Asthma Care Plan report click event.", "info");
        executeAction({
            action: "Epic.Clinical.Informatics.Web.OpenExternalWindow",
            args:  __PDF_GEN_HOST__ + data._acp + "%22"
        });
    } catch (error) {
       log(error.stack, "error");
    }
}



module.exports =
{
    getAsthmaActionPlan,
    getAsthmaCarePlan,
    chopFilterCarePlans,
    getCarePlans : () => carePlans,
    setCarePlans : (v) => carePlans = v
}