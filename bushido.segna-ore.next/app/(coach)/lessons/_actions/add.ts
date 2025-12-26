'use server'

import { z } from "zod"
import { redirect } from "next/navigation"
import { Lesson } from "@/app/_utils/entities/Lesson"
import { antonio } from "@/app/_utils/db/antonio"
import { schoolYear } from "@/app/_utils/db/schoolYears"
import { getCustomDateObject } from "@/app/_utils/operations/date-operations"

const addSchema = z.object({
	hours: z.coerce.number().min(1),
	'date.day': z.coerce.number().int().min(1).max(31),
	'date.month': z.coerce.number().int().min(1).max(12),
	'date.year': z.coerce.number().int(),
})

export async function addLesson(_: string | null, formData: FormData) {
	const result = addSchema.safeParse(Object.fromEntries(formData.entries()))

	if (result.success === false) {
		return result.error.message
	}

	const lesson = toLesson(result.data)
	console.log('lesson :>> ', lesson);

	redirect("/lessons")
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