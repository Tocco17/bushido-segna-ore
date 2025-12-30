'use server'

import { getLessonDateString } from "@/app/_utils/operations/entites/lessons-operations"
import getLessonById from "../../_actions/get"
import { LessonForm } from "../../_components/form"

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
		<LessonForm
			lesson={lesson}
		/>
	</>)
}