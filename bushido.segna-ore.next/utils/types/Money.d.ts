type Eur = `${number}`
type Cents = `${Digit}${Digit}`
type Money = `${Eur}.${Cents}`

type MoneyObject = {
	eur: Eur
	cents: Cents
}