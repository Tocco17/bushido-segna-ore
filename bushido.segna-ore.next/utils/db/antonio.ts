import { Lesson } from "../entities/Lesson";
import { Payment } from "../entities/Payment";
import { User } from "../entities/User";
import { schoolYear } from "./schoolYears";

export const antonio: User = {
	name: 'Antonio',
	surname: 'Antonioni',
	email: 'antonio.antonioni@gmail.com',
	role: "Coach",
	paymentPerHour: "+12.00"
}

export const antonioLessons: Lesson[] = [
	{
		coach: antonio,
		day: "16",
		month: "09",
		year: "2025",
		schoolYear: schoolYear,
		hours: 2,
		isItPaid: true,
	},
	{
		coach: antonio,
		day: "17",
		month: "09",
		year: "2025",
		schoolYear: schoolYear,
		hours: 3,
		isItPaid: false,
	},
	{
		coach: antonio,
		day: "19",
		month: "09",
		year: "2025",
		schoolYear: schoolYear,
		hours: 3,
		isItPaid: false,
	},
]

export const antonioPayments: Payment[] = [
	{
		day: "30",
		month: "09",
		year: "2025",
		schoolYear: schoolYear,
		user: antonio,
	}
]