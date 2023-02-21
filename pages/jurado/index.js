import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";

const people = [
    {
        name: "Andres Aguilar",
        role: "Crypto Artist",
        imageUrl: "/images/artistas/andres.jpg",
        twitterUrl: "#",
        behanceUrl: "#",
    },
    {
        name: "Bart Lopez",
        role: "Another Person",
        imageUrl: "/images/artistas/bart.jpeg",
        twitterUrl: "#",
        behanceUrl: "#",
    },
    {
        name: "Cesar Ortiz",
        role: "AR Developer",
        imageUrl: "/images/artistas/cesar.jpeg",
        twitterUrl: "#",
        behanceUrl: "#",
    },
    {
        name: "Andrea Ornelas",
        role: "Designer",
        imageUrl: "/images/artistas/andy.jpeg",
        twitterUrl: "#",
        behanceUrl: "#",
    },
    {
        name: "Jonathan Meixueiro",
        role: "3D Designer",
        imageUrl: "/images/artistas/jonathan.jpeg",
        twitterUrl: "#",
        behanceUrl: "#",
    },
    // More people...
];

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
                <MainLayout
            title="artistas"
            description="Conoce a quienes dan vida a nuestro metaverso y conecta con ellos."
        >
            <div className="bg-[#0a012c]">
                <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight text-pink-500 sm:text-4xl">
                                Conoce a nuestro Jurado Evaluador 
                            </h2>
                            <p className="text-xl text-gray-300">
                                Conoce a quienes dan vida a nuestro metaverso y
                                conecta con ellos.
                            </p>
                        </div>
                        <ul
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
                                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3 className="text-white">
                                                    {person.name}
                                                </h3>
                                                <p className="text-pink-500">
                                                    {person.role}
                                                </p>
                                            </div>

                                            <ul
                                                role="list"
                                                className="flex justify-center space-x-5"
                                            >
                                                <li>
                                                    <a
                                                        href={person.twitterUrl}
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
                                                        href={person.behanceUrl}
                                                        className="text-gray-400 hover:text-gray-300"
                                                    >
                                                        <span className="sr-only">
                                                            Behance
                                                        </span>
                                                        <svg
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
        </div>
    );
}
