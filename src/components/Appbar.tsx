
import Socials from './Socials';


export default function Appbar(){
  
  const links = ["about", "projects", "skills", "contact"];


    return <>
    <nav className="fixed z-50 border-b justify-center py-3 shadow-sm bg-background/60 backdrop-blur-md flex w-full select-none font-light md:px-28">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div
          className=
            "text-5xl drop-shadow-2xl pt-1 hover:scale-105 transition-all font-dancing-script text-white">
            
            Avishek Saha
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer font-semibold font-montserrat hover:text-emerald-500 text-white"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}

            <span className='text-white'>
              <Socials />
            </span>
          </div>
        </div>
      </nav>
    </>


}