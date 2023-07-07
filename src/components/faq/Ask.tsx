import { useState } from "react";
import { Answer } from "./Answer";
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

interface AskProps {
  ask: string;
  answer: string;
}

export function Ask(props: AskProps) {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <div className="flex flex-col items-center justify-center mt-20 border border-zinc-300 rounded-lg overflow-hidden">
      <div
        className={`
                    flex justify-between
                    p-4 w-full 
                  bg-purple-500 rounded-lg 
                    text-lg
                    select-none 
                    ease-out duration-300
                
                    
                    `}
        
        
        onClick={() => setOpen(!open) }
      >
        {props.ask}

        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

        
      {open && <Answer answer={props.answer}/>}

    </div>
  );
}
