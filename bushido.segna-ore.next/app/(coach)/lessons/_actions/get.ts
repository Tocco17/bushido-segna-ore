import { antonioLessons } from "@/app/_utils/db/antonio"
import { Lesson } from "@/app/_utils/entities/Lesson"

type GetLessonParams = {
	id: string
}

export default async function getLessonById({
	id,
}: GetLessonParams): Promise<Lesson | undefined> {
	const lesson = antonioLessons
		.filter(lesson => lesson.id == id)
		[0]

	return lesson
}