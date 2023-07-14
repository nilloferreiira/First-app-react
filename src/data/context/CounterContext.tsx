import { useState, createContext } from "react";

interface CounterContextProps {
    num: number,
    increment: () => void,
    decrement: () => void,
    reset: () => void,
}

const CounterContext = createContext<CounterContextProps>({} as any);
export default CounterContext

export function CounterProvider(props: any) {
   const [num, setNum] = useState<number>(0);

   function increment() {
     setNum(num + 1);
   }

   function decrement() {
     setNum(num - 1);
   }

   function reset() {
     setNum(0);
   }

  return (
    <CounterContext.Provider value={{
         num, increment, decrement, reset
        }} >
        {props.children}
    </CounterContext.Provider>
  );
}
