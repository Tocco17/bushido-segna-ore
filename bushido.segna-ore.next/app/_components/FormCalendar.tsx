"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

type FormCalendarProps = {
	label: string
	id: string
	name: string
}

export function FormCalendar({
	label,
	id,
	name,
}: FormCalendarProps) {
	const [open, setOpen] = React.useState(false)
	const [date, setDate] = React.useState<Date | undefined>(undefined)

	const [day, setDay] = React.useState<number | undefined>(undefined)
	const [month, setMonth] = React.useState<number | undefined>(undefined)
	const [year, setYear] = React.useState<number | undefined>(undefined)

	React.useEffect(() => {
		setDay(date?.getDate())
		setMonth(!!date ? date.getMonth() + 1 : undefined)
		setYear(date?.getFullYear())
	}, [date])

	return (
		<div className="flex flex-col gap-3">
			<Label
				htmlFor={id}
				className="px-1"
			>
				{label}
			</Label>
			<Popover
				open={open}
				onOpenChange={setOpen}
			>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id={id}
						name={name}
						className="w-48 justify-between font-normal"
					>
						{
							date
								? date.toLocaleDateString("it-IT", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								})
								: "Select date"
						}
						<ChevronDownIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={(date) => {
							setDate(date)
							setOpen(false)
						}}
					/>
				</PopoverContent>
			</Popover>

			<DateInput value={day} name={`${name}.day`}/>
			<DateInput value={month} name={`${name}.month`}/>
			<DateInput value={year} name={`${name}.year`}/>
		</div>
	)
}

function DateInput({
	value,
	name,
}: {
	value: number | undefined
	name: string
}) {
	return <input
		onChange={() => {}}
		type="number"
		value={value}
		name={name}
		hidden
	/>
}
