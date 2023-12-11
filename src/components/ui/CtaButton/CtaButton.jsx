const CtaButton = ({ children }) => {
    return (
        <>
            <button type="button" className="text-primary-200 m-2 text-xl hover:text-bg-100 border-2 border-primary-200 hover:bg-primary-200 font-medium rounded-3xl px-5 py-2.5 me-2 mb-2">
                {children}
            </button>
        </>
    )
}

export default CtaButton