import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { antonioLessons } from "@/utils/db/antonio";
import { Lesson } from "@/utils/entities/Lesson";
import { getDate } from "@/utils/operations/date-operations";
import { getSchoolYearCode } from "@/utils/operations/enitites/school-year-operations";
import { Check, Edit, Trash, Plus } from "lucide-react";

async function getLessons(): Promise<Lesson[]> {
	const lessons = antonioLessons
	return lessons
}

export default async function Lessons() {
	const [lessons] = await Promise.all([getLessons()])
	const totalHours = lessons.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)

	return (<>
		<Button><Plus/></Button>
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
						<TableCell>
							{
								lesson.isItPaid 
								? <Check/>
								: <ButtonGroup>
									<Button className="hover:text-yellow-500"><Edit /></Button>
									<Button className="hover:text-red-500"><Trash /></Button>
								</ButtonGroup>
							}
						</TableCell>
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