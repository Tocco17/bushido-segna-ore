import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { antonio, antonioLessons } from "@/utils/db/antonio";
import { productMoney } from "@/utils/operations/money-operations";
import { JSX } from "react";

async function getWorkedLessonHours(): Promise<number> {
	const workedLesson = antonioLessons
	const totalHours = workedLesson
		.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)

	return totalHours
}

async function getPaymentToReceive(): Promise<Money> {
	const { paymentPerHour } = antonio
	const notPayedLessons = antonioLessons.filter(lesson => !lesson.isItPaid)
	const notPayedHours = notPayedLessons.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)
	const result = productMoney(paymentPerHour, notPayedHours)
	return result
}

async function getPaymentReceived(): Promise<Money> {
	const { paymentPerHour } = antonio
	const payedLessons = antonioLessons.filter(lesson => lesson.isItPaid)
	const payedHours = payedLessons.reduce((previousHours, currentLesson) => previousHours + currentLesson.hours, 0)
	const result = productMoney(paymentPerHour, payedHours)
	return result
}



export default async function Home() {
	const [
		workedLessons,
		paymentToReceive,
		paymentReceived,
	] = await Promise.all([
		getWorkedLessonHours(),
		getPaymentToReceive(),
		getPaymentReceived(),
	])

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<DashboardCard
					title="Lessons"
					subtitle="Manage worked lessons"
				>
					<p>Total worked hours: {workedLessons}</p>
				</DashboardCard>

				<DashboardCard
					title="Payments"
					subtitle="Check payments received and to be received"
				>
					<>
						<p>Total payments to receive: {paymentToReceive} €</p>
						<p>Total payments received: {paymentReceived} €</p>
					</>
				</DashboardCard>
			</main>
		</div>
	);
}

type DashboardCardProps = {
	title: string,
	subtitle: string,
	children: JSX.Element,
}

function DashboardCard({
	title,
	subtitle,
	children,
}: DashboardCardProps) {
	return <>
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>
				{children}
			</CardContent>
		</Card>
	</>
}
