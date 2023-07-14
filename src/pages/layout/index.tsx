import { Grid } from "@/components/layout/Grid";

export default function LayoutPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
           
           <div className="w-[90%] lg:w-4/5">
            <Grid cols={1} lg={4} sm={2}>
                <div className="h-36 w-full bg-red-500">#1</div>
                <div className="h-36 w-full bg-cyan-500">#2</div>
                <div className="h-36 w-full bg-purple-500">#3</div>
                <div className="h-36 w-full bg-green-500">#4</div>
            </Grid>
           </div>
           
        </div>
    )
}