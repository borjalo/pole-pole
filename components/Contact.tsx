import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { sendEvent } from "services/events";
import BasicDialog from "./dialogs/BasicDialog";

interface IContactForm {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  ages: string[];
  activities: string[];
}

const Contact = () => {
  const [contactForm, setContactForm] = useState<IContactForm>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    ages: [],
    activities: [],
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSuccess(false);
    e.preventDefault();

    await sendEvent({
      project: process.env.NEXT_PUBLIC_LOGSNAG_POLE_POLE_PROJECT!,
      channel: process.env.NEXT_PUBLIC_LOGSNAG_CONTACT_CHANNEL!,
      title: contactForm.name,
      message: contactForm.lastName,
      icon: "💬",
      notify: true,
      tags: {
        email: contactForm.email,
        phone: contactForm.phone,
        ages: contactForm.ages.toString(),
        activities: contactForm.activities.toString(),
      },
    });

    setSuccess(true);
  };

  const resetForm = () => {
    setContactForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      ages: [],
      activities: [],
    });
  };

  return (
    <>
      <BasicDialog
        open={success}
        setOpen={setSuccess}
        icon={
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        }
        title="¡Gracias por haber solicitado plaza en nuestras experiencias Pole Pole!"
        subtitle="Estate atento porque nos pondremos en contacto contigo muy pronto."
        buttonText="¡Vale!"
        onClick={() => {
          setSuccess(false);
          resetForm();
        }}
      />

      <div id="contacto" className="relative bg-white">
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Contacto
              </h2>

              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Déjanos tus datos para avisarte cuando abramos nuevas plazas
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>

                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={contactForm.name}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          name: e.target.value,
                        });
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>

                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={contactForm.lastName}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          lastName: e.target.value,
                        });
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <div className="mt-1">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        });
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de teléfono
                  </label>

                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="phone"
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        });
                      }}
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">
                    Edades de las personas interesadas
                  </legend>

                  <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-3">
                    <div className="flex items-center">
                      <input
                        id="8-12"
                        name="8-12"
                        defaultValue="8-12"
                        type="checkbox"
                        checked={contactForm.ages.includes("8-12")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            ages: contactForm.ages.includes(e.target.value)
                              ? contactForm.ages.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.ages, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="8-12" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          8-12 años
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="13-17"
                        name="13-17"
                        defaultValue="13-17"
                        type="checkbox"
                        checked={contactForm.ages.includes("13-17")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            ages: contactForm.ages.includes(e.target.value)
                              ? contactForm.ages.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.ages, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="13-17" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          13-17 años
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="18+"
                        name="18+"
                        defaultValue="18+"
                        type="checkbox"
                        checked={contactForm.ages.includes("18+")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            ages: contactForm.ages.includes(e.target.value)
                              ? contactForm.ages.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.ages, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="18+" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          18+ años
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">
                    Actividades en las que están interesados
                  </legend>

                  <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-2">
                    <div className="flex items-center">
                      <input
                        id="windsurf"
                        name="windsurf"
                        defaultValue="windsurf"
                        type="checkbox"
                        checked={contactForm.activities.includes("windsurf")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            activities: contactForm.activities.includes(
                              e.target.value
                            )
                              ? contactForm.activities.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.activities, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="windsurf" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Windsurf
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="surf"
                        name="surf"
                        defaultValue="surf"
                        type="checkbox"
                        checked={contactForm.activities.includes("surf")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            activities: contactForm.activities.includes(
                              e.target.value
                            )
                              ? contactForm.activities.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.activities, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="surf" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Surf
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="foil"
                        name="foil"
                        defaultValue="foil"
                        type="checkbox"
                        checked={contactForm.activities.includes("foil")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            activities: contactForm.activities.includes(
                              e.target.value
                            )
                              ? contactForm.activities.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.activities, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="foil" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Foil eléctrico
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="paddle"
                        name="paddle"
                        defaultValue="paddle"
                        type="checkbox"
                        checked={contactForm.activities.includes("paddle")}
                        onChange={(e) => {
                          setContactForm({
                            ...contactForm,
                            activities: contactForm.activities.includes(
                              e.target.value
                            )
                              ? contactForm.activities.filter(
                                  (activity) => activity !== e.target.value
                                )
                              : [...contactForm.activities, e.target.value],
                          });
                        }}
                        className="h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus:ring-indigo-500"
                      />

                      <label htmlFor="paddle" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Paddle surf
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Solicitar plaza
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative">
            <Image
              className="hidden object-cover shadow-xl sm:rounded-2xl lg:block lg:h-full"
              src="/images/sup-group.jpeg"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
