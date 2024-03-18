// Date references
var today = new Date();

// Variables to build a map from CSN to other encounter IDs (e.g. FHIR and DAT)
var csnToFhirIdMap = {};
var csnList = [];
var state;
async function setState(v){
    state = v
}

// Set token response variable
var tokenResponse;

// Method to set token response variable
async function setTokenResponse(v) {
    // console.log("in shared js",v)
    tokenResponse = v;
    // console.log("insharedjs",tokenResponse)
}

module.exports = {
    csnList,
    csnToFhirIdMap,
    setTokenResponse,
    today,
    getTokenResponse: () => tokenResponse,
    setState,
    getState: () => state
};