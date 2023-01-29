import MainLayout from "@/components/layouts/MainLayout";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import parsePhoneNumber, { isValidPhoneNumber } from "libphonenumber-js";
import LoadingCircle from "@/components/common/LoadingCircle";
import toast from "react-hot-toast";
import {
    Input,
    PhoneInput,
    TextArea,
    CheckBox,
} from "@/components/forms/fields";

const ContactPage = () => {
    const {
        register,
        clearErrors,
        setError,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [submitLoading, setSubmitLoading] = useState(false);

    const countryWatch = watch("phoneCountry");
    const phoneWatch = watch("phone");

    const validatePhone = async (phone, country) => {
        const isValidNumber = isValidPhoneNumber(phone, country);
        if (!isValidNumber) {
            setError("phone", {
                type: "manual",
                message: "Número de teléfono no válido",
            });
        } else {
            clearErrors("phone");
        }
    };

    useEffect(() => {
        //every time the country select changes, we need to revalidate...
        if (countryWatch) {
            validatePhone(phoneWatch, countryWatch);
        }
    }, [countryWatch]);

    // SUBMIT FUNCTION
    const onSubmit = async (data) => {
        //DO WHATEVER YOU WANT HERE
        setSubmitLoading(true);
        const { phoneCountry, phone } = data;

        //validate phone
        const isValidNumber = isValidPhoneNumber(phone, phoneCountry);

        if (!isValidNumber) {
            toast.error("Número de teléfono no válido");
            return;
        }

        const phoneParsed = parsePhoneNumber(phone, phoneCountry);

        try {
            //send data to backend using axios
            const dataToSend = { ...data, phone: phoneParsed.number };
            await axios.post("/api/contact", { data: dataToSend });
            toast.success("Formulario enviado correctamente");

            setTimeout(() => {
                window.location.href = "/contact/success";
            }, 2000);
        } catch (error) {
            toast.error("Ocurrio un error al enviar el formulario");
        }

        setSubmitLoading(false);
    };

    return (
        <MainLayout>
            <div className="overflow-hidden bg-hybrida-bgblue py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="relative mx-auto max-w-xl">
                    <svg
                        className="absolute left-full translate-x-1/2 transform"
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
                        className="absolute right-full bottom-0 -translate-x-1/2 transform"
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
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 ">
                                <Input
                                    label="Nombre"
                                    name="firstName"
                                    type="text"
                                    register={{
                                        ...register("firstName", {
                                            required: {
                                                value: true,
                                                message: "Nombre es requerido",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.firstName?.message}
                                />

                                <Input
                                    label="Apellido"
                                    name="lastName"
                                    type="text"
                                    register={{
                                        ...register("lastName", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Apellido es requerido",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.lastName?.message}
                                />
                            </div>

                            <div className="w-full">
                                <Input
                                    label="Email"
                                    name="email"
                                    type="text"
                                    register={{
                                        ...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email es requerido",
                                            },
                                            pattern: {
                                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i,
                                                message: "Email Inválido",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.email?.message}
                                />
                            </div>

                            <PhoneInput
                                label="Número de teléfono"
                                name="phone"
                                type="tel"
                                onChange={(e) => {
                                    validatePhone(e.target.value, countryWatch);
                                }}
                                selectRegister={{
                                    ...register("phoneCountry", {
                                        required: {
                                            value: true,
                                            message:
                                                "El código de país es requerido",
                                        },
                                    }),
                                }}
                                register={{
                                    ...register("phone", {
                                        required: {
                                            value: true,
                                            message:
                                                "El número de teléfono es requerido",
                                        },
                                    }),
                                }}
                                errorMessage={errors.phone?.message}
                            />

                            <div className="w-full">
                                <Input
                                    label="Escuela/Organización"
                                    name="company"
                                    type="text"
                                    register={{
                                        ...register("company", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Este campo es requerido",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.company?.message}
                                />
                            </div>

                            <div className="w-full">
                                <TextArea
                                    label="Sube tu obra a la nube y copia aquí el enlace para compartir, si requiere algún software ó plugin extra para visualizarse, comentánoslo.
                                    "
                                    name="message"
                                    type="text"
                                    register={{
                                        ...register("message", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Este campo es requerido",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.message?.message}
                                />
                            </div>

                            <div className="w-full">
                                <CheckBox
                                    label="Acepto los términos y condiciones"
                                    description="Al registrarte aceptas los términos y Condiciones"
                                    name="terms"
                                    register={{
                                        ...register("terms", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Debes aceptar los términos",
                                            },
                                        }),
                                    }}
                                    errorMessage={errors.terms?.message}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-hybrida-fuchsia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    disabled={submitLoading}
                                >
                                    {submitLoading ? (
                                        <div>
                                            <LoadingCircle />
                                        </div>
                                    ) : (
                                        "Entrar al metaverso!"
                                    )}
                                </button>
                                <input
                                    type="hidden"
                                    name="_captcha"
                                    value="false"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;