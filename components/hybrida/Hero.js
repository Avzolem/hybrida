import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  return (
    <div className="relative bg-[#0a012c]">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-1 text-center lg:pb-1 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-fuchsia-500 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">CONVOCATORIA</span>{" "}
              <span className="block text-fuchsia-500 xl:inline">
                Hybrida 2023
              </span>
            </h1>
            <p className="mx-auto mt-3 mb-1 max-w-md text-lg text-blue-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Traslada tus creaciones a un espacio en el metaverso,
              especialmente diseñado para presentar cualquier tipo de obra
              artística, de diseño, tecnológica o mixta.
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full px-12 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/convocatoria/hybrida-esfera.png"
            alt="Hybrida esfera"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
