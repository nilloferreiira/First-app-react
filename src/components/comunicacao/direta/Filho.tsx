import { FamilyProps } from "./Pai";


export function Filho(props: FamilyProps) {
    return (
        <div>
            <span>Filho: {props.name} {props.lastName}</span>
        </div>
    )

}