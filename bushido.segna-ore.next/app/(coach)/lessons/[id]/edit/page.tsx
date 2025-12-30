'use server'

import { getLessonDate } from "@/app/_utils/operations/entites/lessons-operations"
import getLessonById from "../../_actions/get"

type PageProps = {
	params: Promise<{
		id: string
	}>
}

export default async function EditLessonPage({ params }: PageProps) {
	const { id } = await params

	const lesson = await getLessonById({ id })

	return (<>
		<h3>Edit page</h3>
		<p>{getLessonDate(lesson)}</p>
		<p>{lesson.hours}</p>
	</>)
}