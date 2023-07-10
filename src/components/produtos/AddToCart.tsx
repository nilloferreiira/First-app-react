import { ShoppingCart } from 'lucide-react';
import Produto from '@/models/Produtos';

interface ProductToAddProps {
    comprar: (produto: Produto) => void
    produto: Produto
}

export function AddToCart(props: ProductToAddProps) {
    
    return (
        <div className="flex items-center justify-center hover:text-gray-300 hover:font-black transition-all ">
                <button onClick={() => props.comprar(props.produto)} 
                className='flex items-center justify-center bg-sky-600 rounded-full w-full  p-2'
                >Comprar <ShoppingCart />
                </button>
        </div>
    )
}