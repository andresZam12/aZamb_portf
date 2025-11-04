import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Iconos simples y elegantes

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
          className="flex items-center text-gray-300 hover:text-blue-400 transition"
        >
          <ArrowLeft className="mr-2" /> Anterior
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={next}
          className="flex items-center text-gray-300 hover:text-blue-400 transition"
        >
          Siguiente <ArrowRight className="ml-2" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
