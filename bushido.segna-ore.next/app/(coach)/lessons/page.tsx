import { Button } from "@/components/ui/button";

import { antonioLessons } from "@/app/_utils/db/antonio";
import { Lesson } from "@/app/_utils/entities/Lesson";
import { Plus } from "lucide-react";
import { LessonTable } from "./_components/table";

async function getLessons(): Promise<Lesson[]> {
	const lessons = antonioLessons
	return lessons
}

export default async function Lessons() {
	const [lessons] = await Promise.all([getLessons()])
	const totalHours = lessons.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)

	return (<>
		<Button><Plus /></Button>
		<LessonTable
			lessons={lessons}
			totalHours={totalHours}
		/>
	</>)
}