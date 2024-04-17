function dateFromString(dte) {
    // If date is null, return null
    if (!dte) {
      return null;
    }
    // If a time zone exists, but is midnight, break the date into parts
    // and remove the timezone. This date form is typically passed for
    // on demand outpatient support encounters like telephone or messaging.
    if (dte.indexOf("T00:00:00Z") >= 0 || dte.indexOf("T") < 0) {
      // console.log("sfjdhfkjdhkfj")
      // Split date into parts to avoid issues with time zones
      var dateParts = dte.split("T")[0].split("-");
      // Use date written as intial start time. Month is zero indexed.
      return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    }
    // console.log( "sdfhsdkjfhkjdshfkj",new Date(dte))
    
    return new Date(dte);
  }
  
  // Implemented this since toLocaleDateString() was adding a significant
  // amount of time in the EHR
  function stringFromDate(dte) {
    // If date is null, return null
    if (!dte) {
      return null;
    }
    // Return date in MM/DD/YYYY format
    return dte.getMonth() + 1 + "/" + dte.getDate() + "/" + dte.getFullYear();
  }



  module.exports = {
    dateFromString,
    stringFromDate
  }