import { Images } from '@/components/Images'
import { Links } from '@/components/Links'
export default function Events() {
    return (
    <div className='h-screen'>
            <header className='flex items-center justify-center mt-20 w-full h-12 mx-auto text-2xl font-black text-gray-200 uppercase'>
                Images com estado
            </header>

        <div>
            <div className='flex justify-center items-center mt-20 gap-5'>
                <Images />
                <Images /> 
                <Images /> 
            </div>

        </div>

        <div>
            <Links />
        </div>

    </div>
    )
}