import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                id="main-layout"
                title="Cronograma"
                description="Cronograma de actividades"
            >
                {/* <!-- Timeline component --> */}

                {/* Mobile First  */}
                <div className="relative block md:hidden">
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center   font-bold  leading-none tracking-tight  text-white">
                                <div>1</div>
                                <div>Marzo</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Apertura de convocatoria
                                </h3>
                            </div>
                            <p
                                id="descriptic"
                                className="text-center text-white "
                            >
                                Revisa la
                                <a
                                    href="/"
                                    className=" text-blue-300 hover:text-blue-100"
                                >
                                    {" "}
                                    &nbsp;Convocatoria.
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>8, 15 y 22</div>
                                <div>Marzo</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Sesiones informativas{" "}
                                </h3>
                            </div>
                            <p
                                id="descriptic"
                                className="text-center text-white "
                            >
                                El horario y plataforma se notificarán por las
                                redes sociales de la UACH.{" "}
                            </p>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>31</div>
                                <div>Marzo</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Cierre de convocatoria
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>18 al 27</div>
                                <div>Abril</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}

                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Evaluación de propuestas
                                </h3>
                            </div>
                            <p
                                id="descriptic"
                                className="text-center text-white  "
                            >
                                Conoce al
                                <a
                                    href="/jurado"
                                    className=" text-blue-300 hover:text-blue-100"
                                >
                                    {" "}
                                    &nbsp;Jurado evaluador.
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>28</div>
                                <div>Abril</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Anuncio de personas seleccionadas
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>2</div>
                                <div>Mayo</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Inicio etapa de formación{" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>3 al 31</div>
                                <div>Julio</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Receso vacacional{" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>1 al 30</div>
                                <div>Agosto</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Reinicio y cierre de etapa de formación{" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--Circle--> */}
                    <div className="flex w-full justify-center py-16">
                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                <div>17</div>
                                <div>Septiembre</div>
                            </div>
                        </div>
                    </div>
                    {/* Card component */}
                    <div className="w-full px-2 py-3 ">
                        <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                            <div className="0 mb-2 text-white">
                                <h2
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    17 de septiembre{" "}
                                </h2>
                                <h3
                                    id="titulo"
                                    className="opacity-1 text-center text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                >
                                    Premiación y lanzamiento
                                </h3>
                            </div>
                            <p
                                id="descriptic"
                                className="text-center text-white "
                            >
                                Evento de gala a realizarse en Poliforum
                                Cultural Universitario el día XX de XXXX a las
                                XXXX, cn duración de 3 horas. Incluye montaje
                                previo al evento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------------------------------------------------------- */}

                {/* Desktop second */}
                <div className="hidden md:block">
                    <div className="relative min-h-screen">
                        <div className="flex min-h-screen justify-center">
                            <div className="mx-auto w-2/3">
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10 ">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                            <div className="0 mb-2 flex justify-between text-white">
                                                <div
                                                    id="titulo"
                                                    className="opacity-1 text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl"
                                                >
                                                    Apertura de convocatoria.
                                                </div>
                                            </div>
                                            <div
                                                id="descriptic"
                                                className="text-white  "
                                            >
                                                Revisa la
                                                <a
                                                    href="/"
                                                    className=" text-blue-300 hover:text-blue-100"
                                                >
                                                    {" "}
                                                    &nbsp;Convocatoria.
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center text-xl font-bold leading-none text-white ">
                                                <div>1</div>
                                                <div>Marzo</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 "></div>
                                </div>

                                {/* Aqui termina un elemento ------------------ */}

                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10"></div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>8, 15 y 22</div>
                                                <div>Marzo</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 ">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50  px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Sesiones informativas.
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                El horario y plataforma se
                                                notificarán por las redes
                                                sociales de la UACH.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Aqui termina un elemento del timeline--------------------*/}

                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Cierre de convocatoria.
                                                </div>
                                            </div>
                                            <div className="text-white"></div>
                                        </div>
                                    </div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>31</div>
                                                <div>Marzo</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 "></div>
                                </div>

                                {/* Aqui termina el elemento del timeline -----------------------------*/}

                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10"></div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>18 al 27</div>
                                                <div>Abril</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 ">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Evaluación de propuestas.
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                Conoce al
                                                <a
                                                    href="/jurado"
                                                    className=" text-blue-300 hover:text-blue-100"
                                                >
                                                    {" "}
                                                    &nbsp;Jurado evaluador.
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Anuncio de personas
                                                    seleccionadas.
                                                </div>
                                            </div>
                                            <div className="text-white"></div>
                                        </div>
                                    </div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>28</div>
                                                <div>Abril</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 "></div>
                                </div>

                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10"></div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>2</div>
                                                <div>Mayo</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 ">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Inicio de etapa de
                                                    formación:
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <p className="color-contrast-medium">
                                                    Cada semana:
                                                    <br /> a) Participación
                                                    presencial en taller con
                                                    duración de 2 horas
                                                    <br />
                                                    b) Masterclass semanal con
                                                    duración de 1 hora.
                                                </p>

                                                <p className="color-contrast-medium">
                                                    Temas:
                                                </p>

                                                <p className="color-contrast-medium">
                                                    Módulo 1 (2 a 19 de mayo)
                                                    <br />
                                                    Programación básica
                                                    <br />
                                                    Introducción a diseño y
                                                    maquetación para web
                                                    <br />
                                                    Presentación de avances
                                                    <br />
                                                    <br />
                                                    Módulo 2 (22 mayo al 9 de
                                                    junio)
                                                    <br />
                                                    Diseño y programación de
                                                    videojuegos en Unity
                                                    <br />
                                                    Realidad virtual y
                                                    aumentada, metaverso
                                                    <br />
                                                    Presentación de avances
                                                    <br />
                                                    <br />
                                                    Módulo 3 (12 al 29 de junio)
                                                    <br />
                                                    Manejo de Plataformas de
                                                    Arte Digital NTFs y
                                                    Blockchain
                                                    <br />
                                                    Creación de Dossier/Galería
                                                    Digital en Metaverso
                                                    <br />
                                                    Presentación de avances
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Receso Vacacional.
                                                </div>
                                            </div>
                                            <div className="text-white"></div>
                                        </div>
                                    </div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>3 al 31</div>
                                                <div>Julio</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 "></div>
                                </div>

                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10"></div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>1 al 30</div>
                                                <div>Agosto</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 ">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Reinicio y cierre de etapa
                                                    de formación.
                                                </div>
                                            </div>
                                            <div className="text-white"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                                <div className="flex w-full flex-row">
                                    {/* <!-- left col --> */}

                                    <div className="w-2/5 px-2 py-10">
                                        <div className="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                            <div className="mb-2 flex justify-between text-white">
                                                <div className="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                    Premiación y lanzamiento.
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                Evento a realizarse en Poliforum
                                                Cultural Universitario
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--line column--> */}
                                    <div className="flex  w-1/5 justify-center">
                                        <div className="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                            <div className="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                                <div>Por</div>
                                                <div>confirmar</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--right column--> */}
                                    <div className="w-2/5 px-2 py-10 "></div>
                                </div>

                                {/* Aqui termina el elemento del timeline -----------------------------*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Timeline para mobile ----------------------------------------------------- */}
            </MainLayout>
        </div>
    );
}
