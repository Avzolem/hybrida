import MainLayout from "@/components/layouts/MainLayout";

export default function Candymachine() {
    return (
        <MainLayout>
            <div className="bg-hybrida-bgblue py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    <div className="relative sm:py-16 lg:py-0">
                        <div
                            aria-hidden="true"
                            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                        >
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={392}
                                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                                />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                            {/* Testimonial card*/}
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                                <div className="relative px-8">
                                    <div></div>
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow"></div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Politicas de privacidad
                            </h2>
                            <div className="mt-6 space-y-6 text-white">
                                <p className="text-lg">
                                    La Universidad Autonoma de Chihuahuas la
                                    responsable del tratamiento de los datos
                                    personales que proporcione toda persona, los
                                    cuales serán protegidos conforme a lo
                                    dispuesto por la Ley General de protección
                                    de Datos Personales en Posesión de Sujetos
                                    Obligados, Ley de Protección de Datos
                                    Personales en Posesión de Sujetos Obligados
                                    del Estado de Chihuahua, Ley de
                                    Transparencia y Acceso a la Información
                                    Pública del Estado de Chihuahua, y la demás
                                    normatividad que resulte aplicable.
                                </p>
                                <p className="text-base leading-7">
                                    Los datos personales que recabemos los
                                    utilizaremos para las siguientes
                                    finalidades: Para atender dudas, comentarios
                                    y sugerencias vinculados con la
                                    convocatoria, Integrar registro de
                                    participantes Identificar a los
                                    participantes En caso de que se requiera,
                                    estar en contacto con los participantes
                                    Cumplir con lo establecido en las bases del
                                    concurso Asimismo, sus datos personales
                                    podrán ser utilizados para informes
                                    estadísticos, en el cual sus datos
                                    personales serán disociados de la
                                    información estadística, por lo que no será
                                    posible identificar a los titulares.
                                </p>
                                <p className="text-base leading-7">
                                    Si deseas eliminar tu informacion para ,
                                    envía un correo electrónico a
                                    hybrida@uach.mx Al usar este sitio, aceptas
                                    que Hybrida puede usar cookies y otras
                                    tecnologías de seguimiento para mejorar la
                                    experiencia del usuario y para analizar el
                                    tráfico del sitio. También aceptas el uso de
                                    tu información personal para fines de
                                    marketing y publicidad en cualquier otro
                                    sitio web o aplicación de Uach, CIET o CGTI.
                                    Puedes optar por no recibir publicidad de
                                    nosotros o de terceros en cualquier momento,
                                    enviando un correo electrónico a
                                    hybrida@uach.mx o siguiendo las
                                    instrucciones en correos electrónicos
                                    publicitarios que recibas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
