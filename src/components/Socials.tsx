import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";



  export default function Socials(){
    const linkmail = "mailto:sahaavi60@gmail.com";
    const linkgithub = "https://github.com/Avishek27";
    const linktwitter = "https://twitter.com/AvishekSaha09";
    const linklinkedin = "https://www.linkedin.com/in/avishek-saha-487495205/";
    return <div>
        <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center cursor-pointer font-semibold font-montserrat hover:text-emerald-500">Socials
  <ChevronDown className="h-4 w-4 ml-1"/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-40 p-0 bg-zinc-900 border-0">
    
    <DropdownMenuSeparator/>
           <a href = {linkmail}>
          <DropdownMenuItem className="cursor-pointer font-medium font-montserrat bg-zinc-900 text-neutral-300">
              <span>
                <a className = "bg-black hover:bg-gray-800/90"><Mail/></a></span>
              <span className="p-2">
                Email</span>
          </DropdownMenuItem>
          </a>
          <a href={linktwitter}>
          <DropdownMenuItem  className="cursor-pointer font-medium font-montserrat bg-zinc-900 text-neutral-300">
              <span>
                <a className = "bg-black hover:bg-gray-800/90" ><TwitterIcon/></a></span>
              <span className="p-2">
                x</span>
           
          </DropdownMenuItem>
          </a>
          <a href={linkgithub}>
          <DropdownMenuItem className="cursor-pointer font-medium font-montserrat bg-zinc-900 text-neutral-300">
          <span>
                <a className = "bg-black hover:bg-gray-800/90" ><GithubIcon/></a></span>
              <span className="p-2">
                <a href = {linkgithub}>github</a></span>
          </DropdownMenuItem>
          </a>
          <a href = {linklinkedin}>
          <DropdownMenuItem className="cursor-pointer font-medium font-montserrat bg-zinc-900 text-neutral-300">
          <span>
                <a className = "bg-black hover:bg-gray-800/90" ><LinkedinIcon/></a></span>
              <span className="p-2">
                linkedIn</span>
           
          </DropdownMenuItem>
          </a>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
  }