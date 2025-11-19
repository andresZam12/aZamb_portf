import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; 

interface Props {
  prev?: string;
  next?: string;
}

export default function NavigationButtons({ prev, next }: Props) {
  return (
    <div className="flex justify-between w-full max-w-md mt-16">
      {prev ? (
        <Link
          href={prev}
          className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-black text-white hover:bg-white/10 transition"
        >
          <ArrowLeft className="mr-2" /> <span className="hidden md:inline">Anterior</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={next}
          className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-black text-white hover:bg-white/10 transition"
        >
          <span className="hidden md:inline">Siguiente</span> <ArrowRight className="ml-2" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
