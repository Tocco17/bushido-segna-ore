'use server'

import { z } from "zod"
import { redirect } from "next/navigation"
import { Lesson } from "@/app/_utils/entities/Lesson"
import { antonio } from "@/app/_utils/db/antonio"
import { schoolYear } from "@/app/_utils/db/schoolYears"
import { getCustomDateObject } from "@/app/_utils/operations/date-operations"
import { sleep } from "@/app/_utils/operations/test-operations"

const addSchema = z.object({
	hours: z.coerce.number().min(1),
	'date.day': z.coerce.number().int().min(1).max(31),
	'date.month': z.coerce.number().int().min(1).max(12),
	'date.year': z.coerce.number().int().min(2000).max(2100),
})

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

	const lesson = toLesson(result.data)

	return {
		success: true,
		data: lesson,
		error: undefined
	} as FormActionState
}

function toLesson(data: z.infer<typeof addSchema>): Lesson {
	const date = getCustomDateObject(
		data["date.day"],
		data["date.month"],
		data["date.year"],
	)

	const value: Lesson = {
		id: crypto.randomUUID(),
		hours: data.hours,
		isItPaid: false,
		coach: antonio,
		schoolYear: schoolYear,
		day: date.day,
		month: date.month,
		year: date.year,
	}

	return value
}