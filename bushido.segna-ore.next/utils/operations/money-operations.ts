import { getStringAsNumber, toDigitArray } from "./math-operations"

const splitMoneyString = (money: Money) => money.split('.')
const extractEur: (money: Money) => Eur = (money) => splitMoneyString(money)[0] as Eur
const extractCents: (money: Money) => Cents = (money) => splitMoneyString(money)[1] as Cents

export const getMoneyObject: (money: Money) => MoneyObject = (money) => ({
	eur: extractEur(money),
	cents: extractCents(money),
})

const getMoneyFromObject: (money: MoneyObject) => Money = (money) => `${money.eur}.${money.cents}`

export const sumMoney = (first: Money, second: Money) => {
	const sumCents = (first: MoneyObject, second: MoneyObject) => {
		const firstCents = getStringAsNumber(first.cents)
		const secondCents = getStringAsNumber(second.cents)
		const summedCents = firstCents + secondCents

		const isMoreThan100 = summedCents >= 100
		const eur = isMoreThan100 ? 1 : 0
		const cents = summedCents - (isMoreThan100 ? 100 : 0)

		const centDigitArray = toDigitArray(cents)

		const sum: MoneyObject = {
			eur: `${eur}`,
			cents: `${centDigitArray[0]}${centDigitArray[1]}`
		}

		return sum
	}

	const sumEur = (first: MoneyObject, second: MoneyObject) => {
		const firstEur = getStringAsNumber(first.eur)
		const secondEur = getStringAsNumber(second.eur)
		const summedEur = firstEur + secondEur

		const sum: MoneyObject = {
			eur: `${summedEur}`,
			cents: '00'
		}

		return sum
	}

	const firstMoney = getMoneyObject(first)
	const secondMoney = getMoneyObject(second)

	const summedCents = sumCents(firstMoney, secondMoney)
	const summedEur = sumEur(firstMoney, secondMoney)
	const summedEurWithCents = sumEur(summedEur, summedCents)

	const sum: MoneyObject = {
		eur: summedEurWithCents.eur,
		cents: summedCents.cents
	}

	const value = getMoneyFromObject(sum)
	return value
}

export const subtractMoney = (minuend: Money, subtrahend: Money) => {

}

export const sumMoneyArray: (moneys: Money[]) => Money = (moneys) => moneys
	.reduce((previous, current) => sumMoney(previous, current), '0.00')
