import { Github } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  github: string;
}

export default function ProjectCard({ title, description, image, github }: Props) {
  return (
    <article className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all flex flex-col">
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="object-cover w-full h-48"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition"
        >
          <Github className="mr-2 w-5 h-5" /> Ver en GitHub
        </a>
      </div>
    </article>
  );
}
