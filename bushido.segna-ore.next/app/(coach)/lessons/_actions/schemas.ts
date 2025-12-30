import { z } from "zod"

export const addSchema = z.object({
	hours: z.coerce.number().min(1),
	'date.day': z.coerce.number().int().min(1).max(31),
	'date.month': z.coerce.number().int().min(1).max(12),
	'date.year': z.coerce.number().int().min(2000).max(2100),
})

export const editSchema = addSchema