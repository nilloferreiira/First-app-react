import { Filho } from "./Filho"

export interface FamilyProps {
    name: string
    lastName: string
}

export function Pai(props: FamilyProps) {
    return (        
        <div className="flex flex-col gap-5">
            <div>
            <span>Pai: {props.name} {props.lastName} </span>
            </div>
            <div>
                <Filho name={"Danillo"} lastName={props.lastName} />
            </div>
        </div>
    )

}