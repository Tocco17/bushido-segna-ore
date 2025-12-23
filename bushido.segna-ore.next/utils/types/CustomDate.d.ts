type Day =
  | `0${NonZeroDigit}`          // 01–09
  | `1${Digit}`          // 10–19
  | `2${Digit}`          // 20–29
  | `3${'0' | '1'}`;     // 30–31

type Month =
  | `0${'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'}` // 01–09
  | `1${'0' | '1' | '2'}`;                                 // 10–12

type Year = `${Digit}${Digit}${Digit}${Digit}`;

type MillenialYear = `20${Digit}${Digit}`

type CustomDate = `${Day}/${Month}/${Year}`;

type CustomDateObject = {
	day: Day,
	month: Month,
	year: Year,
}
