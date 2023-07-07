interface AnswerProps {
  answer: string;
}
export function Answer(props: AnswerProps) {


  return (
    <div className="p-4 rounded-b-lg select-none flex justify-between text-lg">
            {props.answer}
        <div>
            
        </div>
    </div>
  )
}
