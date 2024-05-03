var hospitalProblem = {
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 0,
    "link": [
      {
        "relation": "self",
        "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/List?code=hospital-problems&patient=ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3"
      }
    ],
    "entry": [
      {
        "fullUrl": "urn:uuid:ca5c2a8c-4f93-44db-b0f7-021812692338",
        "resource": {
          "resourceType": "OperationOutcome",
          "issue": [
            {
              "severity": "warning",
              "code": "processing",
              "details": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.657369",
                    "code": "4101",
                    "display": "Resource request returns no results."
                  }
                ],
                "text": "Resource request returns no results."
              }
            }
          ]
        },
        "search": {
          "mode": "outcome"
        }
      }
    ]
  }


  module.exports = hospitalProblem