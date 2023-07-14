interface GridProps {
    cols ?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xl2?: number;
    children: any;
}

export function Grid(props: GridProps) {
    
    //grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 

    return (
        <div className={`
        grid grid-cols-${props.cols ?? 1}
        ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
        ${props.md? `md:grid-cols-${props.md}` : ''}
        ${props.lg? `lg:grid-cols-${props.lg}` : ''}
        ${props.xl? `xl:grid-cols-${props.xl}` : ''}
        ${props.xl2? `2xl:grid-cols-${props.xl2}` : ''}
        w-full
        gap-4
        `}>

            {props.children}
        </div>
    )
}