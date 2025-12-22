export const toDigit: (value: number) => Digit = (value) => {
	if (value < 0 || value > 9 || !Number.isInteger(value)) {
		throw new Error("Not a digit")
	}
	return value as Digit
}

export const getStringAsNumber = (value: `${number}`) => Number(value)

export const toDigitArray: (value: number) => Digit[] = (value) => {
	const valueString = `${value}`
	if(valueString.includes('.'))
		throw new Error('Only integer numbers are accepted')
	
	const valueStringArray = valueString.split('')
	const digitArray = valueStringArray
		.map(current => toDigit(Number(current)))
	return digitArray
}