import content from '../Content.json';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

const Cxt1 = () => {
    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });

    return (
        <>
            <div className="flex flex-col md:flex-row pl-5 md:pl-16">
                <div className="card w-full pr-5 md:px-0 md:w-[600px] mt-5 md:mt-24 h-auto relative md:order-1 order-2">
                    <figure>
                        <img
                            src="/assets/diyo.jpg"
                            className="rounded-lg ml-0 md:ml-20 md:absolute md:top-0 md:left-0 z-10"
                        />
                    </figure>
                </div>
                <animated.div
                    style={parallaxTextEffect}
                    className="w-full h-auto bg-[#071739] pb-5 pl-5 md:pl-28 pr-5 pt-5 rounded-l-md md:order-2 order-1 md:mt-0 mt-10  "
                >
                    <div className="flex items-center mr space-x-8 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }} className="text-white text-2xl w-[250px] md:w-[170px] font-bold">ABOUT ME
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-[100%] h-[3px] rounded-md bg-[#E3C39D]">
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-md mt-4 md:mt-8 font-poppins font-normal text-white text-justify mx-auto md:mx-0  leading-normal"
                    >
                        {content.description2}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white text-2xl mt-10 font-bold">SKILL
                    </motion.h1>
                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[#E3C39D] mt-3 text-xl font-medium">Industry Knowledge
                    </motion.h5>

                    {/* PROGRESS SKILL IK */}
                    <div className="flex flex-col md:flex-row  gap-0 md:gap-16">
                        <div className="colum1">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Restaurant Management
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Inventory Management
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Event Planning
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>

                        <div className="colum2">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Inventory Control
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Purchasing Order
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">SOP Food & Beverage
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>

                        <div className="colum3">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Stock Balance
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Cost of Beverage
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>
                    </div>

                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[#E3C39D] mt-10 text-xl font-medium">Interpersonal Skills
                    </motion.h5>

                    {/* PROGRESS SKILL IS */}
                    <div className="flex flex-col md:flex-row  gap-0 md:gap-16">
                        <div className="colum1">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Commitment
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Communication
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Teamwork
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Active
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>

                        <div className="colum2">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Decision Maker
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Plan Maker
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Creative
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Confident
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>

                        <div className="colum3">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Personal Approach
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Customer Service
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Problem Solving
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>
                    </div>

                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[#E3C39D] mt-10 text-xl font-medium">Tools & Technologies
                    </motion.h5>

                    {/* PROGRESS SKILL IK */}
                    <div className="flex flex-col md:flex-row  gap-0 md:gap-16">
                        <div className="colum1">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Microsoft Word
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Microsoft Excel
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>

                        <div className="colum2">
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">MICROS
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                            <div className="">
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-white mt-5 text-md font-normal">Microsoft PowerPoint
                                </motion.h5>
                                <progress className="progress progress-custom bg-[#D9D9D9] w-full  md:w-56" value="90" max="100"></progress>
                            </div>
                        </div>
                    </div>

                </animated.div>

            </div>

            <style>{`
                .progress-custom::-webkit-progress-bar {
                    background-color: #D9D9D9;
                }

                .progress-custom::-webkit-progress-value {
                    background-color: #E3C39D;
                }

                .progress-custom::-moz-progress-bar {
                    background-color: #E3C39D;
                }
            `}</style>
        </>
    )
}

export default Cxt1