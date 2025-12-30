'use server'

import { sleep } from "@/app/_utils/operations/test-operations"
import { addSchema } from "./schemas"
import { addSchemaToLesson } from "./action-utilities"

export async function addLesson(prevState: FormActionState, formData: FormData): Promise<FormActionState> {
	// await sleep(3000)
	
	const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
	
	if (result.success === false) {
		const getIssueMessage = (name: string) => result.error.issues
			.filter(issue => 
				issue.path.some(path => path.toString().includes(name))
			)
			.map(issue => issue.message)
			.join('/n')

		const response: FormActionState ={
			success: false,
			error: {
				hours: getIssueMessage('hours'),
				date: getIssueMessage('date') ? 'Date not inserted.' : undefined,
			}
		}
		return response
	}

	const lesson = addSchemaToLesson(result.data)

	return {
		success: true,
		data: lesson,
		error: undefined
	} as FormActionState
}

