export const toDigit: (value: number) => Digit = (value) => {
	if (value < 0 || value > 9 || !Number.isInteger(value)) {
		throw new Error("Not a digit")
	}
	return value as Digit
}

export const getStringAsNumber = (value: `${number}`) => Number(value)

export const toDigitArray: (value: number, numberOfDigits?: number) => Digit[] = (value, numberOfDigits) => {
	const valueString = `${value}`
	if(valueString.includes('.'))
		throw new Error('Only integer numbers are accepted')
	
	const valueStringArray = valueString.split('')
	let digitArray = valueStringArray
		.map(current => toDigit(Number(current)))
	
	if(!numberOfDigits)
		return digitArray
		
	while(digitArray.length < numberOfDigits)
		digitArray = [0, ...digitArray]

	return digitArray
}