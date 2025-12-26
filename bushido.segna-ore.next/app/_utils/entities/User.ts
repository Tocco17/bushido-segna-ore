import { BaseEntity } from "./BaseEntity"

export type User = BaseEntity & {
	name: string 
	surname: string 
	email: Email
	role: Role
	paymentPerHour: Money
}