import MainLayout from "@/components/layouts/MainLayout";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Hero() {
    return (
        <MainLayout>
            <script
                src="https://kit.fontawesome.com/16679573af.js"
                crossorigin="anonymous"
            ></script>
            <div className="relative bg-[#0a012c]">
                <main className="lg:relative">
                    <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block text-white xl:inline">
                                    Unete a nuestra comunidad y explora el{" "}
                                </span>{" "}
                                <span className="block text-pink-500 xl:inline">
                                    Metaverso{" "}
                                </span>
                                <span className="block text-white xl:inline">
                                    y colabora con nosotros en la creación de
                                    arte digital.
                                </span>{" "}
                            </h1>
                            <p className="mx-auto mt-3 max-w-md text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
                                Nuestro objetivo es crear una comunidad de
                                artistas digitales que puedan colaborar y nos
                                ayuden a construir el futuro del arte digital.
                            </p>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/subastas"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Entrar en el metaverso
                                    </a>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-500 hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
                                    >
                                        ¿Cómo me uno?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                        <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src="images/hybrida.png"
                            alt=""
                        />
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}
