import HeroImage from "public/images/hero-image.jpg";

const HeroCard = () => {
  return (
    <div className="relative mt-16 lg:mt-36">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={HeroImage.src}
              alt="Skating in the park"
            />
            <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
          </div>

          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">
                Vive un fin de semana diferente
              </span>

              <span className="block text-indigo-200">
                lleno de aventura y emoción
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              Bienvenidos a una revolucionaria nueva forma de seguir educando a
              tus hijos mientras se lo pasan bien y disfrutan en un entorno de
              naturaleza y sin tecnología de por medio.
            </p>

            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="sm:mx-auto">
                <a
                  href="#why"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                >
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
