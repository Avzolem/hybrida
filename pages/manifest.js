import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";
import { CameraIcon } from '@heroicons/react/solid';

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout id="main-layout"
                title="Cronograma"
                description="Cronograma de actividades"
            >

    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        {/* <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-blue-500 lg:block" /> */}
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">Manifiesto</h3>
            <h2 className="text-lg font-semibold text-blue-400"><br />"Todo lo que puedas imaginar es real"
                    <br />- Pablo Picasso</h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-blue-400" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/mujervr.png"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-white">
                    Creemos que el metaverso es una nueva y poderosa frontera
                    para la experimentación, la innovación y la creación de
                    nuevas formas de arte y expresión.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-white lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                    Nuestra misión es crear una plataforma inmersiva para
                    construir puentes entre lo virtual y lo real, entre lo
                    físico y lo imaginado; donde artistas, intérpretes, músicos
                    y pensadores se conecten, creen y exploren..
              </p>
              <p>
                     Buscamos fomentar una cultura de colaboración, co-creación y
                    solidaridad creativa. Creemos que el metaverso ofrece la
                    oportunidad para que personas diversas se conecten, aprendan
                    y creen en comunidad.
              </p>
              <p>
                    Estamos comprometidos a ampliar los límites de lo que es
                    posible en las artes digitales y virtuales. Buscamos crear
                    un espacio que desafíe el status quo, altere las formas
                    tradicionales de arte e inspire nuevas formas de pensar y
                    ver.
              </p>
              <p>
                    Invitamos a todos los artistas, creadores e innovadores a
                    unirse en este viaje. Juntos construiremos un nuevo mundo
                    para celebrar el poder de la imaginación, la colaboración y
                    la comunidad.
              </p>
              <h4 class=" text-white">* Generado por ChatGPT (V. Feb 13). Mejorado por humanos.</h4>
          
            </div>
          </div>
        </div>
      </div>
    </div>

    </MainLayout>
        </div>
    );
}
