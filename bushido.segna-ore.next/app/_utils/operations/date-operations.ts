import { toDigitArray } from "./math-operations"

export const getDate = ({day, month, year}: CustomDateObject) => `${day}/${month}/${year}`

export const getDayFromNumber: (value: number) => Day = (value) => {
	if(value <= 0 || value > 31)
		throw new Error('The value must be positive and cannot be greater than 31.')

	if(value % 1 != 0)
		throw new Error("The value must be an integer.")

	const digits = toDigitArray(value, 2)

	const day = `${digits[0]}${digits[1]}` as Day
	return day
}

export const getMonthFromNumber: (value: number) => Month = (value) => {
	if(value <= 0 || value > 12)
		throw new Error('The value must be positive and cannot be greater than 12.')

	if(value % 1 != 0)
		throw new Error("The value must be an integer.")

	const digits = toDigitArray(value, 2)

	const month = `${digits[0]}${digits[1]}` as Month
	return month
}

export const getYearFromNumber: (value: number) => Year = (value) => {
	if(value <= 0 && value > 10000)
		throw new Error('The value must be positive and cannot be greater than 9999.')

	if(value % 1 != 0)
		throw new Error("The value must be an integer.")

	let digits = toDigitArray(value, 4)

	const year = `${digits[0]}${digits[1]}${digits[2]}${digits[3]}` as Year
	return year
}

export const getCustomDateObject = (day: number, month: number, year: number) => ({
	day: getDayFromNumber(day),
	month: getMonthFromNumber(month),
	year: getYearFromNumber(year),
} as CustomDateObject)