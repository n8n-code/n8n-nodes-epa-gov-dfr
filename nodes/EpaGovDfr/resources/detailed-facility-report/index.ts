import type { INodeProperties } from 'n8n-workflow';

export const detailedFacilityReportDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					]
				}
			},
			"options": [
				{
					"name": "GET Dfr Rest Services Air 3 Yr Download",
					"value": "GET Dfr Rest Services Air 3 Yr Download",
					"action": "Downloads the complete Air Compliance History Section of the DFR",
					"description": "For the provided system identifier, dowloads all displayed Air quaterly/monthly Facility Level Status, High Priority Violation (HPV) History, HPV Detailed Violations and Federal Reportable Violation  information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dfr_rest_services.air_3_yr_download"
						}
					}
				},
				{
					"name": "POST Dfr Rest Services Air 3 Yr Download",
					"value": "POST Dfr Rest Services Air 3 Yr Download",
					"action": "Downloads the complete Air Compliance History Section of the DFR",
					"description": "For the provided system identifier, dowloads all displayed Air quaterly/monthly Facility Level Status, High Priority Violation (HPV) History, HPV Detailed Violations and Federal Reportable Violation  information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dfr_rest_services.air_3_yr_download"
						}
					}
				},
				{
					"name": "GET Dfr Rest Services Cwa 3 Yr Effluent Download",
					"value": "GET Dfr Rest Services Cwa 3 Yr Effluent Download",
					"action": "Downloads NPDES Effluent Violation Information by month and quarter.",
					"description": "For the provided system identifier, dowloads all displayed NPDES quaterly/monthly effluent violation information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dfr_rest_services.cwa_3_yr_effluent_download"
						}
					}
				},
				{
					"name": "POST Dfr Rest Services Cwa 3 Yr Effluent Download",
					"value": "POST Dfr Rest Services Cwa 3 Yr Effluent Download",
					"action": "Downloads NPDES Effluent Violation Information by month and quarter.",
					"description": "For the provided system identifier, dowloads all displayed NPDES quaterly/monthly effluent violation information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dfr_rest_services.cwa_3_yr_effluent_download"
						}
					}
				},
				{
					"name": "GET Dfr Rest Services Cwa 3 Yr Sepscs Download",
					"value": "GET Dfr Rest Services Cwa 3 Yr Sepscs Download",
					"action": "Downloads NPDES Compliance Schedule, Permit Schedule and Single Event Violation Information by month and quarter.",
					"description": "For the provided system identifier, dowloads all displayed NPDES quaterly/monthly Compliance Schedule, Permit Schedule, and Single Event Violation  information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dfr_rest_services.cwa_3_yr_sepscs_download"
						}
					}
				},
				{
					"name": "POST Dfr Rest Services Cwa 3 Yr Sepscs Download",
					"value": "POST Dfr Rest Services Cwa 3 Yr Sepscs Download",
					"action": "Downloads NPDES Compliance Schedule, Permit Schedule and Single Event Violation Information by month and quarter.",
					"description": "For the provided system identifier, dowloads all displayed NPDES quaterly/monthly Compliance Schedule, Permit Schedule, and Single Event Violation  information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dfr_rest_services.cwa_3_yr_sepscs_download"
						}
					}
				},
				{
					"name": "GET Dfr Rest Services Get CSV",
					"value": "GET Dfr Rest Services Get CSV",
					"action": "Downloads a spectific section  of the DFR in CSV Format",
					"description": "For a supplied system id and DFR section name, the procedure will download that section in a Comma Separated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dfr_rest_services.get_csv"
						}
					}
				},
				{
					"name": "POST Dfr Rest Services Get CSV",
					"value": "POST Dfr Rest Services Get CSV",
					"action": "Downloads a spectific section  of the DFR in CSV Format",
					"description": "For a supplied system id and DFR section name, the procedure will download that section in a Comma Separated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dfr_rest_services.get_csv"
						}
					}
				},
				{
					"name": "GET Dfr Rest Services Rcra 3 Yr Download",
					"value": "GET Dfr Rest Services Rcra 3 Yr Download",
					"action": "Downloads the complete RCRA Compliance History Section of the DFR",
					"description": "For the provided system identifier, dowloads all displayed RCRA quaterly/monthly Facility Level Status and Violation information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dfr_rest_services.rcra_3_yr_download"
						}
					}
				},
				{
					"name": "POST Dfr Rest Services Rcra 3 Yr Download",
					"value": "POST Dfr Rest Services Rcra 3 Yr Download",
					"action": "Downloads the complete RCRA Compliance History Section of the DFR",
					"description": "For the provided system identifier, dowloads all displayed RCRA quaterly/monthly Facility Level Status and Violation information in a Comma Seperated Value (CSV) format.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dfr_rest_services.rcra_3_yr_download"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dfr_rest_services.air_3_yr_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"GET Dfr Rest Services Air 3 Yr Download"
					]
				}
			}
		},
		{
			"displayName": "POST /dfr_rest_services.air_3_yr_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"POST Dfr Rest Services Air 3 Yr Download"
					]
				}
			}
		},
		{
			"displayName": "GET /dfr_rest_services.cwa_3_yr_effluent_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"GET Dfr Rest Services Cwa 3 Yr Effluent Download"
					]
				}
			}
		},
		{
			"displayName": "POST /dfr_rest_services.cwa_3_yr_effluent_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"POST Dfr Rest Services Cwa 3 Yr Effluent Download"
					]
				}
			}
		},
		{
			"displayName": "GET /dfr_rest_services.cwa_3_yr_sepscs_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"GET Dfr Rest Services Cwa 3 Yr Sepscs Download"
					]
				}
			}
		},
		{
			"displayName": "POST /dfr_rest_services.cwa_3_yr_sepscs_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"POST Dfr Rest Services Cwa 3 Yr Sepscs Download"
					]
				}
			}
		},
		{
			"displayName": "GET /dfr_rest_services.get_csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"GET Dfr Rest Services Get CSV"
					]
				}
			}
		},
		{
			"displayName": "POST /dfr_rest_services.get_csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"POST Dfr Rest Services Get CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /dfr_rest_services.rcra_3_yr_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"GET Dfr Rest Services Rcra 3 Yr Download"
					]
				}
			}
		},
		{
			"displayName": "POST /dfr_rest_services.rcra_3_yr_download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Detailed Facility Report"
					],
					"operation": [
						"POST Dfr Rest Services Rcra 3 Yr Download"
					]
				}
			}
		},
];
