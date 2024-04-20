import profile from './images/profile (1).jpg';
import MotionDiv from './motion-div';


export default function About(){
    return <div id = "About" className="flex justify-around bg-zinc-900 text-white">
        <div className="flex flex-col mt-20 p-20">
        <div className="mb-2 w-full text-center text-3xl font-bold md:mb-4 ">
        <MotionDiv delayOffset={0.2}>
            About Me
            </MotionDiv>
        </div>
        <div className="text-xl font-montserrat font-medium p-5">
            <div className="my-1">
            <MotionDiv delayOffset={0.4}>
            I'm Avishek Saha a Full Stack Developer from India.
            Passionate about Software Development,Cloud Engineering,
             Backend Systems & 
            Open-Source Softwares.
            </MotionDiv>
            </div>
            <div className="my-2">
            <MotionDiv delayOffset={0.5}>
            I'm currently an undergraduate,
            pursuing Electronics and Communication Engineering from Kolkata, India.
            </MotionDiv>
            </div>
            <div className="my-2">
            <MotionDiv delayOffset={0.5}>
            I am passionate about creating not just functional,
            but also aesthetically pleasing and intuitive user interfaces, 
           
            ensuring a seamless user experience.
            </MotionDiv>
            </div>
              
        </div>
        </div>
        <div className="mt-20 p-20 order-2 z-auto overscroll-auto">
            
           <img src = {profile}></img>
           
        </div>
        
    </div>
}