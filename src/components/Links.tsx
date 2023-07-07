import Link from "next/link";

export function Links() {
    return (
        <div className="flex items-center justify-center p-20 select-none">
            <details>
            <summary>Links para as páginas</summary>
            <ul className="flex flex-col list-disc ml-10">
               <li><Link href={'/'} className='underline'>Ir para home</Link></li>
               <li><Link href={'/home/cards'} className='underline'>Ir para os cards</Link></li>
               <li><Link href={'/home/contador'} className='underline'>Ir para o contador</Link></li>
               <li><Link href={'/home/events'} className='underline'>Ir para os eventos</Link></li>
               <li><Link href={'/home/faq'} className='underline'>Ir para o faq</Link></li>
               <li><Link href={'/home/soccerTable'} className='underline'>Ir para a tabela de times</Link></li>
               <li><Link href={'/home/produtos'} className='underline'>Ir para os produtos</Link></li>
            </ul>    
            </details>
            
        </div>
    )
}