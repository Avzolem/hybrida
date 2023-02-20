import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                id="main-layout"
                title="artistas"
                description="Cronograma de actividades"
            >
                <div class="relative min-h-screen">
                    <div class="flex min-h-screen justify-center">
                        <div class="mx-auto w-2/3">
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                        <div class="0 mb-2 flex justify-between text-white">
                                            <div class="opacity-1 text-xl font-bold tracking-tight sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Apertura de convocatoria
                                            </div>
                                        </div>
                                        <div
                                            id="descriptic"
                                            class="text-white  "
                                        >
                                            Revisa la convocatoria. Aqui va un
                                            href
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white ">
                                            <div>1</div>
                                            <div>Marzo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 "></div>
                            </div>

                            {/* Aqui termina un elemento ------------------ */}

                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10"></div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>8, 15 y 22</div>
                                            <div>Marzo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50  px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Sesiones informativas
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            El horario y plataforma se
                                            notificarán por las redes sociales
                                            de la UACH.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Aqui termina un elemento del timeline--------------------*/}

                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Cierre de convocatoria
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>31</div>
                                            <div>Marzo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 "></div>
                            </div>

                            {/* Aqui termina el elemento del timeline -----------------------------*/}

                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10"></div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center  font-bold leading-none  text-white ">
                                            <div>18 al 27</div>
                                            <div>Abril</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Evaluación de propuestas
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            Conoce al Jurado evaluador. Aqui va
                                            un href a contact
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Anuncio de personas
                                                seleccionadas
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>28</div>
                                            <div>Abril</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 "></div>
                            </div>

                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10"></div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>2</div>
                                            <div>Mayo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Inicio de etapa de formación
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            <p class="color-contrast-medium">
                                                Cada semana:
                                                <br /> a) Participación
                                                presencial en taller con
                                                duración de 2 horas
                                                <br />
                                                b) Masterclass semanal con
                                                duración de 1 hora.
                                            </p>

                                            <p class="color-contrast-medium">
                                                Temas:
                                            </p>

                                            <p class="color-contrast-medium">
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
                                                Módulo 2 (22 mayo al 9 de junio)
                                                <br />
                                                Diseño y programación de
                                                videojuegos en Unity
                                                <br />
                                                Realidad virtual y aumentada,
                                                metaverso
                                                <br />
                                                Presentación de avances
                                                <br />
                                                <br />
                                                Módulo 3 (12 al 29 de junio)
                                                <br />
                                                Manejo de Plataformas de Arte
                                                Digital NTFs y Blockchain
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
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Receso Vacacional
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>3 al 31</div>
                                            <div>Julio</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 "></div>
                            </div>

                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10"></div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center  font-bold leading-none  text-white ">
                                            <div>1 al 30</div>
                                            <div>Agosto</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500/75 to-[#ec2e92]/50 px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Reinicio y cierre de etapa de
                                                formación
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            lorem ipsum shit
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-gradient-to-r from-indigo-500/50 via-purple-500/75 to-[#ec2e92] px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-white">
                                            <div class="text-xl font-bold sm:text-2xl  md:text-3xl lg:text-4xl">
                                                Premiación y lanzamiento
                                            </div>
                                        </div>
                                        <div class="text-white">
                                            Evento de gala a realizarse en
                                            Poliforum Cultural Universitario el
                                            día XX de XXXX, a las XXXX, con
                                            duración de 3 horas. Incluye montaje
                                            previo al evento.
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-[#ec2e92]">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-[#ec2e92] bg-hybrida-bgblue text-center font-bold leading-none text-white">
                                            <div>17</div>
                                            <div>Septiembre</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 "></div>
                            </div>

                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
