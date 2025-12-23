import { toDigitArray } from "./math-operations"

export const getMoneyObject: (money: Money) => MoneyObject = (money) => {
	const sign = money[0] as NumberSign
	const valueString = money.slice(1)
	const eur = valueString.split('.')[0] as Eur
	const cents = valueString.split('.')[1] as Cents

	const value: MoneyObject = {
		sign: sign,
		eur: eur,
		cents: cents,
	}

	return value
}

export const getMoneyFromNumber: (value: number) => Money = (value) => {
	const sign: NumberSign = value >= 0 ? '+' : '-'
	const eur = (value - value%1)
	const cents = (value - eur)*100

	const digitCents = toDigitArray(cents)

	const result = `${sign}${eur}.${digitCents[0]}${digitCents[1]}` as Money
	return result
}

export const getNumberFromMoney: (value: Money) => number = (value) => {
	const sign = value[0] as NumberSign
	const numberValue = Number(value.slice(1))
	const result = numberValue * (sign == '+' ? 1 : -1)
	return result
}

export const getMoneyFromObject: (money: MoneyObject) => Money = (money) => `${money.sign}${money.eur}.${money.cents}`

export const sumMoney = (first: Money, second: Money) => {
	const firstNumber = getNumberFromMoney(first)
	const secondNumber = getNumberFromMoney(second)
	const sum = firstNumber + secondNumber
	const result = getMoneyFromNumber(sum)
	return result
}

export const productMoney = (first: Money, second: Money) => {
	const firstNumber = getNumberFromMoney(first)
	const secondNumber = getNumberFromMoney(second)
	const sum = firstNumber * secondNumber
	const result = getMoneyFromNumber(sum)
	return result
}

export const divideMoney = (first: Money, second: Money) => {
	const firstNumber = getNumberFromMoney(first)
	const secondNumber = getNumberFromMoney(second)
	const sum = firstNumber / secondNumber
	const result = getMoneyFromNumber(sum)
	return result
}

export const sumMoneyArray: (moneys: Money[]) => Money = (moneys) => moneys
	.reduce((previous, current) => sumMoney(previous, current), '+0.00')

export const productMoneyArray: (moneys: Money[]) => Money = (moneys) => moneys
	.reduce((previous, current) => productMoney(previous, current), '+0.00')

export const divideMoneyMoneyArray: (moneys: Money[]) => Money = (moneys) => moneys
	.reduce((previous, current) => divideMoney(previous, current), '+0.00')
