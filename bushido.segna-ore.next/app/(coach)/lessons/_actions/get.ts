import { antonioLessons } from "@/app/_utils/db/antonio"

type GetLessonParams = {
	id: string
}

export default async function getLessonById({
	id,
}: GetLessonParams) {
	const lesson = antonioLessons
		.filter(lesson => lesson.id == id)
		[0]

	return lesson
}