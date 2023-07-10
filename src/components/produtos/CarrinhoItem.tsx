import ItemCarrinho from "@/models/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export function CarrinhoItem(props: ItemCarrinho) {
  return (
    <div className="flex rounded-full bg-sky-600 items-center gap-2">
      <span className="flex rounded-full w-7 h-7 bg-sky-700 p-2 items-center justify-center">
        {props.quantidade}
      </span>

      <span>{props.produto.nome}</span>

      <span className="pr-5">
        {Moeda.formatar(props.produto.preco * props.quantidade)}
      </span>
    </div>
  );
}
