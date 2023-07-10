import { XCircle } from "lucide-react";

export function CarrinhoVazio() {
  return (
    <div className="flex gap-1 text-zinc-500 p-3">
      <XCircle /> Nenhum item no carrinho
    </div>
  );
}
