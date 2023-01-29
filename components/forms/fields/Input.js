const Input = ({
    label,
    name,
    type,
    placeholder = "",
    errorMessage = "",
    register,
    ...rest
}) => {
    const className = { ...rest.className };

    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-hybrida-fuchsia"
            >
                {label}
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="focus:ring-inputfocus focus:border-inputfocus block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    placeholder={placeholder}
                    {...register}
                    {...rest}
                />
            </div>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        </div>
    );
};

export default Input;
