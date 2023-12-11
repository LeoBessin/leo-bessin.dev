import SideScroll from "../SideScroll/SideScroll.jsx";
import decorationCircle1 from "/src/assets/images/decoration-circle-1.svg"
import decorationCircle2 from "/src/assets/images/decoration-circle-2.svg"
import decorationShape1 from "/src/assets/images/decoration-shape-1.svg"




const Hero = () => {
    return(
        <>
            <div className="absolute top-40 right-[20vw]" id="hero-section">
                <img className=" w-24 rotate-12" src={decorationShape1} alt="decoration cirlce"/>
            </div>
            <img className="absolute w-28 top-[500px] left-80 animate-pulse" src={decorationCircle1}
                 alt="decoration cirlce"/>
            <div className="w-screen flex flex-col justify-center items-center pt-32 gap-32">
                <div className="font-semibold text-[128px] mx-[25vw] text-center clip-patgh-polygon" id="reveal-text">
                    <p className="reveal-text">Web Developer & Student</p>
                </div>
                <SideScroll/>
            </div>
        </>
    )
}

export default Hero