const { getTokenResponse,getState} = require('./shared')


const { JSDOM } = require("jsdom");

var urlRegex = /.*api\/(.*)/;



const _ = require("lodash");
const jquery = require("jquery")(new JSDOM().window);
let tokenResponse,state;
function search(endpoint, data, method, headers) {
    try {
        tokenResponse = getTokenResponse()
        state = getState()
        // console.log(tokenResponse)
      method = method || "GET";
  
      // Build headers
      headers = headers || {};
      headers.Authorization = "Bearer " + tokenResponse.access_token;
      headers.accept = "application/json";
  
      // Initialize url variable
      var url;
      // Conditionally constructs endpoint based on the base URL
      if (endpoint.indexOf("chop.edu") >= 0) {
        url = endpoint;
      } else {
        url = state.baseUrl + endpoint;
      }
  
      // Get time object. Date.now() is more efficient, which is
      // why we attempt to get this first, but it is not available
      // in all versions of IE.
      var time = Date ? Date.now() : new Date();
  
      // Send request
      return jquery.ajax({
        url: url,
        type: method,
        headers: headers,
        time: time,
        timeout: 20000,
        traditional: true,
        data: data,
        success: function (xhr) {
          // Only send metrics for Encounter and MedicationRequest requests
          if (
            this.url.indexOf("FHIR/R4/Encounter") === -1 &&
            this.url.indexOf("FHIR/R4/MedicationRequest") === -1
          ) {
            return;
          }
  
          // Get time object. Date.now() is more efficient, which is
          // why we attempt to get this first, but it is not available
          // in all versions of IE.
          var endTime = Date ? Date.now() : new Date();
  
          // Extract path and cache timestamp from url
          var urlMatch = this.url.match(urlRegex);
          var tmpObj = {
            "transaction.duration.ms": endTime - this.time,
          };
  
          if (urlMatch) {
            if (urlMatch[1]) {
              tmpObj.path = urlMatch[1];
            }
          }
  
          // Log transaction time for individual request
          // Uses logD to avoid holding up the current transactions
          console.log(tmpObj, "info");
        },
        error: function (xhr, textStatus, errorThrown) {
          // Log the error here, but rely on the "then" fail function from the "when"
          // to determine if the application should fail
          console.log(
            this.type +
              " " +
              this.url +
              " " +
              xhr.status +
              " (" +
              (xhr.responseText || errorThrown) +
              ")",
            "error"
          );
        },
      });
    } catch (error) {
      // chartConfig.chart.failure = true;
      // log(error.stack, "error");
      console.log("search error", error);
    }
  }




  module.exports = {
    search
  }