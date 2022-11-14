import {
  AcademicCapIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  UsersIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const differences = [
  {
    title: "Cercanía con los alumnos",
    description:
      "Nuestro equipo está formado por personas que se preocupan por los alumnos y que les ayudan a crecer.",
    icon: UsersIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Trato personalizado",
    description:
      "Queremos conoceros, ayudaros en todo lo que podamos y que forméis parte de la FAMILY.",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Adaptación según el nivel",
    description:
      "Nuestro equipo se adapta al nivel de cada alumno y a sus necesidades.",
    icon: ChartBarIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Confianza y compromiso",
    description:
      "Siempre nos han dicho que los compromisos son lo primero, y así lo trasladamos a todo nuestro equipo y a los alumnos.",
    icon: SparklesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Humildad",
    description:
      "Nadie es más que nadie. Queremos ver a los alumnos disfrutar, aprender y que salgan siendo mejores personas",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Pasión por lo que hacemos",
    description:
      "El mar es nuestra vía de escape, no queremos venderte nada, simplemente compartimos nuestra pasión y enseñamos a disfrutar de ella.",
    icon: HeartIcon,
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Differences = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        ¿Qué nos diferencia?
      </h2>

      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0">
        {differences.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === differences.length - 3 ? "sm:rounded-bl-lg" : "",
              actionIdx === differences.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white"
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </h3>

              <p className="mt-2 text-gray-500">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differences;
