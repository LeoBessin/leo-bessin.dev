import logoBig from '/src/assets/images/logo-big.svg'
import CtaButton from "../CtaButton/CtaButton.jsx";
const NavBar = () => {
    return (
        <>
            <nav className="flex flex-row items-center justify-between mx-auto py-4 px-20 bg-bg-100 sticky top-0 border-b border-primary-300">
                <ul className="text-2xl flex flex-row space-x-20">
                    <li>
                        <a className="link-underline" href="#">./expertise</a>
                    </li>
                    <li>
                        <a className="link-underline"  href="#">./about</a>
                    </li>
                </ul>
                <div className="absolute left-1/2 translate-x-[-50%]">
                    <img className="w-40" src={logoBig} alt="Léo Bessin big logo"/>

                </div>
                <div className="relative">
                    <CtaButton>Contact</CtaButton>
                    <div className="w-3 h-3 bg-accent-200 rounded-xl absolute top-1 right-1 "></div>
                    <div className="w-3 h-3 bg-primary-200 rounded-xl absolute top-1 right-1 animate-ping"></div>
                </div>
            </nav>
        </>
    )
}

export default NavBar