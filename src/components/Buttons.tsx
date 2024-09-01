import { Plus } from "lucide-react"

type ButtonProps = {
	action: () => void
	text?: string
}

function Button({ action, text }: ButtonProps) {
	return (
		<div
			onClick={action}
			className='mt-3 flex w-full cursor-pointer items-center justify-center rounded-md py-1 text-sm font-medium text-lightViolet transition-all duration-300 ease-out hover:bg-lightViolet hover:text-white'
		>
			<Plus />
			<p className='text-base'>{text}</p>
		</div>
	)
}

function ButtonDelete({ action }: ButtonProps) {
	return (
		<button
			onClick={action}
			className='border-1 ml-0 mr-auto cursor-pointer rounded border-solid border-slate-400 bg-slate-400 px-5 py-1 text-xs text-white outline-none hover:shadow-md'
			type='button'
		>
			Delete
		</button>
	)
}

function ButtonCancel({ action }: ButtonProps) {
	return (
		<button
			onClick={action}
			className='box-border cursor-pointer rounded border-2 border-solid border-lightViolet bg-white px-5 py-1 text-xs text-lightViolet outline-none hover:shadow-md'
			type='button'
		>
			Cancel
		</button>
	)
}

function ButtonSave({ isSubmitting }: { isSubmitting: boolean }) {
	return (
		<button
			className='border-1 cursor-pointer rounded border-solid border-lightViolet bg-blue-300 px-5 py-1 text-xs text-white outline-none hover:shadow-md'
			type='submit'
		>
			{!isSubmitting ? "Save" : "Saving"}
		</button>
	)
}

export { Button, ButtonSave, ButtonDelete, ButtonCancel }
