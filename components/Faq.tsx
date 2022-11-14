import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Es necesario que mis hijos lleven algún tipo de material?",
    answer:
      "No. Nosotros nos encargamos de proporcionarles todo lo que necesiten.",
  },
  {
    question: "¿Tienes material tanto para niños como para más mayores?",
    answer: "Sí, disponemos de material deportivo para todas las edades.",
  },
  {
    question: "¿A partir de qué edad se puede empezar?",
    answer:
      "A partir de los 7-8 años, pero como somos muy flexibles y nos adaptamos a las necesidades de cada uno, contáctanos y lo vemos.",
  },
  {
    question:
      "¿Necesitan algún tipo de conocimiento previo para sacar provecho al curso?",
    answer:
      "No, todo lo que necesiten se lo iremos enseñando durante la formación. Nos adaptamos al nivel de cada uno, así que no es necesario partir de ninguna base.",
  },
  {
    question: "¿Tienes algún tipo de experiencia?",
    answer:
      "Sí, llevamos dedicándonos a esto toda mi vida. Tanto a nivel personal como profesional, trabajando en campamentos de verano y formaciones.",
  },
  {
    question: "¿Van a estar lo niños controlados en cada momento?",
    answer:
      "Sí, están en todo momento con nosotros. No se quedan solos, están siempre acompañados y controlados.",
  },
  {
    question: "¿Cuantos monitores habrá por alumno?",
    answer: "Hay un monitor por cada 5-6 alumnos.",
  },
  {
    question: "¿Son seguras las clases?",
    answer:
      "Sí, nosotros queremos que aprendan y que también se lo pasen bien, pero en ningún momento les dejamos que realicen prácticas peligrosas.",
  },
  {
    question: "¿Cuándo empieza la formación?",
    answer:
      "Las formaciones se realizan cada fin de semana, variando la actividad según el tiempo que haya. Para poder asistir a próximas formaciones, rellena el cuestionario que encontrarás más abajo y nos pondremos en contacto contigo cuando abramos plazas.",
  },
  {
    question: "¿Cuánto dura el curso?",
    answer: "Un fin de semana completo.",
  },
  {
    question: "¿Qué perfil de personas sacarán más partido de esta formación?",
    answer:
      "Aquellos niños que aún no tengan un hobbie definido y quieran probar algo nuevo o simplemente aquellos niños a los que les gustaría ahondar más en los deportes acuáticos, conocer personas con sus mismos intereses y salir de la monotonía.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  return (
    <section id="faq" className="bg-gray-50">
      <div className="mx-auto max-w-7xl divide-y-2 divide-gray-200 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>

                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Faq;
