import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import WhyImage from "public/images/why.jpg";

const features = [
  {
    name: "Experiencias únicas",
    description: "Somos especialistas en experiencias únicas.",
  },
  {
    name: "Variedad de actividades",
    description:
      "Huimos de las actividades tradicionales (fútbol, tenis, baloncesto...).",
  },
  {
    name: "Ilusión y diversión",
    description:
      "Devolvemos a los niños la ilusión por salir de casa y realizar actividades sin necesidad de tecnología.",
  },
  {
    name: "Afianzar valores",
    description:
      "Les transmitimos valores esenciales como empatía, compañerismo, familia y amistad.",
  },
  {
    name: "Tiempo para los padres",
    description:
      "Proporcionamos a los padres tiempo para ellos mientras están tranquilos porque saben que sus hijos están en buenas manos.",
  },
  {
    name: "Libertad",
    description:
      "Damos una nueva vía de escape, sana y natural, para que los niños puedan desahogarse con el objetivo de desconectar, sentirse liberados y bien consigo mismos.",
  },
  {
    name: "Bienestar",
    description:
      "Hacemos que beneficien su salud, realizando deporte sin darse cuenta, algo que hace que después sean mucho más productivos y eficientes en sus estudios.",
  },
];

const Why = () => {
  return (
    <div id="why" className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-24 lg:px-8">
        <div className="mt-12 space-y-10 lg:mt-0">
          <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            ¿Por qué unirte a Pole Pole?
          </h2>

          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-y-10 sm:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <Image
            className="object-cover"
            src={WhyImage.src}
            alt="Skating in the park"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
