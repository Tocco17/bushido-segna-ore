import { z } from "zod"
import { addSchema, editSchema } from "./schemas"
import { Lesson } from "@/app/_utils/entities/Lesson"
import { getCustomDateObject } from "@/app/_utils/operations/date-operations"
import { antonio } from "@/app/_utils/db/antonio"
import { schoolYear } from "@/app/_utils/db/schoolYears"

export function addSchemaToLesson(data: z.infer<typeof addSchema>): Lesson {
	const value = toLesson(data, crypto.randomUUID())
	return value
}

export function editSchematoLesson(data: z.infer<typeof editSchema>, id: string): Lesson {
	const value = toLesson(data, id)
	return value
}

function toLesson(data: z.infer<typeof editSchema | typeof addSchema>, id: string): Lesson {
	const date = getCustomDateObject(
		data["date.day"],
		data["date.month"],
		data["date.year"],
	)

	const value: Lesson = {
		id: id,
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