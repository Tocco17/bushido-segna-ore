'use client'

import { useActionState } from "react"
import { addLesson } from "../_actions/add"
import { FormInput } from "@/app/_components/FormInput"
import { Button } from "@/components/ui/button"
import { FormCalendar } from "@/app/_components/FormCalendar"

type LessonFormProps = {

}

export const LessonForm = ({

}: LessonFormProps) => {
	const [state, action] = useActionState(addLesson, null)
	
	return (<>
	<form
		action={action}
	>
		<FormInput 
			id="hours"
			label="Hours"
			type="number"
			name="hours"
		/>

		<FormCalendar
			id="date"
			label="Date"
			name="date"
		/>

		<Button type="submit">Submit</Button>
	</form>
	</>)
}