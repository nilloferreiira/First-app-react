import { Pai } from "@/components/comunicacao/direta/Pai";

export default function Direta() {
    return  (
        <div className="flex flex-col items-center justify-center text-2xl text-gray-200 mt-10">
            <div>
                <h1>Pagina direta</h1>
            </div>
            <div className="flex flex-col bg-purple-700 items-center justify-center w-72 h-72 mx-auto my-10 rounded-md">
                <Pai name="Gionaldo" lastName="Araujo"/>
            </div>
        </div>
    )
}