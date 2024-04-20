export default function SkillCard({
    icon,
    name,
    
  }: {
    icon: string;
    name: string;
    invert: boolean;
  }) {
    return (
      <div className="group rounded-xl border-none p-5 text-center shadow-none">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center">
            <img
              src={icon}
              alt={name}
             

            />
          </div>
          <p className="font-montserrat">{name}</p>
        </div>
      </div>
    );
}