import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import Windsurf from "public/images/windsurf.jpeg";
import Surf from "public/images/surf.jpeg";
import Surf2 from "public/images/surf2.jpg";
import Sup from "public/images/sup.jpg";
import Sup1 from "public/images/sup2.jpg";
import Sup2 from "public/images/sup3.jpg";
import Sup3 from "public/images/sup4.jpg";
import SupGroup from "public/images/sup-group.jpeg";
import Efoil from "public/images/efoil.jpg";
import Image from "next/image";

const Slider = () => {
  const images = [
    Surf.src,
    Sup.src,
    Windsurf.src,
    Sup1.src,
    Efoil.src,
    Sup2.src,
    Surf2.src,
    Sup3.src,
    SupGroup.src,
  ];

  return (
    <div
      id="experiencias"
      className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Experiencas Pole Pole Company
      </h2>

      <p className="mb-10 text-center text-gray-500">
        ¡Haz que tus hijos vivan una experiencia única durante un fin de semana
        completo!
        <br />
        Cada fin de semana, una nueva experiencia.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="h-[25rem] md:h-[30rem] lg:h-[40rem]"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="rounded-2xl">
            <Image
              src={image}
              className="rounded-2xl object-cover"
              alt={image}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
