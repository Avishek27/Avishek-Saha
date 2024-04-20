import reactIcon from './images/icons/react.png';
import nextjsIcon from './images/icons/next.png';
import typescriptIcon from './images/icons/typescript.png';
import javascriptIcon from './images/icons/javascript.png';
import html5Icon from './images/icons/html5.png';
import tailwindcssIcon from './images/icons/tailwindcss.png';
import shadcnuiIcon from './images/icons/shadcn-ui.png';
import viteIcon from './images/icons/vite.png';
import nodejsIcon from './images/icons/nodejs.png';
import expressjsIcon from './images/icons/express-js.png';
import vscodeIcon from './images/icons/vscode.png';
import prismaIcon from './images/icons/prisma.png';
import mysqlIcon from './images/icons/mysql.png';
import postmanIcon from './images/icons/postman.svg';
import dockerIcon from './images/icons/docker.png';
import awsIcon from './images/icons/aws.png';
import cppIcon from './images/icons/cpp.png';
import SkillCard from './SkillCard';

export default function skills() {
    const data = [
      {
        title: "Web Development",
        skills: [
          {
            name: "React.js",
            icon: reactIcon,
            invert: false,
          },
          {
            name: "Next.js",
            icon: nextjsIcon,
            invert: true,
          },
          {
            name: "TypeScript",
            icon: typescriptIcon,
            invert: false,
          },
          {
            name: "JavaScript",
            icon: javascriptIcon,
            invert: false,
          },
          {
            name: "HTML5",
            icon: html5Icon,
            invert: false,
          },
          {
            name: "Tailwind CSS",
            icon: tailwindcssIcon,
            invert: false,
          },
  
          {
            name: "shadcn/ui",
            icon: shadcnuiIcon,
            invert: false,
          },
          {
            name: "Vite",
            icon: viteIcon,
            invert: false,
          },
          {
            name: "Docker",
            icon: dockerIcon,
            invert: false,
          },
          {
            name: "AWS",
            icon: awsIcon,
            invert: false,
          }
        ],
      },
      {
        title: "Backend Development",
        skills: [
          {
            name: "Node.js",
            icon: nodejsIcon,
            invert: false,
          },
          {
            name: "Express.js",
            icon: expressjsIcon,
            invert: true,
          },
          {
            name: "Prisma ORM",
            icon: prismaIcon,
            invert: true,
          },
          {
            name: "MySQL",
            icon: mysqlIcon,
            invert: false,
          },
        ],
      },
      {
        title: "Languages",
        skills: [
          {
            name: "TypeScript",
            icon: typescriptIcon,
            invert: false,
          },
          {
            name: "JavaScript",
            icon: javascriptIcon,
            invert: false,
          },
          {
            name: "C++",
            icon: cppIcon,
            invert: false,
          },
        ],
      },
      {
        title: "Tools & Environment",
        skills: [
          {
            name: "VS Code",
            icon: vscodeIcon,
            invert: false,
          },
          {
            name: "Postman",
            icon: postmanIcon,
            invert: false,
          },
        ],
      },
    ];
 return <div
 id="skills"
 className="flex w-full flex-col items-center text-center scroll-mt-24 bg-zinc-900"
>
<h2 className="pt-7 mt-5 mb-4 text-3xl font-semibold text-white font-montserrat">My Skills</h2>
<div className="flex flex-wrap justify-center ">
        {data.map((item) => (
          
            <div className="mb-6 md:px-2">
              <h3 className="text-lg my-3 text-neutral-400 font-semibold font-montserrat">
                {item.title}
              </h3>

              <div className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center  text-white">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
             ))}
            </div>
</div>
}





  
