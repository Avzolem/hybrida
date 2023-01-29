import MainLayout from "@/components/layouts/MainLayout";

const ContactPage = () => {
    return (
        <MainLayout title="Exito" childrenClassName="h-screen">
            <div className="h-min-screen h-full  bg-hybrida-bgblue ">
                <div className="relative mx-auto max-w-xl">
                    <div className="flex h-screen items-center justify-center">
                        <div className="rounded-xl bg-white px-12 text-center">
                            <h2 className="pt-20 text-3xl font-bold tracking-tight text-hybrida-fuchsia sm:text-4xl">
                                Registro a la Convocatoria Hybrida 2023
                            </h2>
                            <p className="mt-4 pb-6  text-lg leading-6 text-black">
                                Gracias por tu interés en participar en la
                                convocatoria Hybrida 2023. Te contactaremos
                                pronto.
                            </p>
                            <div className="img">
                                <img
                                    src="/images/sobre.png"
                                    className="mx-auto h-48 w-48"
                                />
                            </div>

                            <div className="pt-6 pb-20">
                                <a href="/">
                                    <button className="inline-flex items-center rounded-full border border-transparent bg-hybrida-fuchsia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                        Regresar a la página principal
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
