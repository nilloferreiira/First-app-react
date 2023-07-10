import ItemCarrinho from "@/models/ItemCarrinho";
import Produto from "@/models/Produtos";
import { CarrinhoItem } from "./CarrinhoItem";
import { XCircle } from "lucide-react";
import { CarrinhoVazio } from "./CarrinhoVazio";
import Moeda from "@/utils/Moeda";

interface CartProps {
  itens: ItemCarrinho[];
  limpar: () => void;
}

export function Carrinho(props: CartProps) {
  const total = props.itens.reduce((soma, item) => {
    return soma + item.quantidade * item.produto.preco;
  }, 0);

  return (
    <div className="flex flex-col w-4/5 gap-5 border border-zinc-300 overflow-hidden rounded-md">
      <div className="bg-zinc-800 text-3xl p-5 rounded-md flex justify-between">
        <span>Carrinho</span>
        <span>Total: {Moeda.formatar(total)}</span>
      </div>
      <div className="flex gap-5 p-5">
        {props.itens.length === 0 && <CarrinhoVazio />}

        {props.itens.map((item, i) => {
          return <CarrinhoItem key={i} {...item} />;
        })}

        {props.itens.length !== 0 && (
          <button onClick={props.limpar}>Limpar</button>
        )}
      </div>
    </div>
  );
}
