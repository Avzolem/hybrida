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
        <main className="flex flex-col  relative">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
            <div className="px-4 sm:px-8 lg:w-full ">
              <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-5xl md:text-6xl">
                <span className="block text-white xl:inline">Explora el </span>{" "}
                <span className="block text-fuchsia-400 xl:inline">
                  Metaverso{" "}
                </span>
                <span className="block text-white xl:inline">
                  y colabora en la creación de arte digital.
                </span>{" "}
              </h1>

              <div className="mt-10 sm:flex sm:justify-center ">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                  >
                    {" "}
                    <span>¡Registrate Ahora!  </span>
                    {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="white"
                                            class="bi bi-discord"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                        </svg> */}
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#init"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-fuchsia-500 hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
                  >
                    ¿Que es Hybrida?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative absolute h-full w-full mt-6 md:mt-0 justify-center">
            <a name="init"></a>
            <img
              name="hybrida"
              className="absolute relative  h-full w-full md:h-2/3 md:w-2/3  "
              src="images/convocatoria_hybrida.png"
              alt=""
            />
          </div>
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
            <div className="px-4 sm:px-8 lg:w-full ">
              <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-3xl md:text-4xl">
                <span className="block text-white xl:inline">
                  Da el salto en la inovacion y conoce{" "}
                </span>{" "}
                <span className="block text-pink-500 xl:inline">Hybrida </span>
              </h1>

              <div className="mt-10 sm:flex sm:justify-center ">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                  >
                    {" "}
                    <span>¡Registrate Aqui!  </span>
                  </a>
                  <a name="scroll"></a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
