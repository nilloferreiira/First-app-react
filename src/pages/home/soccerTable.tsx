import { Links } from "@/components/Links";
import { Table } from "@/components/Table";

export default function soccerTable() {
  const times = [
    "Botafogo",
    "Grêmio",
    "Flamengo",
    "Palmeiras",
    "Red Bull Bragantino",
    "Fluminense",
    "São Paulo",
    "Internacional",
    "Athletico PR",
    "Atlético-MG",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="flex font-black text-5xl justify-center p-8">
          Tabela Brasileirão
        </h1>
      </div>

      <div className="flex justify-center">
        <Table times={times} />
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
}
