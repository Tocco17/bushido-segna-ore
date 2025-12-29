'use client'

import { useActionState, useEffect, useState } from "react"
import { addLesson } from "../_actions/add"
import { FormInput } from "@/app/_components/FormInput"
import { Button } from "@/components/ui/button"
import { FormCalendar } from "@/app/_components/FormCalendar"
import { toast } from "sonner"
import { error } from "console"
import { Lesson } from "@/app/_utils/entities/Lesson"
import { Table } from "@/components/ui/table"
import { LessonTable } from "./table"

type LessonFormProps = {

}

export const LessonForm = ({

}: LessonFormProps) => {
	const [state, action, isPending] = useActionState(addLesson, {
		success: false,
		error: undefined,
	})

	const [lessonsAdded, setLessonsAdded] = useState<Lesson[]>()

	useEffect(() => {
		if (!state.success && !state.error)
			return

		if (!state.success)
			return

		toast.success("Lesson added.", {
			description: 'Lesson added succesfully'
		})

		setLessonsAdded(prev => [state.data as Lesson, ...(prev ?? [])])
	}, [state])

	return (<>
		<form
			action={action}
		>
			<FormInput
				id="hours"
				label="Hours"
				type="number"
				name="hours"
				required
				error={state.error?.hours}
			/>

			<FormCalendar
				id="date"
				label="Date"
				name="date"
				required
				error={state.error?.date}
			/>

			<Button type="submit">{isPending ? 'Loading...' : 'Submit'}</Button>
		</form>

		{
			!!lessonsAdded?.length && (
				<>
					<h3>Recently added</h3>
					<LessonTable
						lessons={lessonsAdded}
						totalHours={lessonsAdded.reduce((previousHour, currentLesson) => previousHour + currentLesson.hours, 0)}
					/>
				</>
			)
		}
	</>)
}