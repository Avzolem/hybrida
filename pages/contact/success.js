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
            console.log("dataToSend =>", dataToSend);
        } catch (error) {
            toast.error("Ocurrio un error al enviar el formulario");
        }

        setSubmitLoading(false);

        //parse phone
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
                            Hemos recibido tu solicitud, en breve nos pondremos
                            en contacto contigo.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
