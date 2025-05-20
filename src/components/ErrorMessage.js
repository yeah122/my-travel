export default function ErrorMessage({
    error = false,
    errorMessage = ""
}) {
    return (
        <p className="h-5 text-sm mt-1 text-red-500">
            <span className={error ? "visible" : "invisible"}>{errorMessage}</span>
        </p>
    )
}