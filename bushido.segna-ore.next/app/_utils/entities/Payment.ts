import { BaseEntity } from "./BaseEntity"
import { SchoolYear } from "./SchoolYear"
import { User } from "./User"

export type Payment = BaseEntity & {
	day: Day
	month: Month
	year: MillenialYear
	schoolYear: SchoolYear
	user: User
}