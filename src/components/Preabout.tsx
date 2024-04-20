
import Avatar from './images/Avatar.png';
// bg-[#36454F]
export default function Preabout(){
    return <div className="bg-zinc-900 text-white">
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold font-montserrat p-5 mt-3">
            Hi, I'm Avishek Saha! 👋
            </div>
            <div className="p-3 mb-5">
                <img src = {Avatar}></img>
            </div>
            <div className = "text-2xl font-bold font-montserrat">
                Software Engineer
            </div>
            <div className='text-xl font-montserrat font-medium'>
                Full Stack Developer
            </div>
            <div className='text-xl font-montserrat font-medium mt-7'>
                Welcome to my Portfolio!
                </div>
                <div className='text-xl font-montserrat font-medium'>
                Typescript & C++ guy in the morning.Systems & networks kid at night.
                </div>
                
            </div>
    </div>
}