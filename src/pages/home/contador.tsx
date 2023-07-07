import { Links } from "@/components/Links";
import Counter from "@/components/contador/Counter";

export default function Contador() {
    return(
        <>
            <header className='flex items-center justify-center mt-20 w-full h-12 mx-auto text-2xl font-black text-gray-200 uppercase'>
                Contador
            </header>


            <div className="flex items-center justify-center gap-5 mt-40">
                <Counter />
                <Counter />
                <Counter />
            </div>
            
            <div>
                <Links />
            </div>
        </>


    )
    
}