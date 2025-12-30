'use server'

import { redirect } from "next/navigation"
import { editSchematoLesson as editSchemaToLesson } from "./action-utilities"
import { editSchema } from "./schemas"
import { sleep } from "@/app/_utils/operations/test-operations"

export async function updateLesson(id: string, prevState: FormActionState, formData: FormData) {
	const result = editSchema.safeParse(Object.fromEntries(formData.entries()))

	if (result.success === false) {
		const getIssueMessage = (name: string) => result.error.issues
			.filter(issue =>
				issue.path.some(path => path.toString().includes(name))
			)
			.map(issue => issue.message)
			.join('/n')

		const response: FormActionState = {
			success: false,
			error: {
				hours: getIssueMessage('hours'),
				date: getIssueMessage('date') ? 'Date not inserted.' : undefined,
			}
		}
		return response
	}

	const lesson = editSchemaToLesson(result.data, id)

	console.log('lesson :>> ', lesson);

	sleep(3000)

	redirect('/lessons')
}