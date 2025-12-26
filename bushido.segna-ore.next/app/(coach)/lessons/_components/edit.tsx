import { Lesson } from "@/app/_utils/entities/Lesson"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"

type EditProps = {
	lesson: Lesson
}

export const EditLesson = ({
	lesson
}: EditProps) => {
	return (<>
		<Button className="hover:text-yellow-500"><Edit /></Button>
	</>)
}