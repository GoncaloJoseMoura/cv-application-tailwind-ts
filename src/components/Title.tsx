function Title({ text }: { text: string }) {
	return (
		<h2 className='mb-5 mt-14 w-full border-b-2 border-solid border-lightGrayNo pb-1 text-[1.375rem] font-bold'>
			{text}
		</h2>
	)
}

export default Title
