import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { antonioLessons } from "@/utils/db/antonio";
import { Lesson } from "@/utils/entities/Lesson";
import { getDate } from "@/utils/operations/date-operations";
import { getSchoolYearCode } from "@/utils/operations/enitites/school-year-operations";
import { Check } from "lucide-react";

async function getLessons(): Promise<Lesson[]> {
	const lessons = antonioLessons
	return lessons
}

export default async function Lessons() {
	const [lessons] = await Promise.all([getLessons()])
	const totalHours = lessons.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)

	return (<>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Date</TableHead>
					<TableHead>Hours</TableHead>
					<TableHead>Is it paid?</TableHead>
					<TableHead>School year</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{lessons.map((lesson) => (
					<TableRow key={lesson.id}>
						<TableCell className="font-medium">{getDate({day: lesson.day, month: lesson.month, year: lesson.year})}</TableCell>
						<TableCell>{lesson.hours}</TableCell>
						<TableCell>{lesson.isItPaid ? <Check /> : ''}</TableCell>
						<TableCell>{getSchoolYearCode(lesson.schoolYear)}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell>Total</TableCell>
					<TableCell>{totalHours}h</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	</>)
}