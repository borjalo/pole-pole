import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import WhatsAppIcon from "public/icons/WhatsAppIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6">
          {/* email contact */}
          <Link
            href="mailto:polepolecompany@gmail.com"
            className="flex items-center gap-x-2 text-gray-400 hover:text-gray-500"
          >
            <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
            <span>polepolecompany@gmail.com</span>
          </Link>

          <Link
            href="https://wa.link/4p61ia"
            className="flex items-center gap-x-2 text-gray-400 hover:text-gray-500"
          >
            <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
            <span>+34 603 42 54 06</span>
          </Link>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; {year} Pole Pole Company. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
