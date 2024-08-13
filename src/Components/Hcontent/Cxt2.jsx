import { motion } from "framer-motion";


const Cxt2 = () => {

    return (
        <>
            <div className="w-full bg-[#CDD4DA] -mt-[40rem] md:-mt-[30rem] pt-[42rem] md:pt-[32rem] h-auto pb-10">
                <div className="content w-full px-5 md:px-16 h-auto">
                    <div className="flex items-center  mr space-x-8 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }} className="text-[#071739] text-2xl w-[250px] md:w-[170px] font-bold">WORK EXPERIENCE
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-[100%] h-[3px] rounded-md bg-[#071739]">
                        </motion.div>
                    </div>

                    <div className="carousel mt-10 carousel-center bg-[#071739] rounded-md w-full space-x-4 p-4">
                        <div className="carousel-item">
                            <div className="card card-compact bg-base-100 w-[280px]">
                                <figure className="overflow-hidden h-[200px]">
                                    <img
                                        src="./assets/aura.webp"
                                        alt="aura pool bar"
                                        className="object-cover h-full w-full"
                                    />
                                </figure>
                                <div className="p-2">
                                    <h2 className="font-poppins font-semibold text-xl text-[#071739]">Hilton Maldives Amingiri Resort & SPA</h2>
                                    <p className="font-poppins font-normal text-xs text-[#ff0000]">December 2023 – March 2024</p>
                                    <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Aura Pool Bar</h5>
                                    <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Manage bar operations, craft drink recipes, control costs, and oversee daily inventory and sales summaries. Click for more info.</p>
                                    <div className="card-actions justify-end">
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                            onClick={() => document.getElementById('hiton').showModal()}
                                        >
                                            More Info
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card card-compact bg-base-100 w-[280px]">
                                <figure className="overflow-hidden h-[200px]">
                                    <img
                                        src="./assets/jiang.jpg"
                                        alt="jiang he chinese restaurant"
                                        className="object-cover h-full w-full"
                                    />
                                </figure>
                                <div className="p-2">
                                    <h2 className="font-poppins font-semibold text-xl text-[#071739]">Marriott Batam Harbour Bay</h2>
                                    <p className="font-poppins font-normal text-xs text-[#ff0000]">October 2022 – October 2023</p>
                                    <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Jiang He Chinese Restaurant</h5>
                                    <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                    <div className="card-actions justify-end">
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                            onClick={() => document.getElementById('mariot').showModal()}
                                        >
                                            More Info
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/poolbar.jpg"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">The Pool Bar</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">January 2023 – October 2023</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Pool Bar</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">
                                            Oversee new outlet pre-opening, develop drink recipes, manage costs, and handle daily operations, inventory, and purchase orders. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-7 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('pool').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/alco.jpg"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Alco Lounge & Grill</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">March 2022 – October 2022</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Cocktail Bar</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Manage cocktail lounge or bar operations, develop drink recipes, oversee inventory and staff, and handle cost and sales summaries. Click for more info</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-7 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('alco').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/jiang.jpg"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Marriott Batam Harbour Bay</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">October 2022 – October 2023</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Jiang He Chinese Restaurant</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('mariot').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/jiang.jpg"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Marriott Batam Harbour Bay</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">October 2022 – October 2023</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Jiang He Chinese Restaurant</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('mariot').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/jiang.jpg"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Marriott Batam Harbour Bay</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">October 2022 – October 2023</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Jiang He Chinese Restaurant</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('mariot').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item">
                                <div className="card card-compact bg-base-100 w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/jiang.jpg"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Marriott Batam Harbour Bay</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">October 2022 – October 2023</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Jiang He Chinese Restaurant</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-5 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('mariot').showModal()}
                                            >
                                                More Info
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            {/* MODAL */}
            <dialog id="hiton" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hilton Maldives Amingiri Resort & SPA</h3>
                    <div className="content">
                        <img src="./assets/aura.webp" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins font-normal text-sm leading-5 ">
                            <h5 className="font-bold">AS MIXOLOGIST </h5>
                            <small className="text-xs font-light text-[#ff0000]">December 2023 – March 2024</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 12 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 84 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Preparation of Bar.</li>
                                <li>Create drink recipes and manage beverage costs, including maintaining cost efficiency.</li>
                                <li>Plan, organize, and control the operations of a restaurant.</li>
                                <li>Responsible for summarizing beverage consumption, sales, and daily inventory at the end of operational time.</li>
                                <li>Review the summary of sales consumption to date, related to the daily bar product inventory, and report directly to the managers.</li>
                                <li>Responsible for creating purchase orders for beverage ingredients.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>

            <dialog id="mariot" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Marriott Batam Harbour Bay</h3>
                    <div className="content">
                        <img src="./assets/jiang.jpg" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins font-normal text-sm leading-5 ">
                            <h5 className="font-bold">As Senior Bartender</h5>
                            <small className="text-xs font-light text-[#ff0000]">October 2022 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 84 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Pre-opening new outlet.</li>
                                <li>Create drink recipes and Make cost of beverage included
                                    maintain cost of beverage.</li>
                                <li>Plan, organize, and control the operations of a restaurant.</li>
                                <li>Responsible to make summary Beverage Consumption of sales and
                                    daily inventory in the end of operational time.</li>
                                <li>Review the Summary Consumption of Sales to date related to the
                                    Daily Bar Product Inventory, and directly report to the Mangers.</li>
                                <li>Responsible to make Purchase Order Ingredients for beverage.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>

            <dialog id="pool" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">The Pool Bar</h3>
                    <div className="content">
                        <img src="./assets/poolbar.jpg" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins font-normal text-sm leading-5 ">
                            <h5 className="font-bold">As Senior Bartender</h5>
                            <small className="text-xs font-light text-[#ff0000]">January 2023 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 2 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 10 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Pre-opening new outlet.</li>
                                <li>Create drink recipes and Make cost of beverage included
                                    maintain cost of beverage.</li>
                                <li>Plan, organize, and control the operations of a restaurant.</li>
                                <li>Responsible to make summary Beverage Consumption of sales and
                                    daily inventory in the end of operational time.</li>
                                <li>Review the Summary Consumption of Sales to date related to the
                                    Daily Bar Product Inventory, and directly report to the Mangers.</li>
                                <li>Responsible to make Purchase Order Ingredients for beverage.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>

            <dialog id="alco" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">The Pool Bar</h3>
                    <div className="content">
                        <img src="./assets/alco.jpg" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins font-normal text-sm leading-5 ">
                            <h5 className="font-bold">As Bar Captainr</h5>
                            <small className="text-xs font-light text-[#ff0000]">January 2023 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 40 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 200 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Plan, organize, and control the operations of a cocktail lounge or
                                    bar.</li>
                                <li>Create drink recipes.</li>
                                <li>Order or requisition liquors and supplies.</li>
                                <li>Supervise the work of bar staff and other bartenders.</li>
                                <li>Create cost of beverage and maintain.</li>
                                <li>Responsible to make summary Beverage Consumption of sales and
                                    daily inventory in the end of operational time.</li>
                                <li>Review the Summary Consumption of Sales to date related to the Daily Bar Product Inventory, and directly
                                    report to the Outlet Manager.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Cxt2