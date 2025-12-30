import { Lesson } from "@/app/_utils/entities/Lesson"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import Link from "next/link"

type EditProps = {
	lesson: Lesson
}

export const EditLesson = ({
	lesson
}: EditProps) => {
	return (<>
		<Button asChild>
			<Link 
				className="hover:text-yellow-500"
				href={`/lessons/${lesson.id}/edit`}
			>
				<Edit />
			</Link>
		</Button>
	</>)
}