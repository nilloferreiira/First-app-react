import Produto from "@/models/Produtos";
import Image from "next/image";
import { AddToCart } from "./AddToCart";
import Moeda from "@/utils/Moeda";

interface ProdutosProps {
  produto: Produto;
  comprar: (produto: Produto) => void;
}

export function ProdutoItem(props: ProdutosProps) {
  return (
    <div className="border border-zinc-300 p-1 rounded-lg flex flex-col">
      <Image
        src={props.produto.imagem}
        alt={"Produto"}
        width={300}
        height={300}
        className="rounded-md"
      />

      <div className="flex flex-col p-2 justify-between">
        <div className="flex justify-between items-center gap-10 p-2">
          <span className="text-2xl text-zinc-100">{props.produto.nome}</span>
          <span className="text-xl text-emerald-500">
            {Moeda.formatar(props.produto.preco)}
          </span>
        </div>
        <div>
          <AddToCart produto={props.produto} comprar={props.comprar} />
        </div>
      </div>
    </div>
  );
}
