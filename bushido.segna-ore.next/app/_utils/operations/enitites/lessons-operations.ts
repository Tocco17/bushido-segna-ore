import { Lesson } from "../../entities/Lesson";

export const getLessonDate = ({day, month, year}: Lesson) => `${day}/${month}/${year}`