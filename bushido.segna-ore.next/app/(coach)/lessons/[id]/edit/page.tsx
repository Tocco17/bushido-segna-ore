'use server'

import getLessonById from "../../_actions/get"
import { LessonForm } from "../../_components/form"
import { notFound } from "next/navigation"

type PageProps = {
	params: Promise<{
		id: string
	}>
}

export default async function EditLessonPage({ params }: PageProps) {
	const { id } = await params

	const lesson = await getLessonById({ id })

	if(!lesson)
		notFound()

	return (<>
		<h3>Edit page</h3>
		<LessonForm
			lesson={lesson}
		/>
	</>)
}