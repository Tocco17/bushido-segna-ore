import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getDate } from "@/app/_utils/operations/date-operations";
import { getSchoolYearCode } from "@/app/_utils/operations/entites/school-year-operations";
import { Lesson } from "@/app/_utils/entities/Lesson";
import { LessonAction } from "./action";

type LessonTableProps = {
	lessons: Lesson[]
	totalHours: number
}

export function LessonTable({
	lessons,
	totalHours
}: LessonTableProps) {
	return (<>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Hours</TableHead>
					<TableHead>School year</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{lessons.map((lesson) => (
					<TableRow key={lesson.id}>
						<TableCell className="font-medium">{getDate({ day: lesson.day, month: lesson.month, year: lesson.year })}</TableCell>
						<TableCell>{lesson.hours}</TableCell>
						<TableCell>{getSchoolYearCode(lesson.schoolYear)}</TableCell>
						<TableCell><LessonAction lesson={lesson}/></TableCell>
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