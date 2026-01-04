import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (<>
		<div>404 - Page Not Found</div>
		<Button asChild>
			<Link href="/">Home</Link>
		</Button>
	</>)
}