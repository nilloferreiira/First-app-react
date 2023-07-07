import Produto from "@/models/Produtos";
import Image from "next/image";

interface ProdutosProps {
    produto: Produto
}

export function Produto(props: ProdutosProps) {
    return (
        <div className="border border-zinc-300">
            <div>
                <Image src={props.produto.imagem} alt={"Produto"} width={300} height={300}/>
            </div>
        </div>
    )
}