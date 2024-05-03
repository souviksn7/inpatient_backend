var medsdata = {
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 2,
    "link": [
      {
        "relation": "self",
        "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest?date=ge2022-03-07T05:00:00Z&date=le2022-11-05T03:59:59Z&patient=ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3"
      }
    ],
    "entry": [
        {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005058"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCmkvsu92oFvIM10RzQ.SXVa6BFvQK03HEggpIO2ZzacjLeq1SrrKYCkYcWqsXnE1rG5T3jyob-09PKRwWugDkCE3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eJax.3V2SXJDD.zDnyfzy5g3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133191"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "427679007",
                      "display": "Mild intermittent asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.90",
                      "display": "Mild intermittent asthma, unspecified whether complicated"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.20",
                      "display": "Mild intermittent asthma, unspecified whether complicated"
                    }
                  ],
                  "text": "Mild intermittent asthma, unspecified whether complicated"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale TWO puff(s) by mouth 2 times daily.\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale TWO puff(s) by mouth 2 times daily.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-03"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-06-03"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e6449cDHRUXZuzdXAZh43iCNpvJyJqzzyjPYcmQuMPeg3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e6449cDHRUXZuzdXAZh43iCNpvJyJqzzyjPYcmQuMPeg3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "e6449cDHRUXZuzdXAZh43iCNpvJyJqzzyjPYcmQuMPeg3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005054"
                }
              ],
              "status": "completed",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/etBEkOP7-krtfGOpC7c5C-gODRYjo4IP5USO5sikPghU7zpcOwQqffqYkI8ahwnIU69u4lloW4ZCJka-h5Ht0089hrMKgQc8VXR1qwo.xyI03",
                "display": "albuterol (HFA) oral inhaler (ED ONLY FOR HOME USE)"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/euLDMs1yHH3wEjXEmtmbv0A3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133188"
                },
                "display": "Emergency"
              },
              "authoredOn": "2024-02-27T15:54:02Z",
              "requester": {
                "reference": "Practitioner/e5vwfVVDi07QkRqOZYJztbw3",
                "type": "Practitioner",
                "display": "Naomi Love, RN"
              },
              "recorder": {
                "reference": "Practitioner/e5vwfVVDi07QkRqOZYJztbw3",
                "type": "Practitioner",
                "display": "Naomi Love, RN"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "2 puff(s) (0.04 Puff/kg), Inhaled, ONCE, 1 dose, On Tue 2/27/24 at 1100",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-10-04T15:00:00Z",
                        "end": "2023-10-04T15:00:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e6RD1bwXJPYa6-CYaYPaOp0OhuvfPDIWcXUS8uukwuqs3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e6RD1bwXJPYa6-CYaYPaOp0OhuvfPDIWcXUS8uukwuqs3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "e6RD1bwXJPYa6-CYaYPaOp0OhuvfPDIWcXUS8uukwuqs3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005053"
                }
              ],
              "status": "completed",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eZWM3FJx-aSdgAB1ypHbmszfogvFd7ajwCiMNgToxwlgF9JFqnW47A1nWAZcU4Y4aX0VmHC1DvO6gMMaoCZUfge6yRPbVLE4diElqKqvxdqE3",
                "display": "dexamethasone tablet"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/euLDMs1yHH3wEjXEmtmbv0A3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133188"
                },
                "display": "Emergency"
              },
              "authoredOn": "2024-02-27T15:54:02Z",
              "requester": {
                "reference": "Practitioner/e5vwfVVDi07QkRqOZYJztbw3",
                "type": "Practitioner",
                "display": "Naomi Love, RN"
              },
              "recorder": {
                "reference": "Practitioner/e5vwfVVDi07QkRqOZYJztbw3",
                "type": "Practitioner",
                "display": "Naomi Love, RN"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "4 mg (0.08 mg/kg/DOSE), Oral, ONCE, 1 dose, On Tue 2/27/24 at 1100\nAsk family for preference about what to dissolve in: yogurt, cherry syrup, juice\n",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-10-04T13:30:00Z",
                        "end": "2023-10-04T13:30:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 4,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 4,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eNe9Td43OKb2JKMc-gVPyFpv6JtA8QtzDnB0b-KVvbSY3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eNe9Td43OKb2JKMc-gVPyFpv6JtA8QtzDnB0b-KVvbSY3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eNe9Td43OKb2JKMc-gVPyFpv6JtA8QtzDnB0b-KVvbSY3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005067"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCgikdlzh-c1EpziPLxK9jw1crMjGk4FrovLfgvsPgdGb4.LOoVlThPWXjhO-r-Y.urgKcCmpcr6ehfQQNm0HV8s3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eL0PyrCZ-4638FHl.IRBvRw3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133206"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-12-11"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-12-11"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005060"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCvtqSGJo18nH1wl-KhOgspogON2.On7F9J76J-3G7lLMxh3UirOkFRaa1RLZ-ZTgb8JPA0rpoeGqk39Dbpn4jnk3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-01-10"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSMqBPnRRHBKzrjwAvnururSwqqXByOSeHg6HeTvzsvc3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSMqBPnRRHBKzrjwAvnururSwqqXByOSeHg6HeTvzsvc3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eSMqBPnRRHBKzrjwAvnururSwqqXByOSeHg6HeTvzsvc3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005068"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/etvVLQW--WTGUJ3FHdGNH9TqjayFWjPNmsRiVY5T.bSRDr8AArACtaUJGmZeo5ZnEfHeVGCRxPauwJdbbWuH7Vjdkt2uM-u5LtXEUk.OumxU3",
                "display": "FLUTICASONE-SALMETEROL 113-14 MCG/ACT IN AEPB"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/e6y3gtsVT9pT7kkWjcpbTJg3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133211"
                },
                "display": "Refill"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/exjtskIY4kNyWnsA3dGh4vg3",
                "type": "Practitioner",
                "display": "Brian Jenssen, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale 1 puff(s) by mouth 2 times daily.\nDisp-1 Each, R-5, No Print",
                  "patientInstruction": "Inhale 1 puff(s) by mouth 2 times daily.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-08-24"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "7",
                        "display": "Inhalation"
                      }
                    ],
                    "text": "Inhalation"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-08-24"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 1,
                  "unit": "Each"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135856"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eRs39tNfV5xuzM50qCMrDpTCMX2.JGLqjhwe5SZF4-.ChrwVUwPbQzHXZtBn-52CJH7LNXTU876tHrbJcrGrSPHWnt8uC9tIBMusSE5GiI2s3",
                "display": "OXYCODONE-ASPIRIN 4.8355-325 MG OR TABS"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200065186"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2021-08-11",
              "requester": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "recorder": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "62224002",
                      "display": "Abscess of appendix (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "540.1",
                      "display": "Appendicitis with abscess"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "K35.33",
                      "display": "Appendicitis with abscess"
                    }
                  ],
                  "text": "Appendicitis with abscess"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Take 10 tablet(s) by mouth after lunch.\nDisp-10 tablet(s), R-0, Print",
                  "patientInstruction": "Take 10 tablet(s) by mouth after lunch.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2021-08-11"
                      },
                      "timeOfDay": [
                        "13:00:00"
                      ]
                    },
                    "code": {
                      "text": "1300"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "method": {
                    "text": "Take"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 10,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2021-08-11"
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                  "value": 10,
                  "unit": "tablet(s)"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005061"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eMORvI-L7uAk1gKF-eJuargXEQr2t9HaMChol4sNP7FSS85tdUPin4crR0JjEduBMHdcnG4XOSh9JZ3fT8FKLhUR.MDY4b4yFzof815cE38E3",
                "display": "prednisoLONE solution"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27T16:29:01Z",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "80 mg (1.6 mg/kg/DOSE), Oral, ONCE, 1 dose, On Tue 1/10/23 at 0000",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10T05:00:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 80,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 27,
                        "unit": "mL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 80,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005065"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCpKTERrgb.H7hXyXpGIHFUvRFTIuHtRf-JA.lFpSMhl.CerZi.kbCqjLzcuRmGr31jylxwxreoJ1XCTX7TWkQpw3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/e4LaS4sGigpkTxY6ilo3gEQ3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133205"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-28"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-06-28"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005064"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCvjvwxEEvB1LItMdpghBtoeaEIrSjpVt-wYgrJD8nN5U9p4ik9s0nszdi7TXhZh0KSC0-YnIjx3FT5gZJ7Plvi03",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/ec51kmFLswd43eF3tVxl5iA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133203"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-04-06"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-04-06"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135855"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eXLMLJfHprdyABAf1KKKb6Pfc7eXwrtwXgSwBJhkS3etZtTNIAENNdakzcLmzU2TnE7GMsQRlrVgxu9hj-XHl3bZqvGhVrtbAB4ZBtWiOF-Y3",
                "display": "ACETAMINOPHEN-CODEINE 300-30 MG OR TABS"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200065186"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2021-08-11",
              "requester": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "recorder": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "62224002",
                      "display": "Abscess of appendix (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "540.1",
                      "display": "Appendicitis with abscess"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "K35.33",
                      "display": "Appendicitis with abscess"
                    }
                  ],
                  "text": "Appendicitis with abscess"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.\nDisp-5 tablet(s), R-0, Print",
                  "patientInstruction": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2021-08-11"
                      },
                      "frequency": 1,
                      "period": 4,
                      "periodUnit": "h"
                    },
                    "code": {
                      "text": "Every 4 hours PRN"
                    }
                  },
                  "asNeededBoolean": true,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "method": {
                    "text": "Take"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 30,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 30,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2021-08-11"
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                  "value": 5,
                  "unit": "tablet(s)"
                },
                "expectedSupplyDuration": {
                  "value": 1,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005059"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eQ19z.sJTwT.dmvDnWW8lR.nf851eAMtsXgyazehEUooRKcqhRdcZ48UlKHBz3NQXSB4AD50IFljTO9X7sgduALObTV06jdiPvRkW9JElPr03",
                "display": "OMALIZUMAB 150 MG SC SOLR"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27T16:24:05Z",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "150 mg, Subcutaneous, EVERY 28 DAYS, 36 doses, First dose on Tue 1/10/23 at 0000, Last dose on Tue 9/16/25 at 0000, Routine",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10T05:00:00Z",
                        "end": "2025-10-14T03:59:00Z"
                      },
                      "count": 36,
                      "frequency": 1,
                      "period": 4,
                      "periodUnit": "wk"
                    },
                    "code": {
                      "text": "Every 28 days"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "18",
                        "display": "Subcutaneous"
                      }
                    ],
                    "text": "Subcutaneous"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "e2AEzkXVju0jHSwVabowCtQuL1e6h6YBuAJro3pQ2OCc3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005058"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCmkvsu92oFvIM10RzQ.SXVa6BFvQK03HEggpIO2ZzacjLeq1SrrKYCkYcWqsXnE1rG5T3jyob-09PKRwWugDkCE3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eJax.3V2SXJDD.zDnyfzy5g3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133191"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "427679007",
                      "display": "Mild intermittent asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.90",
                      "display": "Mild intermittent asthma, unspecified whether complicated"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.20",
                      "display": "Mild intermittent asthma, unspecified whether complicated"
                    }
                  ],
                  "text": "Mild intermittent asthma, unspecified whether complicated"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale TWO puff(s) by mouth 2 times daily.\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale TWO puff(s) by mouth 2 times daily.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-03"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-06-03"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ePB3qpLsu5Xf6VCQxujqldzWJ0tZmvHg94D35WFv9oR83",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005060"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCvtqSGJo18nH1wl-KhOgspogON2.On7F9J76J-3G7lLMxh3UirOkFRaa1RLZ-ZTgb8JPA0rpoeGqk39Dbpn4jnk3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-01-10"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eQZ19j.V8G.Vqz1L3N3cxL0tHewWLpmq9uFkzChO2a3g3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eQZ19j.V8G.Vqz1L3N3cxL0tHewWLpmq9uFkzChO2a3g3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eQZ19j.V8G.Vqz1L3N3cxL0tHewWLpmq9uFkzChO2a3g3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135860"
                }
              ],
              "status": "completed",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/etBEkOP7-krtfGOpC7c5C-kx8IT6cWOU5B7lseQOH3qBPEPk9jU0s79.k0Quj5c9y0jeRH76hLf.WkrkA2k-iFuUg7lPCkCpo98bbsMIBdLo3",
                "display": "albuterol (HFA) oral inhaler (ED ONLY FOR HOME USE)"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eOEet6qLLSEijc1iC5y8A4A3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133184"
                },
                "display": "Emergency"
              },
              "authoredOn": "2024-02-27T15:38:37Z",
              "requester": {
                "reference": "Practitioner/eWRO4CKa95bReT0lBgCPHdw3",
                "type": "Practitioner",
                "display": "Frances Beth Balamuth, MD"
              },
              "recorder": {
                "reference": "Practitioner/eWRO4CKa95bReT0lBgCPHdw3",
                "type": "Practitioner",
                "display": "Frances Beth Balamuth, MD"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "2 puff(s) (0.04 Puff/kg), Inhaled, ONCE, 1 dose, On Tue 2/27/24 at 1045, STAT\nUse with spacer as directed\n",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-26T13:15:00Z",
                        "end": "2023-06-26T13:15:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSSezsoWq.VPj0pEoDeWYRsa.Ek69hs7z1Gc7JxRmd-E3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSSezsoWq.VPj0pEoDeWYRsa.Ek69hs7z1Gc7JxRmd-E3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eSSezsoWq.VPj0pEoDeWYRsa.Ek69hs7z1Gc7JxRmd-E3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005062"
                }
              ],
              "status": "completed",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eXKll5mnWVVhNY0ECgqPw9pA9V8sBw.S-doXjpmD4BeNR4CHkARSnNRO7I1gIpKUnW-ns93g-6.ToMk2NRQjpNnb2YADrvuAjRuwdRtC2HCE3",
                "display": "dexamethasone tablet"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Take TWO tablet(s) (1 mg total) by mouth once for 1 dose.\nDisp-2 tablet(s), R-0, No Print",
                  "patientInstruction": "Take TWO tablet(s) (1 mg total) by mouth once for 1 dose.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "method": {
                    "text": "Take"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 2,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-01-10"
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                  "value": 2,
                  "unit": "tablet(s)"
                },
                "expectedSupplyDuration": {
                  "value": 1,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135856"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eRs39tNfV5xuzM50qCMrDpTCMX2.JGLqjhwe5SZF4-.ChrwVUwPbQzHXZtBn-52CJH7LNXTU876tHrbJcrGrSPHWnt8uC9tIBMusSE5GiI2s3",
                "display": "OXYCODONE-ASPIRIN 4.8355-325 MG OR TABS"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200065186"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2021-08-11",
              "requester": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "recorder": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "62224002",
                      "display": "Abscess of appendix (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "540.1",
                      "display": "Appendicitis with abscess"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "K35.33",
                      "display": "Appendicitis with abscess"
                    }
                  ],
                  "text": "Appendicitis with abscess"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Take 10 tablet(s) by mouth after lunch.\nDisp-10 tablet(s), R-0, Print",
                  "patientInstruction": "Take 10 tablet(s) by mouth after lunch.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2021-08-11"
                      },
                      "timeOfDay": [
                        "13:00:00"
                      ]
                    },
                    "code": {
                      "text": "1300"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "method": {
                    "text": "Take"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 10,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2021-08-11"
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                  "value": 10,
                  "unit": "tablet(s)"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eiMMWYFsYYE8QFRg8gxKSyMwVjtkGLSLkgvH57QHdOnk3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eiMMWYFsYYE8QFRg8gxKSyMwVjtkGLSLkgvH57QHdOnk3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eiMMWYFsYYE8QFRg8gxKSyMwVjtkGLSLkgvH57QHdOnk3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135862"
                }
              ],
              "status": "completed",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eZWM3FJx-aSdgAB1ypHbms83ajJHQk8ir4xMPB3A.s9VT9KItYG-RTjev5ZniR8.-m8cdqM2yC6c93HfhG1fjHvX7PzyNZfiACODrNbHx60k3",
                "display": "dexamethasone tablet"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eOEet6qLLSEijc1iC5y8A4A3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133184"
                },
                "display": "Emergency"
              },
              "authoredOn": "2024-02-27T15:41:00Z",
              "requester": {
                "reference": "Practitioner/eWRO4CKa95bReT0lBgCPHdw3",
                "type": "Practitioner",
                "display": "Frances Beth Balamuth, MD"
              },
              "recorder": {
                "reference": "Practitioner/eWRO4CKa95bReT0lBgCPHdw3",
                "type": "Practitioner",
                "display": "Frances Beth Balamuth, MD"
              },
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "4 mg (0.08 mg/kg/DOSE), Oral, ONCE, 1 dose, On Tue 2/27/24 at 1045\nAsk family for preference about what to dissolve in: yogurt, cherry syrup, juice\n",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-26T13:15:00Z",
                        "end": "2023-06-26T13:15:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 4,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 4,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ev.ga0l-px45Ew04372qlABuLnKnHlcmwrTwn96juim03",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005061"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eMORvI-L7uAk1gKF-eJuargXEQr2t9HaMChol4sNP7FSS85tdUPin4crR0JjEduBMHdcnG4XOSh9JZ3fT8FKLhUR.MDY4b4yFzof815cE38E3",
                "display": "prednisoLONE solution"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27T16:29:01Z",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "80 mg (1.6 mg/kg/DOSE), Oral, ONCE, 1 dose, On Tue 1/10/23 at 0000",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10T05:00:00Z"
                      },
                      "count": 1
                    },
                    "code": {
                      "text": "Once"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 80,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 27,
                        "unit": "mL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mL"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 80,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ewsmvSm7Kzfhd1EmgiuUKDV9D8EXLjaAKOWJbaLnWy1A3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005065"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCpKTERrgb.H7hXyXpGIHFUvRFTIuHtRf-JA.lFpSMhl.CerZi.kbCqjLzcuRmGr31jylxwxreoJ1XCTX7TWkQpw3",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/e4LaS4sGigpkTxY6ilo3gEQ3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133205"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-06-28"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-06-28"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eyqM8bFi3YLjG0gySZqLzx8nOai81D8xEerZID8tf8HA3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005064"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/ei7iXC1rPwZaFHmLozFrpCvjvwxEEvB1LItMdpghBtoeaEIrSjpVt-wYgrJD8nN5U9p4ik9s0nszdi7TXhZh0KSC0-YnIjx3FT5gZJ7Plvi03",
                "display": "fluticasone 44 mcg inhaler"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/ec51kmFLswd43eF3tVxl5iA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133203"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "continuous",
                    "display": "Continuous long term therapy"
                  }
                ],
                "text": "Continuous long term therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week\nDisp-10.6 g, R-5, No Print",
                  "patientInstruction": "Inhale ONE puff(s) by mouth 2 times daily. Flare Plan: 2 puffs  three times daily for one week",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-04-06"
                      },
                      "timeOfDay": [
                        "08:00:00",
                        "20:00:00"
                      ]
                    },
                    "code": {
                      "text": "0800, 2000"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "71",
                        "display": "Inhaled"
                      }
                    ],
                    "text": "Inhaled"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "puff(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{puff}"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2023-04-06"
                },
                "numberOfRepeatsAllowed": 5,
                "quantity": {
                  "value": 10.6,
                  "unit": "g"
                },
                "expectedSupplyDuration": {
                  "value": 180,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "820135855"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "community",
                      "display": "Community"
                    }
                  ],
                  "text": "Community"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eXLMLJfHprdyABAf1KKKb6Pfc7eXwrtwXgSwBJhkS3etZtTNIAENNdakzcLmzU2TnE7GMsQRlrVgxu9hj-XHl3bZqvGhVrtbAB4ZBtWiOF-Y3",
                "display": "ACETAMINOPHEN-CODEINE 300-30 MG OR TABS"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200065186"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2021-08-11",
              "requester": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "recorder": {
                "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
                "type": "Practitioner",
                "display": "Kathleen O Crocker, MD"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "62224002",
                      "display": "Abscess of appendix (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "540.1",
                      "display": "Appendicitis with abscess"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "K35.33",
                      "display": "Appendicitis with abscess"
                    }
                  ],
                  "text": "Appendicitis with abscess"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.\nDisp-5 tablet(s), R-0, Print",
                  "patientInstruction": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2021-08-11"
                      },
                      "frequency": 1,
                      "period": 4,
                      "periodUnit": "h"
                    },
                    "code": {
                      "text": "Every 4 hours PRN"
                    }
                  },
                  "asNeededBoolean": true,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "15",
                        "display": "Oral"
                      }
                    ],
                    "text": "Oral"
                  },
                  "method": {
                    "text": "Take"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 30,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 1,
                        "unit": "tablet(s)",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 30,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
                }
              ],
              "dispenseRequest": {
                "validityPeriod": {
                  "start": "2021-08-11"
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                  "value": 5,
                  "unit": "tablet(s)"
                },
                "expectedSupplyDuration": {
                  "value": 1,
                  "unit": "Day",
                  "system": "http://unitsofmeasure.org",
                  "code": "d"
                }
              }
            },
            "search": {
              "mode": "match"
            }
          },
          {
            "link": [
              {
                "relation": "self",
                "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83"
              }
            ],
            "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83",
            "resource": {
              "resourceType": "MedicationRequest",
              "id": "eznE67YHGLl9Kd0LnPrEsp3SFrU1teYzepNzAdfh4Bh83",
              "identifier": [
                {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
                  "value": "821005059"
                }
              ],
              "status": "active",
              "intent": "order",
              "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                      "code": "outpatient",
                      "display": "Outpatient"
                    }
                  ],
                  "text": "Outpatient"
                }
              ],
              "medicationReference": {
                "reference": "Medication/eQ19z.sJTwT.dmvDnWW8lR.nf851eAMtsXgyazehEUooRKcqhRdcZ48UlKHBz3NQXSB4AD50IFljTO9X7sgduALObTV06jdiPvRkW9JElPr03",
                "display": "OMALIZUMAB 150 MG SC SOLR"
              },
              "subject": {
                "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
                "display": "Gallagher, Noel"
              },
              "encounter": {
                "reference": "Encounter/elUgpw0Sa9VqWJJb6n2BJPA3",
                "identifier": {
                  "use": "usual",
                  "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
                  "value": "8200133194"
                },
                "display": "Office Visit"
              },
              "authoredOn": "2024-02-27T16:24:05Z",
              "requester": {
                "reference": "Practitioner/e103kbEJHH.y9SScTO1KH0g3",
                "type": "Practitioner",
                "display": "Alison Labadie, MD"
              },
              "recorder": {
                "reference": "Practitioner/eskZZ9BhC7iLkI-ljxBqlkw3",
                "type": "Practitioner",
                "display": "Jeritt G Thayer"
              },
              "reasonCode": [
                {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "10674791000119101",
                      "display": "Acute exacerbation of intermittent allergic asthma (disorder)"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                      "code": "493.02",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    },
                    {
                      "system": "http://hl7.org/fhir/sid/icd-10-cm",
                      "code": "J45.21",
                      "display": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                    }
                  ],
                  "text": "Extrinsic asthma, mild intermittent, with acute exacerbation"
                }
              ],
              "courseOfTherapyType": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                    "code": "acute",
                    "display": "Short course (acute) therapy"
                  }
                ],
                "text": "Short course (acute) therapy"
              },
              "dosageInstruction": [
                {
                  "text": "150 mg, Subcutaneous, EVERY 28 DAYS, 36 doses, First dose on Tue 1/10/23 at 0000, Last dose on Tue 9/16/25 at 0000, Routine",
                  "timing": {
                    "repeat": {
                      "boundsPeriod": {
                        "start": "2023-01-10T05:00:00Z",
                        "end": "2025-10-14T03:59:00Z"
                      },
                      "count": 36,
                      "frequency": 1,
                      "period": 4,
                      "periodUnit": "wk"
                    },
                    "code": {
                      "text": "Every 28 days"
                    }
                  },
                  "asNeededBoolean": false,
                  "route": {
                    "coding": [
                      {
                        "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                        "code": "18",
                        "display": "Subcutaneous"
                      }
                    ],
                    "text": "Subcutaneous"
                  },
                  "doseAndRate": [
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "calculated",
                            "display": "calculated"
                          }
                        ],
                        "text": "calculated"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "admin-amount",
                            "display": "admin-amount"
                          }
                        ],
                        "text": "admin-amount"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    },
                    {
                      "type": {
                        "coding": [
                          {
                            "system": "http://epic.com/CodeSystem/dose-rate-type",
                            "code": "ordered",
                            "display": "ordered"
                          }
                        ],
                        "text": "ordered"
                      },
                      "doseQuantity": {
                        "value": 150,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                      }
                    }
                  ]
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
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
        "resource": {
          "resourceType": "MedicationRequest",
          "id": "eSl.ysI40J7l64CwRhCyFelVOVyQZSKAKZm4Vp.-0jbI3",
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
              "value": "820135856"
            }
          ],
          "status": "active",
          "intent": "order",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                  "code": "community",
                  "display": "Community"
                }
              ],
              "text": "Community"
            }
          ],
          "medicationReference": {
            "reference": "Medication/eRs39tNfV5xuzM50qCMrDpTCMX2.JGLqjhwe5SZF4-.ChrwVUwPbQzHXZtBn-52CJH7LNXTU876tHrbJcrGrSPHWnt8uC9tIBMusSE5GiI2s3",
            "display": "OXYCODONE-ASPIRIN 4.8355-325 MG OR TABS"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "encounter": {
            "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
            "identifier": {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200065186"
            },
            "display": "Office Visit"
          },
          "authoredOn": "2021-08-11",
          "requester": {
            "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
            "type": "Practitioner",
            "display": "Kathleen O Crocker, MD"
          },
          "recorder": {
            "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
            "type": "Practitioner",
            "display": "Kathleen O Crocker, MD"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "62224002",
                  "display": "Abscess of appendix (disorder)"
                },
                {
                  "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                  "code": "540.1",
                  "display": "Appendicitis with abscess"
                },
                {
                  "system": "http://hl7.org/fhir/sid/icd-10-cm",
                  "code": "K35.33",
                  "display": "Appendicitis with abscess"
                }
              ],
              "text": "Appendicitis with abscess"
            }
          ],
          "courseOfTherapyType": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                "code": "acute",
                "display": "Short course (acute) therapy"
              }
            ],
            "text": "Short course (acute) therapy"
          },
          "dosageInstruction": [
            {
              "text": "Take 10 tablet(s) by mouth after lunch.\nDisp-10 tablet(s), R-0, Print",
              "patientInstruction": "Take 10 tablet(s) by mouth after lunch.",
              "timing": {
                "repeat": {
                  "boundsPeriod": {
                    "start": "2021-08-11"
                  },
                  "timeOfDay": [
                    "13:00:00"
                  ]
                },
                "code": {
                  "text": "1300"
                }
              },
              "asNeededBoolean": false,
              "route": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                    "code": "15",
                    "display": "Oral"
                  }
                ],
                "text": "Oral"
              },
              "method": {
                "text": "Take"
              },
              "doseAndRate": [
                {
                  "type": {
                    "coding": [
                      {
                        "system": "http://epic.com/CodeSystem/dose-rate-type",
                        "code": "ordered",
                        "display": "ordered"
                      }
                    ],
                    "text": "ordered"
                  },
                  "doseQuantity": {
                    "value": 10,
                    "unit": "tablet(s)",
                    "system": "http://unitsofmeasure.org",
                    "code": "{tbl}"
                  }
                }
              ]
            }
          ],
          "dispenseRequest": {
            "validityPeriod": {
              "start": "2021-08-11"
            },
            "numberOfRepeatsAllowed": 0,
            "quantity": {
              "value": 10,
              "unit": "tablet(s)"
            }
          }
        },
        "search": {
          "mode": "match"
        }
      },
      {
        "link": [
          {
            "relation": "self",
            "url": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3"
          }
        ],
        "fullUrl": "https://epicnsproxyqa.chop.edu/fhir-dev/api/FHIR/R4/MedicationRequest/ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
        "resource": {
          "resourceType": "MedicationRequest",
          "id": "ezkiMjD5E7bY0iqCFYigOsZvIpgi2VGk03M6g6kzA1is3",
          "identifier": [
            {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.2.798268",
              "value": "820135855"
            }
          ],
          "status": "active",
          "intent": "order",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                  "code": "community",
                  "display": "Community"
                }
              ],
              "text": "Community"
            }
          ],
          "medicationReference": {
            "reference": "Medication/eXLMLJfHprdyABAf1KKKb6Pfc7eXwrtwXgSwBJhkS3etZtTNIAENNdakzcLmzU2TnE7GMsQRlrVgxu9hj-XHl3bZqvGhVrtbAB4ZBtWiOF-Y3",
            "display": "ACETAMINOPHEN-CODEINE 300-30 MG OR TABS"
          },
          "subject": {
            "reference": "Patient/ePMJA35bYO77MYu0cLg6Mi.YMkucrcmq0NHqLK9v5qqU3",
            "display": "Gallagher, Noel"
          },
          "encounter": {
            "reference": "Encounter/eKkurCidCZcI3nH1-QxiP2w3",
            "identifier": {
              "use": "usual",
              "system": "urn:oid:1.2.840.114350.1.13.20.3.7.3.698084.8",
              "value": "8200065186"
            },
            "display": "Office Visit"
          },
          "authoredOn": "2021-08-11",
          "requester": {
            "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
            "type": "Practitioner",
            "display": "Kathleen O Crocker, MD"
          },
          "recorder": {
            "reference": "Practitioner/eGHJaqroQFAsUO8lEm-zIFw3",
            "type": "Practitioner",
            "display": "Kathleen O Crocker, MD"
          },
          "reasonCode": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "62224002",
                  "display": "Abscess of appendix (disorder)"
                },
                {
                  "system": "http://hl7.org/fhir/sid/icd-9-cm/diagnosis",
                  "code": "540.1",
                  "display": "Appendicitis with abscess"
                },
                {
                  "system": "http://hl7.org/fhir/sid/icd-10-cm",
                  "code": "K35.33",
                  "display": "Appendicitis with abscess"
                }
              ],
              "text": "Appendicitis with abscess"
            }
          ],
          "courseOfTherapyType": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
                "code": "acute",
                "display": "Short course (acute) therapy"
              }
            ],
            "text": "Short course (acute) therapy"
          },
          "dosageInstruction": [
            {
              "text": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.\nDisp-5 tablet(s), R-0, Print",
              "patientInstruction": "Take ONE tablet(s) (30 mg total) by mouth every 4 hours as needed for Pain.",
              "timing": {
                "repeat": {
                  "boundsPeriod": {
                    "start": "2021-08-11"
                  },
                  "frequency": 1,
                  "period": 4,
                  "periodUnit": "h"
                },
                "code": {
                  "text": "Every 4 hours PRN"
                }
              },
              "asNeededBoolean": true,
              "route": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.840.114350.1.13.20.3.7.4.798268.7025",
                    "code": "15",
                    "display": "Oral"
                  }
                ],
                "text": "Oral"
              },
              "method": {
                "text": "Take"
              },
              "doseAndRate": [
                {
                  "type": {
                    "coding": [
                      {
                        "system": "http://epic.com/CodeSystem/dose-rate-type",
                        "code": "calculated",
                        "display": "calculated"
                      }
                    ],
                    "text": "calculated"
                  },
                  "doseQuantity": {
                    "value": 30,
                    "unit": "mg",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg"
                  }
                },
                {
                  "type": {
                    "coding": [
                      {
                        "system": "http://epic.com/CodeSystem/dose-rate-type",
                        "code": "admin-amount",
                        "display": "admin-amount"
                      }
                    ],
                    "text": "admin-amount"
                  },
                  "doseQuantity": {
                    "value": 1,
                    "unit": "tablet(s)",
                    "system": "http://unitsofmeasure.org",
                    "code": "{tbl}"
                  }
                },
                {
                  "type": {
                    "coding": [
                      {
                        "system": "http://epic.com/CodeSystem/dose-rate-type",
                        "code": "ordered",
                        "display": "ordered"
                      }
                    ],
                    "text": "ordered"
                  },
                  "doseQuantity": {
                    "value": 30,
                    "unit": "mg",
                    "system": "http://unitsofmeasure.org",
                    "code": "mg"
                  }
                }
              ]
            }
          ],
          "dispenseRequest": {
            "validityPeriod": {
              "start": "2021-08-11"
            },
            "numberOfRepeatsAllowed": 0,
            "quantity": {
              "value": 5,
              "unit": "tablet(s)"
            },
            "expectedSupplyDuration": {
              "value": 1,
              "unit": "Day",
              "system": "http://unitsofmeasure.org",
              "code": "d"
            }
          }
        },
        "search": {
          "mode": "match"
        }
      }
    ]
  }

module.exports = medsdata