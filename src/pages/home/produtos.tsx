import { Links } from "@/components/Links";
import { Produto } from "@/components/produtos/Produto";
import produtos from "@/constants/produtos";

export default function ProductPag() {
  const produto = produtos[0]

  return (
    <div>
      <div>
        <h1 className="flex font-black text-5xl justify-center p-8">
          Produtos
        </h1>
      </div>

      <div className="flex justify-center">
        <Produto produto={produto} />
        <div>
        
        </div>
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
}