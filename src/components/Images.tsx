import Image from "next/image"
import { useState } from "react"

export function Images() {
    const url = 'https://source.unsplash.com/featured/'

    const [image, setImage] = useState<string>('abstract')
    const [size, setSize] = useState<number>(300)

    function renderButton(value: string) {
        return (
            <button className="flex bg-purple-500 text-gray-100 py-3 px-3 rounded-md gap-5 w-[84px] items-center justify-center"
            onClick={() => {
                setImage(value)
            }}
            >
                {value}
            </button>
        )
    }

    return (
        <div className="flex flex-col flex-wrap gap-5">
            <div className="flex justify-center gap-3">
                <span>{image}</span>
                <span>{size}x{size}</span>
            </div>
            <Image src={`${url}${size}x${size}?${image}`} height={300} width={300} alt="imagem" className="rounded-md"/>
         <div className="flex flex-row justify-between">
            {renderButton('abstract')}
            {renderButton('city')}
            {renderButton('person')}
         </div>

         <div className="flex items-center justify-center">
            <input type="number" value={size}
            className="bg-zinc-700 border-none p-2 rounded-md outline-none"
            onChange={e => {setSize(+e.target.value)}}
            />
         </div>

        </div>
    )
}