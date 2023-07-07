interface Card{
    name: string
    circulo?: boolean
}

export function Card (props: Card) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`bg-purple-700 m-8 p-10 rounded-md flex align-middle items-center justify-center w-64 h-64
                            ${props.circulo ? 'rounded-full' : 'rounded-sm'}
                            `}>
                <span className="text-gray-100">oi {props.name}</span>
            </div>
        </div>
    )
}