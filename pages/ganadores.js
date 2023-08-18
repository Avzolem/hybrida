import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";

const people = [
    {
        name: "Virginia Sarahí Covarrubias León",
        role: "Artista Visual",
        imageUrl: "/images/artistas/virginia.png",
    },
    {
        name: "Ángel Javier Machado Favela",
        role: "Ilustración",
        imageUrl: "/images/artistas/angel.jpg",
    },

    {
        name: "José Carlos Lozoya Loya",
        role: "Artista 3D",
        imageUrl: "/images/artistas/jose.jpg",
    },
    {
        name: "Okani Alejandro Contreras Ceniceros",
        role: "Mixed Media",
        imageUrl: "/images/artistas/okani.jpg",
    },
    {
        name: "Rey Fernando Montes Trevizo",
        role: "Virtualización de patrimonio cultural",
        imageUrl: "/images/artistas/fernando.png",
    },

    // More people...
];

export default function Home() {
    return (
        <>
            <ParticlesBackground />
            <MainLayout
                title="artistas"
                description="Conoce a quienes dan vida a nuestro metaverso y conecta con ellos."
            >
                <div className="bg-[#0a012c]">
                    <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                        <div className="space-y-12">
                            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                                <h2 className="text-3xl font-bold tracking-tight text-hybrida-fuchsia sm:text-4xl">
                                    Aplicaciones seleccionadas para la
                                    convocatoria 2023
                                </h2>
                            </div>

                            {/*  simple title to the right and image to the left*/}
                            <section className="relative">
                                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                                        <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                            {" "}
                                            {/* Aqui va la imagen */}
                                            <video
                                                src="/images/obras/horizonte.mp4"
                                                autoplay
                                                controls
                                            >
                                                Tu navegador no admite el
                                                elemento <code>video</code>.
                                            </video>
                                        </div>

                                        {/* Aqui va el texto */}
                                        <div className="m-auto">
                                            <h1 className=" text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                <span className=" text-white ">
                                                    Virginia Sarahí Covarrubias
                                                    León{" "}
                                                </span>{" "}
                                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                                    Horizonte de eventos{" "}
                                                </span>
                                            </h1>
                                            <h1 className="text-md text-center tracking-tight md:text-xl">
                                                <span className=" text-white xl:inline">
                                                    Horizonte de eventos es
                                                    encaminado a crear un mundo
                                                    virtual con diferentes
                                                    escenarios en los que se de
                                                    la interacción del usuario
                                                    con piezas tridimensionales
                                                    y bidimensionales, las
                                                    cuales serán creadas con
                                                    ayuda de software de edición
                                                    de imagen, modelado e
                                                    inteligencia artificial.
                                                    Para su visualización se
                                                    contempla el uso de lentes
                                                    VR en un espacio que permita
                                                    el movimiento a los
                                                    participantes, teniendo a la
                                                    par la visualización de lo
                                                    que ocurre durante la
                                                    intervención a través de un
                                                    monitor o pantalla.{" "}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />

                            {/*  simple title to the left and image to the right*/}
                            <section className="relative">
                                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                                        {/* Aqui va el texto */}

                                        <div className="m-auto">
                                            <h1 className=" text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                <span className=" text-white ">
                                                    Ángel Javier Machado Favela{" "}
                                                </span>{" "}
                                                <br />
                                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                                    El rey de las emociones
                                                    profundas{" "}
                                                </span>
                                            </h1>
                                            <h1 className="text-md text-center tracking-tight md:text-xl">
                                                <span className=" text-white xl:inline">
                                                    Con el concepto ya
                                                    identificado comence a
                                                    realizar bocetos a lápiz y
                                                    digital. Después opte por
                                                    representar mi ilustración
                                                    con un mecanismo más
                                                    innovador, ayudarme de la
                                                    tecnología de los oculus y
                                                    realidad virtual en un
                                                    programa de google llamado
                                                    Multibrush para una
                                                    apreciación y experiencia
                                                    diferente al ver la
                                                    ilustración.{" "}
                                                </span>
                                            </h1>
                                        </div>
                                        {/* Aqui va la imagen */}
                                        <div className="relative isolate mx-auto overflow-hidden sm:mx-0 sm:max-w-none">
                                            {" "}
                                            <video
                                                src="/images/obras/sirena.mp4"
                                                autoplay
                                                controls
                                            >
                                                Tu navegador no admite el
                                                elemento <code>video</code>.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />

                            {/*  simple title to the right and image to the left*/}
                            <section className="relative">
                                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                                        <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                            {" "}
                                            {/* Aqui va la imagen */}
                                            <video
                                                src="/images/obras/burritos.mp4"
                                                autoplay
                                                controls
                                            >
                                                Tu navegador no admite el
                                                elemento <code>video</code>.
                                            </video>
                                        </div>

                                        {/* Aqui va el texto */}
                                        <div className="m-auto">
                                            <h1 className=" text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                <span className=" text-white ">
                                                    José Carlos Lozoya Loya{" "}
                                                </span>{" "}
                                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                                    “Burritron” La
                                                    transformación de la
                                                    gastronomía urbana.{" "}
                                                </span>
                                            </h1>
                                            <h1 className="text-md text-center tracking-tight md:text-xl">
                                                <span className=" text-white xl:inline">
                                                    Con necesidad de exponer la
                                                    vida cotidiana del
                                                    chihuahuense expresada de
                                                    manera contemporánea
                                                    llegamos a la idea de crear
                                                    un personaje que cambia su
                                                    forma como la gastronomía
                                                    Chihuahuense, recordándonos
                                                    los paisajes urbanos que
                                                    vemos en nuestro día a día.{" "}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />

                            {/*  simple title to the left and image to the right*/}
                            <section className="relative">
                                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                                        {/* Aqui va el texto */}

                                        <div className="m-auto">
                                            <h1 className=" text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                <span className=" text-white ">
                                                    Okani Alejandro Contreras
                                                    Ceniceros{" "}
                                                </span>{" "}
                                                <br />
                                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                                    Híbrido{" "}
                                                </span>
                                            </h1>
                                            <h1 className="text-md text-center tracking-tight md:text-xl">
                                                <span className=" text-white xl:inline">
                                                    El concepto detrás de la
                                                    obra, es simple; busca
                                                    romper el taboo e
                                                    incertidumbre que la IA está
                                                    generando en el medio
                                                    artístico, detrás de cada
                                                    prompt hay una mente que lo
                                                    generó y una máquina que lo
                                                    ejecutó. La máquina no viene
                                                    a reemplazar al humano,
                                                    viene a acompañarlo y a
                                                    generar nuevas corrientes
                                                    artísticas si lo queremos
                                                    llamar de esta maneraEl
                                                    concepto detrás de la obra,
                                                    es simple; busca romper el
                                                    taboo e incertidumbre que la
                                                    IA está generando en el
                                                    medio artístico, detrás de
                                                    cada prompt hay una mente
                                                    que lo generó y una máquina
                                                    que lo ejecutó. La máquina
                                                    no viene a reemplazar al
                                                    humano, viene a acompañarlo
                                                    y a generar nuevas
                                                    corrientes artísticas si lo
                                                    queremos llamar de esta
                                                    manera{" "}
                                                </span>
                                            </h1>
                                        </div>
                                        {/* Aqui va la imagen */}
                                        <div className="relative isolate mx-auto overflow-hidden sm:mx-0 sm:max-w-none">
                                            {" "}
                                            <video
                                                src="/images/obras/hibrido.mp4"
                                                autoplay
                                                controls
                                            >
                                                Tu navegador no admite el
                                                elemento <code>video</code>.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />

                            {/*  simple title to the right and image to the left*/}
                            <section className="relative">
                                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                                        <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                            {" "}
                                            {/* Aqui va la imagen */}
                                            <video
                                                src="/images/obras/fernando.mp4"
                                                autoplay
                                                controls
                                            >
                                                Tu navegador no admite el
                                                elemento <code>video</code>.
                                            </video>
                                        </div>

                                        {/* Aqui va el texto */}
                                        <div className="m-auto">
                                            <h1 className=" text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                                <span className=" text-white ">
                                                    Rey Fernando Montes Trevizo{" "}
                                                </span>{" "}
                                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                                    Omnipresencia -
                                                    Desdoblamiento de una imagen{" "}
                                                </span>
                                            </h1>
                                            <h1 className="text-md text-center tracking-tight md:text-xl">
                                                <span className=" text-white xl:inline">
                                                    Es un concepto de estar en
                                                    todas partes y al mismo
                                                    tiempo, ha sido abordado
                                                    desde diferentes puntos
                                                    sobre todo el espiritual o
                                                    religioso. En mi idea de
                                                    trasmitir esta idea a una
                                                    imagen la fotografía
                                                    panorámica permite desde un
                                                    solo punto de vista observar
                                                    el interior de un inmueble
                                                    deformando la perspectiva en
                                                    360°, algo imposible para el
                                                    ojo humano.{" "}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />
                            <br />
                            <br />
                            <br />

                            {/* <ul
                                role="list"
                                className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                            >
                                {people.map((person) => (
                                    <li
                                        key={person.name}
                                        className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left"
                                    >
                                        <div className="space-y-6 xl:space-y-10">
                                            <img
                                                className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                                                src={person.imageUrl}
                                                alt=""
                                            />
                                            <div className="flex-col space-y-2 xl:flex xl:items-center xl:justify-between">
                                                <div className="space-y-1 text-lg font-medium leading-6">
                                                    <h3 className="text-center text-sky-300">
                                                        {person.name}
                                                    </h3>
                                                    <p className="text-center text-white">
                                                        {person.role}
                                                    </p>
                                                </div>

                                                <ul
                                                    role="list"
                                                    className="flex justify-center space-x-5"
                                                >
                                                    <li>
                                                        <a
                                                            href={
                                                                person.twitterUrl
                                                            }
                                                            className="text-gray-400 hover:text-gray-300"
                                                        >
                                                            <span className="sr-only">
                                                                Twitter
                                                            </span>
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href={
                                                                person.behanceUrl
                                                            }
                                                            className="text-gray-400 hover:text-gray-300"
                                                        >
                                                            <span className="sr-only">
                                                                Behance
                                                            </span>
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href={
                                                                person.instagramUrl
                                                            }
                                                            className="text-gray-400 hover:text-gray-300"
                                                        >
                                                            <span className="sr-only">
                                                                Instagram
                                                            </span>
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href={
                                                                person.websiteUrl
                                                            }
                                                            className="text-gray-400 hover:text-gray-300"
                                                        >
                                                            <span className="sr-only">
                                                                Pagina Web
                                                            </span>
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul> */}
                            <div className="text-center">
                                <p className="text-4xl text-hybrida-fuchsia">
                                    Te invitamos a conocer a las obras ganadoras
                                    en el poliforum cultural universitario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
