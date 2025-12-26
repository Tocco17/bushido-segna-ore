'use client'

import { Lesson } from "@/app/_utils/entities/Lesson"
import { getLessonDate } from "@/app/_utils/operations/enitites/lessons-operations";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

type DeleteProps = {
	lesson: Lesson
}

export const DeleteLesson = ({
	lesson
}: DeleteProps) => {

	return (<>
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="hover:text-red-500"><Trash /></Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure?</AlertDialogTitle>
					<AlertDialogDescription>
						You are about to delete the lesson you have performed on date <strong>{getLessonDate(lesson)}</strong>.
						This action cannot be undone.
						You will need to add a new lesson if deleting this was a mistake.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => toast.success(
							"Delete complete",
							{
								description: `Lesson on date ${getLessonDate(lesson)} has been succesfully deleted.`
							})}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	</>)
}