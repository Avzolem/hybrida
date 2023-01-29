const CheckBox = ({
    label,
    name,
    description = "",
    errorMessage = "",
    register,
    ...rest
}) => {
    return (
        <div className="relative flex items-start">
            <div className="flex h-5 items-center">
                <input
                    id={name}
                    name={name}
                    {...register}
                    type="checkbox"
                    className="focus:ring-buttonbg h-4 w-4 rounded border-gray-300 text-hybrida-fuchsia"
                    {...rest}
                />
            </div>
            <div className="ml-3 text-sm">
                <label
                    htmlFor="comments"
                    className="font-medium capitalize text-hybrida-fuchsia"
                >
                    {label}
                </label>
                <p
                    id="comments-description text-hybrida-fuchsia"
                    className="text-hybrida-fuchsia"
                >
                    {description}
                </p>
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            </div>
        </div>
    );
};

export default CheckBox;
