const chartConfig = require("./healthChartConfig");
var carePlans = [];
function chopFilterCarePlans(encMap) {
    // console.log(chartConfig.chart.dates)
    // chartConfig.chart.dates ={}
    carePlans = carePlans.filter(function(obj, index) {
        // Use date of entry as start date
        obj.start = new Date(obj.date);
        if (obj.start < today) {
            // Move basic data higher on the object
            var group = obj.group = csnToFhirIdMap[obj.encounter.identifier];

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




module.exports =
{
    chopFilterCarePlans,
    getCarePlans : () => carePlans,
    setCarePlans : (v) => carePlans = v
}