 var visitData = {
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 7,
    "link": [
      {
        "relation": "self",
        "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter?date=ge2023-07-07&date=le2024-03-05&patient=ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3&_include=Encounter:Location"
      }
    ],
    "entry": [
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e2Tk-EpHkXGN5FhxDAaJWoQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e2Tk-EpHkXGN5FhxDAaJWoQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e2Tk-EpHkXGN5FhxDAaJWoQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133210"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133210"
            }
          ],
          "status": "in-progress",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "107",
                  "display": "Refill"
                }
              ],
              "text": "Refill"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2024-02-27",
            "end": "2024-02-27"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
                "display": "Karabots Pediatric Care Center"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eoulTs8V0tA80j9agIzaH1A3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eoulTs8V0tA80j9agIzaH1A3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eoulTs8V0tA80j9agIzaH1A3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200092968"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200092968"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "201",
                  "display": "Social Work Encounter"
                }
              ],
              "text": "Social Work Encounter"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2022-10-12",
            "end": "2022-10-12"
          },
          "location": [
            {
              "location": {
                "reference": "Location/env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3",
                "display": "BUERGER HEMATOLOGY"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eUxru8uyR7.HuV44sDMWDXA3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eUxru8uyR7.HuV44sDMWDXA3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eUxru8uyR7.HuV44sDMWDXA3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200092866"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200092866"
            }
          ],
          "status": "in-progress",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "160",
                  "display": "Care Coordination"
                }
              ],
              "text": "Care Coordination"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2022-10-11",
            "end": "2022-10-11"
          },
          "location": [
            {
              "location": {
                "reference": "Location/env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3",
                "display": "BUERGER HEMATOLOGY"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/ev6er7KG72KZ4K-BOyBPV9A3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/ev6er7KG72KZ4K-BOyBPV9A3",
        "resource": {
          "resourceType": "Encounter",
          "id": "ev6er7KG72KZ4K-BOyBPV9A3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200092864"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200092864"
            }
          ],
          "status": "in-progress",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2022-10-11",
            "end": "2022-10-11"
          },
          "location": [
            {
              "location": {
                "reference": "Location/env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3",
                "display": "BUERGER HEMATOLOGY"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3",
        "resource": {
          "resourceType": "Location",
          "id": "env0nFaCWVjGbQT8VcZ3CCNYKslLcM4PiMWylEs0q2lc3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "27",
                    "display": "Hematology"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101012085"
            }
          ],
          "status": "active",
          "name": "BUERGER HEMATOLOGY",
          "alias": [
            "BCHM",
            "BCC HEMATOLOGY",
            "CHOP HEMATOLOGY"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-3437",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-3992"
            }
          ],
          "address": {
            "line": [
              "3500 Civic Center Blvd",
              "Buerger Ctr for Advanced Ped Care"
            ],
            "city": "PHILADELPHIA",
            "state": "Pennsylvania",
            "postalCode": "19104",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/ePZt-tneUM45fQsWVLxZAFg3",
            "display": "CHCA PA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/euLDMs1yHH3wEjXEmtmbv0A3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/euLDMs1yHH3wEjXEmtmbv0A3",
        "resource": {
          "resourceType": "Encounter",
          "id": "euLDMs1yHH3wEjXEmtmbv0A3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133188"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133188"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "6",
            "display": "Discharge"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.10110",
                  "code": "3",
                  "display": "Emergency"
                }
              ],
              "text": "Emergency"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "3",
                  "display": "Hospital Encounter"
                }
              ],
              "text": "Hospital Encounter"
            }
          ],
          "serviceType": {
            "coding": [
              {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18886",
                "code": "305",
                "display": "Emergency"
              }
            ],
            "text": "Emergency"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2023-10-04T13:00:00Z",
            "end": "2023-10-04T16:00:00Z"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.728286",
                  "code": "5220",
                  "display": "Respiratory Distress"
                }
              ],
              "text": "Respiratory Distress"
            }
          ],
          "account": [
            {
              "identifier": {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.726582",
                "value": "9000649522"
              },
              "display": "GALLAGHER,NOEL"
            }
          ],
          "hospitalization": {
            "dischargeDisposition": {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18888",
                  "code": "4",
                  "display": "Left Without Being Seen"
                }
              ],
              "text": "Left Without Being Seen"
            }
          },
          "location": [
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              },
              "period": {
                "start": "2023-10-04T13:00:00Z",
                "end": "2023-10-04T16:00:00Z"
              }
            },
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/evmYc8kPIxVMwSkdwIrGXUQ3",
                "display": "Children's Hospital of Philadelphia"
              }
            },
            {
              "location": {
                "reference": "Location/eWkJVwxuYQm1orMoNEPMl0w3",
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "ro",
                    "display": "Room"
                  }
                ],
                "text": "Room"
              }
            },
            {
              "location": {
                "identifier": {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.666968",
                  "value": "3339"
                },
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "bd",
                    "display": "Bed"
                  }
                ],
                "text": "Bed"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eOEet6qLLSEijc1iC5y8A4A3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eOEet6qLLSEijc1iC5y8A4A3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eOEet6qLLSEijc1iC5y8A4A3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133184"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133184"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "6",
            "display": "Discharge"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.10110",
                  "code": "3",
                  "display": "Emergency"
                }
              ],
              "text": "Emergency"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "3",
                  "display": "Hospital Encounter"
                }
              ],
              "text": "Hospital Encounter"
            }
          ],
          "serviceType": {
            "coding": [
              {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18886",
                "code": "305",
                "display": "Emergency"
              }
            ],
            "text": "Emergency"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2023-06-26T13:00:00Z",
            "end": "2023-06-26T14:00:00Z"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.728286",
                  "code": "5220",
                  "display": "Respiratory Distress"
                }
              ],
              "text": "Respiratory Distress"
            }
          ],
          "account": [
            {
              "identifier": {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.726582",
                "value": "9000649521"
              },
              "display": "GALLAGHER,NOEL"
            }
          ],
          "hospitalization": {
            "dischargeDisposition": {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18888",
                  "code": "4",
                  "display": "Left Without Being Seen"
                }
              ],
              "text": "Left Without Being Seen"
            }
          },
          "location": [
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              },
              "period": {
                "start": "2023-06-26T13:00:00Z",
                "end": "2023-06-26T14:00:00Z"
              }
            },
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/evmYc8kPIxVMwSkdwIrGXUQ3",
                "display": "Children's Hospital of Philadelphia"
              }
            },
            {
              "location": {
                "reference": "Location/eWkJVwxuYQm1orMoNEPMl0w3",
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "ro",
                    "display": "Room"
                  }
                ],
                "text": "Room"
              }
            },
            {
              "location": {
                "identifier": {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.666968",
                  "value": "3339"
                },
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "bd",
                    "display": "Bed"
                  }
                ],
                "text": "Bed"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e4LaS4sGigpkTxY6ilo3gEQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e4LaS4sGigpkTxY6ilo3gEQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e4LaS4sGigpkTxY6ilo3gEQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133205"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133205"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2023-06-28T13:00:00Z",
                "end": "2023-06-28T13:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-06-28T13:00:00Z",
            "end": "2023-06-28T13:30:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eNBwacqeK8lkyhpG9tgXsfg3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eNBwacqeK8lkyhpG9tgXsfg3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eNBwacqeK8lkyhpG9tgXsfg3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133187"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133184H"
            }
          ],
          "status": "unknown",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.10110",
                  "code": "3",
                  "display": "Emergency"
                }
              ],
              "text": "Emergency"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "115",
                  "display": "Resolute Professional Billing Hospital Prof Fee"
                }
              ],
              "text": "Resolute Professional Billing Hospital Prof Fee"
            }
          ],
          "serviceType": {
            "coding": [
              {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18886",
                "code": "305",
                "display": "Emergency"
              }
            ],
            "text": "Emergency"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2023-06-26T04:00:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/eWkJVwxuYQm1orMoNEPMl0w3",
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "ro",
                    "display": "Room"
                  }
                ],
                "text": "Room"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eJax.3V2SXJDD.zDnyfzy5g3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eJax.3V2SXJDD.zDnyfzy5g3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eJax.3V2SXJDD.zDnyfzy5g3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133191"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133191"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "period": {
                "start": "2023-06-03T13:00:00Z",
                "end": "2023-06-03T13:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-06-03T13:00:00Z",
            "end": "2023-06-03T13:30:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
                "display": "Karabots Pediatric Care Center"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eVF-DJJeSAYYhQG4l7OaZ2A3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eVF-DJJeSAYYhQG4l7OaZ2A3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eVF-DJJeSAYYhQG4l7OaZ2A3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133198"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133198"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2023-05-10T13:00:00Z",
                "end": "2023-05-10T13:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-05-10T13:00:00Z",
            "end": "2023-05-10T13:30:00Z"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.728286",
                  "code": "11",
                  "display": "Asthma"
                }
              ],
              "text": "Asthma"
            }
          ],
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/ec51kmFLswd43eF3tVxl5iA3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/ec51kmFLswd43eF3tVxl5iA3",
        "resource": {
          "resourceType": "Encounter",
          "id": "ec51kmFLswd43eF3tVxl5iA3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133203"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133203"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2023-04-06T13:00:00Z",
                "end": "2023-04-06T13:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-04-06T13:00:00Z",
            "end": "2023-04-06T13:30:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e2QsLmoBQxCs2-uUcm5rg-w3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e2QsLmoBQxCs2-uUcm5rg-w3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e2QsLmoBQxCs2-uUcm5rg-w3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200105568"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200105568"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "111",
                  "display": "Orders Only"
                }
              ],
              "text": "Orders Only"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "text": "losAuthorizingPhysician"
                }
              ],
              "individual": {
                "reference": "Practitioner/em0Ulgsn.wvFEAa8edwniIQ3",
                "type": "Practitioner",
                "display": "Anthony Luberti, MD"
              }
            }
          ],
          "period": {
            "start": "2023-03-15",
            "end": "2023-03-15"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eKuMKE6UN97b85BG7ufwjS2lUj6EEuMKQ9ig.PfjHysw3",
                "display": "Primary Care, South Philadelphia"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eRXIvvKGjgVbiSq2GXPNpwQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eRXIvvKGjgVbiSq2GXPNpwQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eRXIvvKGjgVbiSq2GXPNpwQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200105024"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200105024"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "111",
                  "display": "Orders Only"
                }
              ],
              "text": "Orders Only"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "text": "losAuthorizingPhysician"
                }
              ],
              "individual": {
                "reference": "Practitioner/e7bLIqbdN2TQm9LgIkdRO.Q3",
                "type": "Practitioner",
                "display": "Stephon N Proctor, PhD"
              }
            }
          ],
          "period": {
            "start": "2023-03-08",
            "end": "2023-03-08"
          },
          "location": [
            {
              "location": {
                "reference": "Location/euPpxGipVOFlmlLNoJizjs0EiRDCNuFfA3tAXTb8-Ru83",
                "display": "Behavioral Health Gender"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/elUgpw0Sa9VqWJJb6n2BJPA3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
        "resource": {
          "resourceType": "Encounter",
          "id": "elUgpw0Sa9VqWJJb6n2BJPA3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133194"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133194"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2023-01-10T14:00:00Z",
                "end": "2023-01-10T14:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-01-10T14:00:00Z",
            "end": "2023-01-10T14:30:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e9.UIJNaWy4HUt0baTyVXXA3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e9.UIJNaWy4HUt0baTyVXXA3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e9.UIJNaWy4HUt0baTyVXXA3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200096470"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200096470"
            }
          ],
          "status": "in-progress",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "150",
                  "display": "Abstract"
                }
              ],
              "text": "Abstract"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2022-12-06",
            "end": "2022-12-06"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eUH1vSO9nX2Oboz1jW4AAp.1ipjhU.Pu1XcY9JX2UBzo3",
                "display": "BUERGER SPINA BIFIDA"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
        "resource": {
          "resourceType": "Location",
          "id": "eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "82",
                    "display": "General Pediatrics"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101018001"
            }
          ],
          "status": "active",
          "name": "Karabots Pediatric Care Center",
          "alias": [
            "KCN"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "267-425-9800",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "267-425-9999"
            }
          ],
          "address": {
            "line": [
              "4865 Market Street"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19139",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eDrPrXD5gAx77Wr6XD5wOlA3",
            "display": "CARE NETWORK WEST PHILA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eKuMKE6UN97b85BG7ufwjS2lUj6EEuMKQ9ig.PfjHysw3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eKuMKE6UN97b85BG7ufwjS2lUj6EEuMKQ9ig.PfjHysw3",
        "resource": {
          "resourceType": "Location",
          "id": "eKuMKE6UN97b85BG7ufwjS2lUj6EEuMKQ9ig.PfjHysw3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "82",
                    "display": "General Pediatrics"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "50601012"
            }
          ],
          "status": "active",
          "name": "Primary Care, South Philadelphia",
          "alias": [
            "PCSP",
            "SP",
            "PRIMARY CARE AT SOUTH PHILLY"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-467-5870",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-467-5873"
            }
          ],
          "address": {
            "line": [
              "1700 South Broad Street"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19145",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eDrPrXD5gAx77Wr6XD5wOlA3",
            "display": "CARE NETWORK WEST PHILA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
        "resource": {
          "resourceType": "Location",
          "id": "ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "3",
                    "display": "Allergy"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101012138"
            }
          ],
          "status": "active",
          "name": "Buerger Center Allergy",
          "alias": [
            "BCCALL",
            "ALL",
            "ALLERGY",
            "CHOP ALLERGY",
            "BCC ALLERGY"
          ],
          "description": "6th Floor Buerger Center \n3500 Civic Center Blvd \n",
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-2549",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-4529"
            }
          ],
          "address": {
            "line": [
              "3500 Civic Center Boulevard"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19104",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/ePZt-tneUM45fQsWVLxZAFg3",
            "display": "CHCA PA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eUH1vSO9nX2Oboz1jW4AAp.1ipjhU.Pu1XcY9JX2UBzo3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eUH1vSO9nX2Oboz1jW4AAp.1ipjhU.Pu1XcY9JX2UBzo3",
        "resource": {
          "resourceType": "Location",
          "id": "eUH1vSO9nX2Oboz1jW4AAp.1ipjhU.Pu1XcY9JX2UBzo3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "82",
                    "display": "General Pediatrics"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101012088"
            }
          ],
          "status": "active",
          "name": "BUERGER SPINA BIFIDA",
          "alias": [
            "BCSB",
            "BCC SPINA BIFIDA"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-2483",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "267-425-0043"
            }
          ],
          "address": {
            "line": [
              "3500 CIVIC CENTER BLVD",
              "Buerger Ctr for Advanced Ped Care"
            ],
            "city": "PHILADELPHIA",
            "state": "Pennsylvania",
            "postalCode": "19104",
            "country": "United States"
          },
          "partOf": {
            "reference": "Location/ePZt-tneUM45fQsWVLxZAFg3",
            "display": "CHCA PA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eWkJVwxuYQm1orMoNEPMl0w3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eWkJVwxuYQm1orMoNEPMl0w3",
        "resource": {
          "resourceType": "Location",
          "id": "eWkJVwxuYQm1orMoNEPMl0w3",
          "status": "active",
          "name": "ED01",
          "alias": [
            "ED01"
          ],
          "mode": "instance",
          "partOf": {
            "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
            "display": "Emergency Department"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
        "resource": {
          "resourceType": "Location",
          "id": "eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "17",
                    "display": "Emergency"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "10292012"
            }
          ],
          "status": "active",
          "name": "Emergency Department",
          "alias": [
            "ED",
            "EMER"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-3480",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-6837"
            }
          ],
          "address": {
            "line": [
              "3401 Civic Center Blvd",
              "The Children's Hospital of Phila"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19104"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eUW0roNt0s6FUEj04d0FFxQ3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/euPpxGipVOFlmlLNoJizjs0EiRDCNuFfA3tAXTb8-Ru83"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/euPpxGipVOFlmlLNoJizjs0EiRDCNuFfA3tAXTb8-Ru83",
        "resource": {
          "resourceType": "Location",
          "id": "euPpxGipVOFlmlLNoJizjs0EiRDCNuFfA3tAXTb8-Ru83",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "8",
                    "display": "Behavioral Health Services"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101016122"
            }
          ],
          "status": "active",
          "name": "Behavioral Health Gender",
          "alias": [
            "MTBHG"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "267-426-5980",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-7350"
            }
          ],
          "address": {
            "line": [
              "3550 Market Street"
            ],
            "city": "PHILADELPHIA",
            "state": "Pennsylvania",
            "postalCode": "19104",
            "country": "United States"
          },
          "partOf": {
            "reference": "Location/e1.-tTg8Rn0CsZxpxM1MXgw3",
            "display": "BEHAVIORAL HEALTH RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/evmYc8kPIxVMwSkdwIrGXUQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/evmYc8kPIxVMwSkdwIrGXUQ3",
        "resource": {
          "resourceType": "Location",
          "id": "evmYc8kPIxVMwSkdwIrGXUQ3",
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.696570",
              "value": "10"
            }
          ],
          "status": "active",
          "name": "Children's Hospital of Philadelphia",
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-1000",
              "rank": 1
            }
          ],
          "address": {
            "line": [
              "3401 CIVIC CTR BLVD."
            ],
            "city": "PHILADELPHIA",
            "state": "Pennsylvania",
            "postalCode": "19104"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eFzbodhqV8RJ4yAzfRh7UyQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eFzbodhqV8RJ4yAzfRh7UyQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eFzbodhqV8RJ4yAzfRh7UyQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133208"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133208"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2024-01-11T14:00:00Z",
                "end": "2024-01-11T14:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2024-01-11T14:00:00Z",
            "end": "2024-01-11T14:30:00Z"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.728286",
                  "code": "11",
                  "display": "Asthma"
                }
              ],
              "text": "Asthma"
            }
          ],
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eL0PyrCZ-4638FHl.IRBvRw3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/eL0PyrCZ-4638FHl.IRBvRw3",
        "resource": {
          "resourceType": "Encounter",
          "id": "eL0PyrCZ-4638FHl.IRBvRw3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            },
            {
              "valueBoolean": false,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/accidentrelated"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133206"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133206"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "1605",
                  "display": "Follow Up"
                }
              ],
              "text": "Follow Up"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/v3/ParticipationType",
                      "code": "REF",
                      "display": "referrer"
                    }
                  ],
                  "text": "referrer"
                }
              ],
              "individual": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              }
            },
            {
              "period": {
                "start": "2023-12-11T14:00:00Z",
                "end": "2023-12-11T14:30:00Z"
              },
              "individual": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "display": "Brian Jenssen, MD"
              }
            }
          ],
          "period": {
            "start": "2023-12-11T14:00:00Z",
            "end": "2023-12-11T14:30:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
                "display": "Buerger Center Allergy"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e3pS3VS1cfWzcKSVJ1LqdkQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e3pS3VS1cfWzcKSVJ1LqdkQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e3pS3VS1cfWzcKSVJ1LqdkQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133190"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133188H"
            }
          ],
          "status": "unknown",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.10110",
                  "code": "3",
                  "display": "Emergency"
                }
              ],
              "text": "Emergency"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "115",
                  "display": "Resolute Professional Billing Hospital Prof Fee"
                }
              ],
              "text": "Resolute Professional Billing Hospital Prof Fee"
            }
          ],
          "serviceType": {
            "coding": [
              {
                "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.18886",
                "code": "305",
                "display": "Emergency"
              }
            ],
            "text": "Emergency"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2023-10-04T04:00:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
                "display": "Emergency Department"
              }
            },
            {
              "location": {
                "reference": "Location/eWkJVwxuYQm1orMoNEPMl0w3",
                "display": "ED01"
              },
              "physicalType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
                    "code": "ro",
                    "display": "Room"
                  }
                ],
                "text": "Room"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e6y3gtsVT9pT7kkWjcpbTJg3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/e6y3gtsVT9pT7kkWjcpbTJg3",
        "resource": {
          "resourceType": "Encounter",
          "id": "e6y3gtsVT9pT7kkWjcpbTJg3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200133211"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200133211"
            }
          ],
          "status": "in-progress",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "13",
            "display": "Support OP Encounter"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "107",
                  "display": "Refill"
                }
              ],
              "text": "Refill"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "individual": {
                "reference": "Practitioner/ea2gCne8Ky3RmPt0MkcEsIw3",
                "type": "Practitioner",
                "display": "Jeffrey Fendrick, MD"
              }
            }
          ],
          "period": {
            "start": "2023-08-24",
            "end": "2023-08-24"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.728286",
                  "code": "11",
                  "display": "Asthma"
                }
              ],
              "text": "Asthma"
            }
          ],
          "location": [
            {
              "location": {
                "reference": "Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
                "display": "Karabots Pediatric Care Center"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/edxRb2-cSfStwNNCrgw8PrQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Encounter/edxRb2-cSfStwNNCrgw8PrQ3",
        "resource": {
          "resourceType": "Encounter",
          "id": "edxRb2-cSfStwNNCrgw8PrQ3",
          "extension": [
            {
              "valueBoolean": true,
              "url": "http://open.epic.com/FHIR/StructureDefinition/extension/is-scannable-encounter"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200115902"
            },
            {
              "use": "usual",
              "type": {
                "text": "billing-number"
              },
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.17",
              "value": "8200115902"
            }
          ],
          "status": "finished",
          "class": {
            "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260",
            "code": "5",
            "display": "Appointment"
          },
          "type": [
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.10.698084.30",
                  "code": "101",
                  "display": "Office Visit"
                }
              ],
              "text": "Office Visit"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.808267",
                  "code": "4014",
                  "display": "ADOLESCENT TEEN WELL VISIT"
                }
              ],
              "text": "ADOLESCENT TEEN WELL VISIT"
            }
          ],
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "participant": [
            {
              "period": {
                "start": "2023-07-27T13:00:00Z",
                "end": "2023-07-27T13:15:00Z"
              },
              "individual": {
                "reference": "Practitioner/emndiOOJhq3BD1MA6QYb9TA3",
                "display": "Joanne Alfandre, MD"
              }
            }
          ],
          "period": {
            "start": "2023-07-27T13:00:00Z",
            "end": "2023-07-27T13:15:00Z"
          },
          "location": [
            {
              "location": {
                "reference": "Location/ezSZC63F7n1Xdhnc8JfxeRMepPP-8y.EcETFCeaZz5Ho3",
                "display": "Primary Care, Coatesville"
              }
            }
          ]
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
        "resource": {
          "resourceType": "Location",
          "id": "eGo9Icsx-TmSBQ83te0.4Am8QBRA-xhDev9Ta-2LSUXM3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "82",
                    "display": "General Pediatrics"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101018001"
            }
          ],
          "status": "active",
          "name": "Karabots Pediatric Care Center",
          "alias": [
            "KCN"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "267-425-9800",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "267-425-9999"
            }
          ],
          "address": {
            "line": [
              "4865 Market Street"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19139",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eDrPrXD5gAx77Wr6XD5wOlA3",
            "display": "CARE NETWORK WEST PHILA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
        "resource": {
          "resourceType": "Location",
          "id": "ePv4p4HaZDsRrzuPOMkyqQY-t7Qrj2fNR1yDfYSiVlEU3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "3",
                    "display": "Allergy"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "101012138"
            }
          ],
          "status": "active",
          "name": "Buerger Center Allergy",
          "alias": [
            "BCCALL",
            "ALL",
            "ALLERGY",
            "CHOP ALLERGY",
            "BCC ALLERGY"
          ],
          "description": "6th Floor Buerger Center \n3500 Civic Center Blvd \n",
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-2549",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-4529"
            }
          ],
          "address": {
            "line": [
              "3500 Civic Center Boulevard"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19104",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/ePZt-tneUM45fQsWVLxZAFg3",
            "display": "CHCA PA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eWkJVwxuYQm1orMoNEPMl0w3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eWkJVwxuYQm1orMoNEPMl0w3",
        "resource": {
          "resourceType": "Location",
          "id": "eWkJVwxuYQm1orMoNEPMl0w3",
          "status": "active",
          "name": "ED01",
          "alias": [
            "ED01"
          ],
          "mode": "instance",
          "partOf": {
            "reference": "Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
            "display": "Emergency Department"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
        "resource": {
          "resourceType": "Location",
          "id": "eY679mGfHc4FR74mk1fecMO0KkSg7cUy6GQm8IZnH2Eg3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "17",
                    "display": "Emergency"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "10292012"
            }
          ],
          "status": "active",
          "name": "Emergency Department",
          "alias": [
            "ED",
            "EMER"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-3480",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "215-590-6837"
            }
          ],
          "address": {
            "line": [
              "3401 Civic Center Blvd",
              "The Children's Hospital of Phila"
            ],
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "postalCode": "19104"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eUW0roNt0s6FUEj04d0FFxQ3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/evmYc8kPIxVMwSkdwIrGXUQ3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/evmYc8kPIxVMwSkdwIrGXUQ3",
        "resource": {
          "resourceType": "Location",
          "id": "evmYc8kPIxVMwSkdwIrGXUQ3",
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.696570",
              "value": "10"
            }
          ],
          "status": "active",
          "name": "Children's Hospital of Philadelphia",
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "215-590-1000",
              "rank": 1
            }
          ],
          "address": {
            "line": [
              "3401 CIVIC CTR BLVD."
            ],
            "city": "PHILADELPHIA",
            "state": "Pennsylvania",
            "postalCode": "19104"
          }
        },
        "search": {
          "mode": "include"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ezSZC63F7n1Xdhnc8JfxeRMepPP-8y.EcETFCeaZz5Ho3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/Location/ezSZC63F7n1Xdhnc8JfxeRMepPP-8y.EcETFCeaZz5Ho3",
        "resource": {
          "resourceType": "Location",
          "id": "ezSZC63F7n1Xdhnc8JfxeRMepPP-8y.EcETFCeaZz5Ho3",
          "extension": [
            {
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.72.1.7.7.10.688867.4150",
                    "code": "82",
                    "display": "General Pediatrics"
                  }
                ]
              },
              "url": "https://open.epic.com/fhir/extensions/specialty"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.686980",
              "value": "58305012"
            }
          ],
          "status": "active",
          "name": "Primary Care, Coatesville",
          "alias": [
            "KCO"
          ],
          "mode": "instance",
          "telecom": [
            {
              "system": "phone",
              "value": "610-384-9500",
              "rank": 1
            },
            {
              "system": "fax",
              "value": "610-384-3998"
            }
          ],
          "address": {
            "line": [
              "495 HIGHLANDS BOULEVARD"
            ],
            "city": "COATESVILLE",
            "state": "Pennsylvania",
            "postalCode": "19320",
            "country": "United States"
          },
          "managingOrganization": {
            "reference": "Organization/e3Bc3og0-TIp8jpj2ygonmA3",
            "display": "CHILDREN'S HOSPITAL OF PHILADELPHIA RL"
          },
          "partOf": {
            "reference": "Location/eFxFnB833SujTdMVnJGyulg3",
            "display": "CARE NETWORK COMMUNITY RL"
          }
        },
        "search": {
          "mode": "include"
        }
      }
    ]
}

module.exports = visitData