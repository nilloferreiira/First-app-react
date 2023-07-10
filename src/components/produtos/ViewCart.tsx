import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function ViewCart() {

    return (
        <>
        <div className='border border-zinc-400 bg-gray-700 hover:bg-gray-600 transition-all rounded-md p-3 m-10'
              >
            <ShoppingCart />
       </div>
       </>
    )
}