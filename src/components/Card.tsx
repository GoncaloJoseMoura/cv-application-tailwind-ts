import { useStore } from "../Store/combinedStore"
import { Pencil } from "lucide-react"

type CardProps = {
    occupation: string
    location: string
    from: string
    to: string
    index: number
    action: (index: number, value: boolean) => void
}

function Card({ occupation, location, from, to, index, action }: CardProps) {
    return (
        <div className='flex items-center justify-between break-words rounded-lg border-2 border-solid border-lightGrayNo p-4 pr-6 text-xs'>
            <h3 className='text-base font-bold'>
                {occupation} at {location}
                <br />{" "}
                <span className='break-words font-extralight'>
                    {from} - {to}
                </span>
            </h3>
            <Pencil onClick={() => action(index, true)} className="hover:scale-110 cursor-pointer" />
        </div>
    )
}

function CardLanguages() {
    const language = useStore.use.language()
    const deleteLanguage = useStore.use.deleteLanguage()
    // const { language, deleteLanguage } = useBoundStore((state) => ({
    // 	language: state.language,
    // 	deleteLanguage: state.deleteLanguage
    // }))

    const onclick = (index: number) => {
        deleteLanguage(index)
    }

    return (
        <div className='flex flex-wrap'>
            {language.map((idiom: string, index: number) => (
                <button
                    className='mb-2 mr-2 cursor-pointer rounded-lg border-none bg-lightViolet px-5 py-1 text-center text-sm text-white hover:line-through'
                    key={idiom}
                    onClick={() => onclick(index)}
                    type='button'
                >
                    {idiom}
                </button>
            ))}
        </div>
    )
}

export { Card, CardLanguages }
