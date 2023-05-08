import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Hero() {
    return (
        <div className="relative">
            <main className="lg:relative">
                <div className="mx-auto w-full max-w-7xl pt-16 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                        {/* <h1 className="text-4xl font-bold tracking-tight text-fuchsia-500 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">CONVOCATORIA</span>{" "}
              <span className="block text-fuchsia-500 xl:inline">
                Hybrida 2023
              </span>
            </h1> */}
                        <div>
                            <Image
                                src="/images/convocatoria/convocatoria-hybrida.png"
                                alt="Convocatoria"
                                width={600}
                                height={90}
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/convocatoria/hybrida-2023-completo.png"
                                alt="Convocatoria"
                                width={360}
                                height={47}
                            />
                        </div>
                        <p className="mx-auto mt-3 mb-1 max-w-md text-lg font-light text-blue-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Traslada tus creaciones a un espacio en el
                            metaverso, especialmente diseñado para presentar
                            cualquier tipo de obra artística, de diseño,
                            tecnológica o mixta.
                        </p>
                    </div>
                </div>
                <div className=" relative h-64 w-auto px-12 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-auto">
                    <Image
                        className=" inset-0 h-full w-full object-cover"
                        src="/images/convocatoria/hybrida-esfera.png"
                        alt="Hybrida esfera"
                        width={500}
                        height={500}
                    />
                </div>
                {/* a paragraph with the width in the full screen */}
                <div className="mx-auto flex w-full max-w-7xl pt-16 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-3 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Hybrida es un espacio en el metaverso, especialmente
                            diseñado para presentar cualquier tipo de obra
                            artística, de diseño, tecnológica o mixta. En
                            Hybrida podrás mostrar tu trabajo a un público
                            global, interactuar con otros artistas y visitantes,
                            y recibir comentarios y críticas constructivas.
                        </p>
                    </div>
                    {/* an h3 justify to the left */}
                </div>
                <div className="flex-auto px-6 pt-10 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h3 className="text-2xl tracking-tight text-hybrida-rosalogo sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                        <span className="block xl:inline">
                            ¿Qué es Hybrida?
                        </span>
                    </h3>
                </div>
                <div className="mx-auto flex w-full max-w-7xl pt-1 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-0 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Un laboratorio de convergencias entre arte, diseño y
                            tecnología.
                        </p>
                        <p className="mt-0 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Es el primer espacio de la Universidad Autónoma de
                            Chihuahua en el metaverso. Un entorno diseñado para
                            dar cabida a expresiones artísticas aumentadas por
                            medio de tecnología inmersiva. Un espacio para el
                            aprendizaje colectivo y para generar conversaciones
                            a partir de las múltiples posibilidades de
                            hibridación entre el arte, el diseño y la
                            digitalidad.
                            <br />
                            <br />
                            Permanece al pendiente de este espacio para la
                            programacion de eventos y actividades futuras.
                        </p>
                    </div>
                </div>
                {/* <div className="flex-auto px-6 pt-10 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h3 className="text-2xl tracking-tight text-hybrida-rosalogo sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                        <span className="block xl:inline">Tema y forma:</span>
                    </h3>
                </div> */}
                {/* <div className="mx-auto flex w-full max-w-7xl pt-1 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-0 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Libre. Aunque se buscan expresiones creativas y
                            artísticas que puedan transformarse y enriquecerse
                            mediante el contacto con plataformas y tecnologías
                            digitales como Realidad Virtual, Realidad Aumentada,
                            programación de software, inteligencia artificial,
                            aprendizaje automático, blockchain, modelado y
                            animación 3D, entre otras.
                        </p>
                    </div>
                </div> */}

                {/* <div className="flex-auto px-6 pt-10 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h3 className="text-2xl tracking-tight text-hybrida-rosalogo sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                        <span className="block xl:inline">
                            Fechas importantes
                        </span>
                    </h3>
                </div>
                <div className="mx-auto flex w-full max-w-7xl pt-1 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-0 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Lanzamiento de la convocatoria: 01 de marzo. <br />
                            Recepción de solicitudes: 01 al 31 de marzo. <br />
                            Sesiones informativas: 8, 15 y 22 de marzo.
                            <br />
                            Revision por comité de seleccion: 18 al 27 de abril.
                            <br />
                            Notificacion a candidatos seleccionados: 28 de
                            abril.
                            <br />
                            Capacitación: 2 de mayo al 31 de agosto.
                            <br />
                            Premiacion e inauguración de la exposición: 13 de
                            septiembre.
                            <br />
                        </p>
                    </div>
                </div> */}
                <div className="flex-auto px-6 pt-10 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h3 className="text-2xl tracking-tight text-hybrida-rosalogo sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                        <span className="block xl:inline">Más información</span>
                    </h3>
                </div>
                {/* <div className="mx-auto flex w-full max-w-7xl pt-1 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-0 mb-1 max-w-md text-lg font-light  text-white sm:text-xl md:mt-5 md:max-w-4xl">
                            Consulta las{" "}
                            <a
                                className="text-sky-500"
                                href="http://www.hybrida.uach.mx/hybrida.pdf"
                            >
                                Bases de la Convocatoria
                            </a>
                        </p>
                    </div>
                </div> */}

                <div className="mx-auto flex w-full max-w-7xl pt-1 pb-1 text-center sm:pb-1 lg:pb-1 lg:text-left">
                    <div className="flex-auto px-6  sm:px-8 lg:w-1/2 xl:pr-16">
                        <p className="mt-0 mb-1 max-w-md text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-4xl"></p>
                    </div>
                    <div className="flex">
                        <div>
                            {/* <Image
                                src="/images/convocatoria/uach+.png"
                                alt="Uach+"
                                width={300}
                                height={92}
                            /> */}
                        </div>
                        {/* <div className="">
              <Image
                src="/images/convocatoria/uach.png"
                alt="Uach"
                width={300}
                height={293}
              />
            </div> */}
                    </div>
                </div>
            </main>
        </div>
    );
}
