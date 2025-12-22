type Eur = `${number}`
type Cents = `${Digit}${Digit}`
type Money = `${NumberSign}${Eur}.${Cents}`

type MoneyObject = {
	sign: NumberSign
	eur: Eur
	cents: Cents
}