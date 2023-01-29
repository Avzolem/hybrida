import MainLayout from "@/components/layouts/MainLayout";

export default function Candymachine() {
    return (
        <MainLayout
            title="Candy Machine"
            description="Arte digital de Artistas de Nuestra Comunidad UACH. "
        >
            <div className="bg-white">
                <div className="mx-auto max-w-2xl justify-center py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        <span className="block"> Candy Machine NFT's </span>

                        <span className="block">
                            Arte digital de Artistas de Nuestra Comunidad
                        </span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <div class="carousel rounded-box w-96 justify-center">
                            <div class="carousel-item w-full">
                                <img
                                    src="/images/nft2.png"
                                    class="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-lg font-bold leading-6  text-gray-500">
                        Te gusta el arte digital? Te gusta la tecnología de
                        blockchain?
                        <br />
                        Con este Candy Machine tienes la oportunidad de obtener
                        un NFT de arte digital, que puedes guardar en tu wallet
                        de Solana.
                        <br />
                        Las NTF son una representación digital de un artículo
                        físico o incluso conceptual. Puedes pensar en ellas como
                        una aplicación que almacena la historia y los datos
                        asociados a un artículo específico que posees.
                        <br />
                    </p>
                    <a
                        href="https://candy-machine-aucoin.vercel.app"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 sm:w-auto"
                    >
                        Compra el tuyo ahora! :D
                    </a>
                </div>
            </div>
        </MainLayout>
    );
}
