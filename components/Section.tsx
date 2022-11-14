const Section = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Te entiendo mejor que nadie
      </h2>

      <p className="text-gray-500">
        A día de hoy, la razón por la que los jóvenes tienen tantos problemas a
        la hora de encontrar motivación en sus estudios o para realizar otras
        actividades que no sean jugar a los videojuegos es porque...
      </p>

      <ol className="my-6 list-inside list-decimal space-y-1 pl-5 text-gray-500">
        <li>Piensan que no van a sentirse entendidos en otros entornos</li>
        <li>
          La falta de vitamina D y naturaleza, hace que cada vez se sientan más
          apáticos y con menos ganas de salir de casa
        </li>
        <li>
          Se sienten solos si no están conectados a las tecnologías, ya que no
          conocen otras alternativas.
        </li>
      </ol>

      <p className="text-gray-500">Entonces, ¿cuál es la solución?</p>
    </div>
  );
};

export default Section;
