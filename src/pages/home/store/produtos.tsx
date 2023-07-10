import { Links } from "@/components/Links";
import { ProdutoItem } from "@/components/produtos/ProdutoItem";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/models/ItemCarrinho";
import { useState } from "react";
import Produto from "@/models/Produtos";
import { ShoppingCart } from "lucide-react";
import { Carrinho } from "@/components/produtos/Carrinho";

export default function ProductPag() {
  const produto = produtos.map((produtos) => {
    return (
      <ProdutoItem
        key={produtos.id}
        produto={produtos}
        comprar={handleAddToCart}
      />
    );
  });

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

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center h-screen w-full px-16">
      {open && (
        <div className="flex w-full justify-center pt-5">
          <Carrinho itens={itens} limpar={clearCart} />
        </div>
      )}

      <div className="flex justify-between items-center w-full">
        <h1 className="flex font-black text-5xl">Produtos</h1>

        <div className="m-10">
          {itens.length !== 0 ? (
            <button
              className="bg-sky-700 hover:bg-sky-600 transition-all rounded-md p-3 border border-zinc-400 "
              onClick={() => setOpen(!open)}
            >
              <ShoppingCart />
            </button>
          ) : (
            <button
              className="bg-gray-700 hover:bg-gray-600 transition-all rounded-md p-3 border border-zinc-400 "
              onClick={() => setOpen(!open)}
            >
              <ShoppingCart />
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-left gap-10 pl-4 flex-wrap w-full">
        {produto}
      </div>

      <div></div>

      <div className="">
        <Links />
      </div>
    </div>
  );
}
