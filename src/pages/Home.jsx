import Navbar from "../Components/Navbar"
import content from '../Components/Content.json';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import Cxt1 from "../Components/Hcontent/Cxt1";
import Cxt2 from "../Components/Hcontent/Cxt2";


const Home = () => {
    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-5 md:px-16 md:flex-row">
                <animated.div
                    style={parallaxTextEffect}
                    className="w-full h-auto mt-5 md:mt-40">
                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#A68769] text-4xl md:text-5xl font-bold px-0 font-poppins"
                    >
                        HI!,
                    </motion.h5>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-5xl px-0  text-[#071739] mt-3 font-poppins font-bold"
                    >
                        I&rsquo;M <span className="text-[#A68769]">DIYOGUSTI MIXOLOGIST</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-md mt-4 md:mt-8 font-poppins font-normal text-[#4A6382] text-justify mx-auto md:mx-0 w-full md:w-[600px] leading-normal"
                    >
                        {content.description}
                    </motion.p>
                    <div className="px-0 md:px-0">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="py-2 px-5 w-full md:w-[120px]  text-white rounded-lg mt-6 font-poppins md:mt-20 bg-[#071739]"
                        // onClick={handleMoreInfoClick} // Attach the click handler
                        >
                            More Info
                        </motion.button>
                    </div>
                </animated.div>
                <div className="hidden md:block">
                    <img src="/assets/Diyooo.webp" className="w-[900px]" />
                </div>
            </div>

            {/* PROGRESS SKILL */}
            <Cxt1 />
            {/* WORK EX */}
            <Cxt2 />

            <div
                className="relative w-full h-[200px] md:h-[400px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/bg1.jpg')",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="absolute inset-0 bg-[#071739] opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-2xl md:text-5xl font-poppins font-bold mt-8 tracking-wide md:tracking-widest opacity-70">
                        MENU PRESENTATIONS
                    </h2>
                    <div className="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-10 h-10 md:w-16 md:h-16 mt-5 opacity-70"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full h-[400px]">

            </div>

        </>
    )
}

export default Home
