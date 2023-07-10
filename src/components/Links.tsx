import Link from "next/link";

export function Links() {
    return (
        <div className="flex items-center justify-center my-20 mx-auto p-4 select-none border border-zinc-300 rounded-lg cursor-pointer">
            <details>
            <summary>Links para as páginas</summary>
            <ul className="flex flex-col list-disc ml-10">
               <li><Link href={'/home/store/produtos'} className='underline'>Ir para a loja</Link></li>
               <li><Link href={'/home/events'} className='underline'>Ir para as imagens</Link></li>
               <li><Link href={'/home/contador'} className='underline'>Ir para o contador</Link></li>
               <li><Link href={'/home/faq'} className='underline'>Ir para o faq</Link></li>
            </ul>
                
            

            </details>
            
        </div>
    )
}