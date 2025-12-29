type FormActionState = {
	success: boolean
	data?: unknown
	error?: FormError
}

type FormError<T> = {
	[K in keyof T]?: string;
}