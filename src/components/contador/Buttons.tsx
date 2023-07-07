interface ButtonProps {
    inc: () => void
    dec: () => void
}

export function Buttons(props: ButtonProps) {
    
    return (
        <div className="flex justify-between gap-2">
            <button onClick={props.dec} className="botao flex-1">dec</button>
            <button onClick={props.inc} className="botao flex-1">inc</button>
        </div>
    )
}