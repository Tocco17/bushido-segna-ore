import { SchoolYear } from "@/app/_utils/entities/SchoolYear";

export const getSchoolYearCode = (schoolYear: SchoolYear) => `${schoolYear.startYear}/${schoolYear.endYear}`