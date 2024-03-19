// import jQuery from "jquery";

const chartConfig = require("./healthChartConfig");
const { search } = require("./http");
// import { search } from "./http.js";
// import { console.log } from "./console.logger.js";
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

  const customHosts = require('./chopcustomHosts.js')
var csnList;

var csnToDatMap;

function getEncDat() {
    csnList = getcsnList()
    return search(customHosts[sessionStorage["env"]] + "CHOP/2015/CHOP/Clinical/Csn2Dat", JSON.stringify({
        csn: csnList
    }), "POST", {"Content-Type": "application/json"}).then(function(map, state, xhr) {
        try {
            if (xhr.status != 200) {
                // chartConfig.chart.failure = true;
                console.log(this.type + " " + this.url + " " + xhr.status, "error");
                return;
            }
            csnToDatMap = map.map;
        } catch (error) {
            console.log(error.stack, "error");
        }
    });
}

module.exports =  {
    getcsnToDatMap:()=>csnToDatMap,
    getEncDat
};