const SideScroll = () => {
    return (
        <>
        <div className="flex flex-row items-center gap-4 rotate-90">
            <p className="text-lg text-primary-200">scroll</p>
            <div className="relative w-24 h-2 flex flex-row items-center overflow-hidden">
                <div className="bg-primary-200 h-0.5 w-16 animate-line"></div>
            </div>

        </div>
        </>
    )
}

export default SideScroll