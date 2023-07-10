import { Card } from '../../components/Card'
import { Links } from '@/components/Links'

export default function home() {
    
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className='text-lg text-gray-500 blo flex items-center justify-center'>Seus cards</div>
            <div className='flex flex-col flex-wrap rounded-md justify-center items-center gap-5 h-screnn p-10'>
                <Card name="Danillo"/>
                <Card name="Ferreira" circulo/>
            </div>
        
            <div className='w-1/6'>
                <Links />
            </div>
        </div>
    )
}