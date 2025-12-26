import { BaseEntity } from "./BaseEntity"

export type SchoolYear = BaseEntity & {
	startDay: Day
	startMonth: Month
	startYear: MillenialYear
	endDay: Day
	endMonth: Month
	endYear: MillenialYear
}