import Navbar from "../Components/Navbar"
import content from '../Components/Content.json';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';


const Home = () => {
    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });
    return (
        <>
            <Navbar />
            <div className="flex flex-col px-16 md:flex-row">
                <animated.div
                    style={parallaxTextEffect}
                    className="w-full h-auto mt-40">
                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#A68769] text-5xl font-bold px-5 md:px-0 font-poppins"
                    >
                        HI!,
                    </motion.h5>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-5xl px-5 md:px-0 mt-3 font-poppins font-bold"
                    >
                        I'M <span className="text-[#A68769]">DIYOGUSTI MIXOLOGIST</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm mt-4 md:mt-8 font-poppins font-light text-justify mx-auto md:mx-0 w-[600px] leading-normal"
                    >
                        {content.description}
                    </motion.p>
                    <div className="px-5 md:px-0">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="py-2 px-5 w-full md:w-[200px]  text-white rounded-lg mt-6 font-poppins md:mt-20 bg-[#071739]"
                        // onClick={handleMoreInfoClick} // Attach the click handler
                        >
                            Tombol Tobrut
                        </motion.button>
                    </div>
                </animated.div>
                <div className="">
                    <img src="/assets/diyo1.svg" />
                </div>
            </div>

            <div className="flex flex-col px-16 md:flex-row">
                <div className="img">
                    <img src="/assets/diyo.jpg" />
                </div>
                <animated.div
                    style={parallaxTextEffect}
                    className="w-full h-auto mt-40">

                </animated.div>
            </div>
        </>
    )
}

export default Home
