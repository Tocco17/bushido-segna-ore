import { SchoolYear } from "./SchoolYear"
import { User } from "./User"

export type Payment = {
	day: Day
	month: Month
	year: MillenialYear
	schoolYear: SchoolYear
	user: User
}