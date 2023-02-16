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
                {/* <!-- Timeline component --> */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                    integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                    crossorigin="anonymous"
                />

                <div class="z-[1] min-h-screen">
                    <div class="flex min-h-screen justify-center">
                        <div class="mx-auto w-2/3">
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="text-white-900 text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                Apertura de convocatoria
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            Revisa la convocatoria. Aqui va un
                                            href
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none ">
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
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
                                            <div>8, 15 y 22</div>
                                            <div>Marzo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Sesiones informativas
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
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
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Cierre de convocatoria
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
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
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
                                            <div>18 al 27</div>
                                            <div>Abril</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Evaluación de propuestas
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
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
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Anuncio de personas
                                                seleccionadas
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
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
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
                                            <div>2</div>
                                            <div>Mayo</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Inicio de etapa de formación
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
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
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Receso Vacacional
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            Привет Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                {/* <!--line column--> */}
                                <div class="flex  w-1/5 justify-center">
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
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
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
                                            <div>1 al 30</div>
                                            <div>Agosto</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--right column--> */}
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Reinicio y cierre de etapa de
                                                formación
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            lorem ipsum shit
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Aqui termina el elemento del timeline -----------------------------*/}
                            <div class="flex w-full flex-row">
                                {/* <!-- left col --> */}

                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex w-full flex-col rounded-lg bg-white px-4 py-5 shadow">
                                        <div class="mb-2 flex justify-between text-gray-600">
                                            <div class="font-bold">
                                                Premiación y lanzamiento
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
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
                                    <div class="relative flex h-full w-1 items-center justify-center bg-fuchsia-300">
                                        <div class="absolute z-10 flex h-24 w-24 flex-col justify-center rounded-full border-2 border-fuchsia-300 bg-white text-center font-bold leading-none">
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
