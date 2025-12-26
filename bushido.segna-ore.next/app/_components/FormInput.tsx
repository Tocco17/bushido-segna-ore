import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

type FormInputProps = {
	label: string
}
	& React.ComponentProps<"input">

export function FormInput({
	id,
	label,
	type,
	name,
	required,
	defaultValue,
	...props
}: FormInputProps) {
	return (<>
		<Label htmlFor={id}>{label}</Label>
		<Input
			id={id}
			type={type}
			name={name}
			required={required}
			defaultValue={defaultValue}
		/>
	</>)
}