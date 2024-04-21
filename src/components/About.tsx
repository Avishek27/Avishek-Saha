import profile from './images/profile (1).jpg';
import MotionDiv from './motion-div';


export default function About(){

return <section
id="about"
className="bg-zinc-900 text-white mx-auto flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24   md:max-w-full lg:flex-row lg:items-start lg:gap-16"
>
<div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4 font-montserrat">
            About Me
          </h2>
        </MotionDiv>
        <article className="flex flex-col text-lg text-neutral-300 font-medium px-10 font-montserrat">
          <MotionDiv delayOffset={0.4}>
            <div className="my-2">
            I'm Avishek Saha a Full Stack Developer from India. Passionate about Software Development,Cloud Engineering,Backend Systems & Open-Source Softwares.
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <div className="flex flex-col gap-2 font-montserrat">
              <p>
              I'm currently an undergraduate,
         pursuing Electronics and Communication Engineering from Kolkata, India.
              </p>
              <p>
                I am passionate about creating not just functional, but also
                aesthetically pleasing and intuitive user interfaces, ensuring a
                seamless user experience.
              </p>
            </div>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <img
            src={profile}
            alt="photo"
            width={300}
            height={300}
            className="mt-6 rounded-xl transition-all hover:rotate-3 hover:scale-105 pb-20"
          />
        </MotionDiv>
      </div>
    </section>


}