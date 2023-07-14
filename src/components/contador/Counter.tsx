import { useContext, useState } from "react";
import { Buttons } from "./Buttons";
import { Display } from "./Display";
import { Reset } from "./Reset";
import CounterContext from "@/data/context/CounterContext";

export default function Counter() {
    const {num, increment, decrement, reset} = useContext(CounterContext)



    return (
        <div className="flex flex-col p-1 gap-3 justify-center border border-zinc-400 rounded-lg w-72 h-72">
            
            <Display value={num} />
            <Buttons inc={increment} dec={decrement}/>
            <Reset reset={reset}/>
        </div>
    )
}