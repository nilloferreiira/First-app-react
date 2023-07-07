interface ResetProps {
    reset: () => void
}

export function Reset(props: ResetProps) {
    return (
        <div className="flex">
            <button onClick={props.reset}
            className="botao bg-purple-600 flex-1 hover:bg-purple-500"
            >
            Reset
            </button>
        </div>
    )
}   