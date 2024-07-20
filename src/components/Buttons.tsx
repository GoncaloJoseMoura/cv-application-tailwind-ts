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
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='feather feather-plus'
			>
				<line x1='12' y1='5' x2='12' y2='19' />
				<line x1='5' y1='12' x2='19' y2='12' />
			</svg>
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
			className='border-1 cursor-pointer rounded border-solid border-lightViolet bg-lightViolet px-5 py-1 text-xs text-white outline-none hover:shadow-md'
			type='submit'
		>
			{!isSubmitting ? "Save" : "Saving"}
		</button>
	)
}

export { Button, ButtonSave, ButtonDelete, ButtonCancel }
