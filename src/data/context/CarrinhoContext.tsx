import { createContext, useState } from "react"
import Produto from "@/models/Produtos";
import ItemCarrinho from "@/models/ItemCarrinho";

interface CarrinhoContextProps {
    itens: ItemCarrinho[],
    handleAddToCart: (produto: Produto) => void,
    clearCart: () => void
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any)
export default CarrinhoContext

export function CarrinhoProvider(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function handleAddToCart(produto: Produto) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    };
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id);
    setItens([...outrosItens, novoItem]);
  }

  function clearCart() {
    setItens([]);
  }
    return(
        <CarrinhoContext.Provider value={
            {itens, handleAddToCart, clearCart}
        }>
            {props.children}
        </CarrinhoContext.Provider>
    )

}