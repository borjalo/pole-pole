import Link from "next/link";
import logo from "public/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-4 sm:px-4">
      <div className="container mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src={logo.src}
            className="-ml-7 mr-3 h-10 w-40 object-cover"
            alt="Pole Pole Logo"
          />
        </Link>

        <div className="flex md:order-2">
          <a
            href="#contacto"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
          >
            ¡Quiero asistir!
          </a>
        </div>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <a
                href="#experiencias"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
              >
                Qué hacemos
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
              >
                Testimonios
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
