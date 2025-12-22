import { SchoolYear } from "./SchoolYear"
import { User } from "./User"

export type Lesson = {
	day: Day
	month: Month
	year: Year
	hours: number
	isItPaid: boolean
	schoolYear: SchoolYear
	coach: User
}