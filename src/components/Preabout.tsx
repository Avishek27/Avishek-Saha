
import Avatar from './images/Avatar.png';
import MotionDiv from './motion-div';
// bg-[#36454F]
export default function Preabout(){

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
