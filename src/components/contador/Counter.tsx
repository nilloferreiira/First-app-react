import { useState } from "react";
import { Buttons } from "./Buttons";
import { Display } from "./Display";
import { Reset } from "./Reset";

export default function Counter() {
    const [num, setNum] = useState<number>(0)

    function increment() {
        setNum(num + 1)
    }

    function decrement() {
        setNum(num - 1)
    }

    function reset() {
        setNum(0)
    }

    return (
        <div className="flex flex-col p-1 gap-3 justify-center border border-zinc-400 rounded-lg w-72 h-72">
            <Display value={num} />
            <Buttons inc={increment} dec={decrement}/>
            <Reset reset={reset}/>
        </div>
    )
}