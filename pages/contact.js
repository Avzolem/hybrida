import MainLayout from "@/components/layouts/MainLayout";
import classNames from "@/utils/classNames";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
    const [agreed, setAgreed] = useState(false);
    const [globalError, setGlobalError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // SUBMIT FUNCTION
    const onSubmit = async (data) => {
        setGlobalError("");
        if (!agreed) {
            setGlobalError("Debes aceptar los terminos y condiciones");
            return;
        }

        //DO WHATEVER YOU WANT HERE
        console.log("SUBMITED DATA =>", data);
    };

    return (
        <MainLayout>
            <div className="bg-hybrida-bgblue py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                        className="absolute left-full transform translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-hybrida-fuchsia"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={404}
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 transform -translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={404}
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-hybrida-fuchsia sm:text-4xl">
                            Registro a la Convocatoria Hybrida 2023
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-white">
                            Participa en la convocatoria Hybrida 2023 y
                            conviértete en un agente de evolucion para el arte.
                        </p>
                    </div>
                    <div className="mt-12">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        >
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Nombre
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-hybrida-fuchsia focus:border-hybrida-fuchsia border-gray-300 rounded-md"
                                        {...register("firstName", {
                                            required: {
                                                value: true,
                                                message: "Nombre es requerido",
                                            },
                                        })}
                                    />
                                    {errors.firstName && (
                                        <div className="mt-3 text-sm text-red-600">
                                            {errors.firstName.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Apellido
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-text-hybrida-fuchsia focus:border-text-hybrida-fuchsia border-gray-300 rounded-md"
                                        {...register("lastName", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Apellido es requerido",
                                            },
                                        })}
                                    />
                                    {errors.lastName && (
                                        <div className="mt-3 text-sm text-red-600">
                                            {errors.lastName.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Escuela/Organizacion
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-hybrida-fuchsia focus:border-hybrida-fuchsia border-gray-300 rounded-md"
                                        {...register("company", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Escuela/Organizacion es requerido",
                                            },
                                        })}
                                    />
                                    {errors.company && (
                                        <div className="mt-3 text-sm text-red-600">
                                            {errors.company.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-hybrida-fuchsia focus:border-hybrida-fuchsia border-gray-300 rounded-md"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email es requerido",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <div className="mt-3 text-sm text-red-600">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Número telefónico
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label
                                            htmlFor="country"
                                            className="sr-only"
                                        >
                                            País
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-hybrida-fuchsia focus:border-hybrida-fuchsia rounded-md"
                                        >
                                            <option>MX</option>
                                            <option>CA</option>
                                            <option>US</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full pl-20 focus:ring-hybrida-fucsia focus:border-hybrida-fuchsia border-gray-300 rounded-md"
                                        placeholder="+1 (555) 987-6543"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Teléfono es requerido",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.phone && (
                                    <div className="mt-3 text-sm text-red-600">
                                        {errors.phone.message}
                                    </div>
                                )}
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-hybrida-fuchsia"
                                >
                                    Mensaje
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-hybrida-fuchsia focus:border-hybrida-fuchsia border border-gray-300 rounded-md"
                                        defaultValue={""}
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: "Mensaje es requerido",
                                            },
                                            min: {
                                                value: 20,
                                                message: "Minimo 20 caracteres",
                                            },
                                            max: {
                                                value: 280,
                                                message:
                                                    "Maximo 280 caracteres",
                                            },
                                        })}
                                    />
                                    {errors.message && (
                                        <div className="mt-3 text-sm text-red-600">
                                            {errors.message.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed
                                                    ? "bg-hybrida-fuchsia"
                                                    : "bg-gray-200",
                                                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hybrida-fuchsia"
                                            )}
                                        >
                                            <span className="sr-only">
                                                Acuerdo de políticas de
                                                privacidad
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed
                                                        ? "translate-x-5"
                                                        : "translate-x-0",
                                                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-white">
                                            Seleccionando esto, estás de acuerdo
                                            con nuestra{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-hybrida-fuchsia underline"
                                            >
                                                Política de privacidad
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-hybrida-fuchsia underline"
                                            >
                                                Política de Cookies
                                            </a>
                                            .
                                        </p>
                                        {globalError && (
                                            <div className="mt-3 text-sm text-red-600">
                                                {globalError}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-hybrida-fuchsia hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Entrar en el Metaverso!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
