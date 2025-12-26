import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getDate } from "@/app/_utils/operations/date-operations";
import { getSchoolYearCode } from "@/app/_utils/operations/enitites/school-year-operations";
import { Check, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Lesson } from "@/app/_utils/entities/Lesson";

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
						<TableCell>
							{
								lesson.isItPaid
									? <Check />
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