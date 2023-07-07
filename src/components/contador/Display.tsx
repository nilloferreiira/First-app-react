interface DisplayProps {
    value: number
}

export function Display(props: DisplayProps) {
    return (
        <div className="flex flex-1 items-center justify-center p-5 rounded bg-zinc-800 text-5xl font-black">
            {props.value}
        </div>
    )
}