interface TableProps {
  times: Array<string>;
}

export function Table(props: TableProps) {
  
  // => transformar o Array em um elemento de lista, mas usando um laço for

  // const itens: any[] = []
  // for(let i = 0; i < props.times.length; i++) {
  //     itens.push(<li key={i}>{props.times[i]}</li>)
  // }

  const itens = props.times.map((time) => {
    return <li key={time}>{time}</li>;
  });

  return (
    <div className="text-xl border border-emerald-400 p-4 rounded-lg">
      <ol className="list-decimal p-8 w-full">{itens}</ol>
    </div>
  );
}
