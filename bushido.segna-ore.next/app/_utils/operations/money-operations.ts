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

	const digitCents: Digit[] = !!cents ? toDigitArray(cents) : [0, 0]

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

export const sumMoneyArray: (moneys: Money[]) => Money = (moneys) => moneys
	.reduce((previous, current) => sumMoney(previous, current), '+0.00')

export const productMoney = (money: Money, factor: number) => {
	const moneyValue = getNumberFromMoney(money)
	const value = moneyValue * factor
	const result = getMoneyFromNumber(value)
	return result
}

export const divideMoney = (money: Money, factor: number) => {
	const moneyValue = getNumberFromMoney(money)
	const value = moneyValue / factor
	const result = getMoneyFromNumber(value)
	return result
}