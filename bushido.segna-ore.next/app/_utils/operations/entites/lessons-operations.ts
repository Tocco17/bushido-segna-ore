import { Lesson } from "../../entities/Lesson";

export const getLessonDateString = ({day, month, year}: Lesson) => `${day}/${month}/${year}`

export const getLessonDate = ({day, month, year}: Lesson) => new Date(parseInt(year), parseInt(month) - 1, parseInt(day))