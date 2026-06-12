import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { detailedFacilityReportDescription } from './resources/detailed-facility-report';

export class EpaGovDfr implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Epa Gov Dfr',
                name: 'N8nDevEpaGovDfr',
                icon: { light: 'file:./epa-gov-dfr.png', dark: 'file:./epa-gov-dfr.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ECHO: EPA\'s public tool for integrated compliance and enforcement data.',
                defaults: { name: 'Epa Gov Dfr' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevEpaGovDfrApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Detailed Facility Report",
					"value": "Detailed Facility Report",
					"description": ""
				}
			],
			"default": ""
		},
		...detailedFacilityReportDescription
                ],
        };
}
