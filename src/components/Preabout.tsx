
import Avatar from './images/Avatar.png';
import MotionDiv from './motion-div';
// bg-[#36454F]
export default function Preabout(){
//     return <div className="bg-zinc-900 text-white ">
//         <div className="flex flex-col items-center ">
//             <div className="text-3xl font-bold font-montserrat p-5 pt-15 mt-10">
//             Hi, I'm Avishek Saha! 👋
//             </div>
//             <div className="p-3 mb-5">
//                 <img src = {Avatar}></img>
//             </div>
//             <div className = "text-2xl font-bold font-montserrat">
//                 Software Engineer
//             </div>
//             <div className='text-xl font-montserrat font-medium'>
//                 Full Stack Developer
//             </div>
//             <div className='text-xl font-montserrat font-medium mt-7'>
//                 Welcome to my Portfolio!
//                 </div>
//                 <div className='text-xl font-montserrat font-medium'>
//                 Typescript & C++ guy in the morning.Systems & networks kid at night.
//                 </div>
                
//             </div>
//     </div>
// }

return  (<section className="flex flex-col items-center justify-center bg-zinc-900 text-white py-8">
<h1 className="mb-4 text-center text-lg md:text-[2rem]">
  <MotionDiv delayOffset={0.2}>
    <span className="font-semibold font-montserrat"> Hi, I'm Avishek Saha! 👋</span>
  </MotionDiv>
</h1>

<div className="overflow-hidden rounded-full p-3 md:p-4">
  <MotionDiv>
    <img src={Avatar} alt="Dp" className="max-w-xs" />
  </MotionDiv>
</div>

<h1 className="text-center text-2xl font-semibold font-montserrat">
  <MotionDiv delayOffset={0.6}>Software Engineer</MotionDiv>
</h1>

<h1 className="text-center text-xl font-montserrat ">
  <MotionDiv delayOffset={0.8}>Full Stack Developer</MotionDiv>
</h1>

<div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%] font-montserrat">
  <MotionDiv delayOffset={1}>
    <p className="text-lg">Welcome to my personal portfolio!</p>
  </MotionDiv>

  <MotionDiv delayOffset={1.2}>
    <p className="text-lg font-montserrat">
    Just a ✨ TypeScript Full-Stack developer who loves to build something cool.
    </p>
  </MotionDiv>
</div>
</section>
);
}