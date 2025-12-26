import { Check} from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Lesson } from "@/app/_utils/entities/Lesson";
import { DeleteLesson } from "./delete";
import { EditLesson } from "./edit";

type ActionProps = {
	lesson: Lesson
}

export const LessonAction = ({
	lesson
}: ActionProps) => {
	if (lesson.isItPaid)
		return <Check />

	return (<>
	<ButtonGroup>
		<EditLesson lesson={lesson} />
		<DeleteLesson lesson={lesson} />
	</ButtonGroup>
	</>)
}