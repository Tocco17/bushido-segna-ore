import { SchoolYear } from "@/utils/entities/SchoolYear";

export const getSchoolYearCode = (schoolYear: SchoolYear) => `${schoolYear.startYear}/${schoolYear.endYear}`