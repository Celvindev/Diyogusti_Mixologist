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
                            <div className="card card-compact bg-white w-[280px]">
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
                                    <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Manage bar operations, craft drink recipes, control costs, and oversee daily inventory and sales summaries. Click for more info.</p>
                                    <div className="card-actions justify-end">
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
                                            onClick={() => document.getElementById('hiton').showModal()}
                                        >
                                            More Info
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card card-compact bg-white w-[280px]">
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
                                    <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Lead pre-opening, craft drink recipes, manage costs, and oversee daily operations and inventory. Click for more info.</p>
                                    <div className="card-actions justify-end">
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
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
                                <div className="card card-compact bg-white w-[280px]">
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
                                        <h5 className="font-semibold font-poppins mt-7 text-sm text-[#A68769]">Pool Bar</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">
                                            Oversee new outlet pre-opening, develop drink recipes, manage costs, and handle daily operations, inventory, and purchase orders. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
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
                                <div className="card card-compact bg-white w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/alco.jpg"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Alco Lounge & Grill</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">March 2022 – October 2022</p>
                                        <h5 className="font-semibold font-poppins mt-7 text-sm text-[#A68769]">Cocktail Bar</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Manage cocktail lounge or bar operations, develop drink recipes, oversee inventory and staff, and handle cost and sales summaries. Click for more info</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
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
                                <div className="card card-compact bg-white w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/radi.avif"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Radisson & Convention Center Batam</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">November 2019 – Juni 2021</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Pool Bar</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Prepare bar equipment, maintain cleanliness, manage inventory, and implement FIFO and HACCP standards. Assist with menu development and report to the Outlet Manager. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-6 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('radison').showModal()}
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
                                <div className="card card-compact bg-white w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/anambas.avif"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Bawah Reserve, Anambas, Indonesia</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">March 2018 – April 2019</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Private Island, Resort</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Prepare bar equipment, ensure cleanliness, manage inventory, implement FIFO and HACCP standards, and assist with customer service and order management. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-6 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('anambas').showModal()}
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
                                <div className="card card-compact bg-white w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/kenzy.avif"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Kez’s Bakery & Restaurant, Batam, Indonesia</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">August 2016 – December 2016</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]"></h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Set up the restaurant, inform customers of specials, recommend menu items, manage orders, and handle payments. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('kenzy').showModal()}
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
                                <div className="card card-compact bg-white w-[280px]">
                                    <figure className="overflow-hidden h-[200px]">
                                        <img
                                            src="./assets/harreal.avif"
                                            alt="jiang he chinese restaurant"
                                            className="object-cover h-full w-full"
                                        />
                                    </figure>
                                    <div className="p-2">
                                        <h2 className="font-poppins font-semibold text-xl text-[#071739]">Harmoni One Hotel, Batam, Indonesia</h2>
                                        <p className="font-poppins font-normal text-xs text-[#ff0000]">January 2014 – January 2016</p>
                                        <h5 className="font-semibold font-poppins mt-5 text-sm text-[#A68769]">Harmoni One Hotel</h5>
                                        <p className="mt-2 text-sm font-poppins font-light text-justify text-[#4A6382]">Monitor event setup, execution, and cleanup; arrange items, follow checklists, and report to management. Click for more info.</p>
                                        <div className="card-actions justify-end">
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.8 }}
                                                className="py-2 px-5 w-full   text-white rounded-lg mt-16 font-poppins  bg-[#071739]"
                                                onClick={() => document.getElementById('harmoni').showModal()}
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
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Hilton Maldives Amingiri Resort & SPA</h3>
                    <div className="content">
                        <img src="./assets/aura.webp" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins font-normal text-black text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">AS MIXOLOGIST </h5>
                            <small className="text-xs font-light text-[#ff0000]">December 2023 – March 2024</small>
                            <p className="mt-3 ">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 12 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 84 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs text-black font-normal">
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
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739] ">Marriott Batam Harbour Bay</h3>
                    <div className="content">
                        <img src="./assets/jiang.jpg" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Senior Bartender</h5>
                            <small className="text-xs font-light text-[#ff0000]">October 2022 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 84 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-xs font-normal text-black">
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
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">The Pool Bar</h3>
                    <div className="content">
                        <img src="./assets/poolbar.jpg" className="rounded-box mt-2" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Senior Bartender</h5>
                            <small className="text-xs font-light text-[#ff0000]">January 2023 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 2 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 10 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
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
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Alco Lounge & Grill</h3>
                    <div className="content">
                        <img src="./assets/alco.jpg" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Bar Captainr</h5>
                            <small className="text-xs font-light text-[#ff0000]">January 2023 – October 2023</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 40 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 200 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
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

            <dialog id="radison" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Radisson & Convention Center Batam</h3>
                    <div className="content">
                        <img src="./assets/radi.avif" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Senior Bartender</h5>
                            <small className="text-xs font-light text-[#ff0000]">November 2019 – Juni 2021</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 30 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 210 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Responsible to prepare all the bar equipment & materials during
                                    mise en place, and ensure all the things in the clean condition and
                                    working properly. </li>
                                <li>Responsible to make summary Beverage Consumption of sales and daily inventory in the end of operational time.</li>
                                <li>Implement the FIFO method very well.</li>
                                <li>Incharge to the bar products stock and par-stock maintenance.</li>
                                <li>HACCP implementation on mise en place, during operational, and after operational.</li>
                                <li>Review the Summary Consumption of Sales to date related to the Daily Bar Product Inventory, and directly report
                                    to the Outlet Manager.</li>
                                <li>Assisting the Outlet Manager in terms of beverage menu development.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>

            <dialog id="anambas" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Bawah Reserve, Anambas, Indonesia</h3>
                    <div className="content">
                        <img src="./assets/anambas.avif" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Bar Server & Wine Steward</h5>
                            <small className="text-xs font-light text-[#ff0000]">March 2018 – April 2019</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 20 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 50 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Responsible to prepare all the bar equipment & materials during
                                    mise en place, and ensure all the things in the clean condition and
                                    working properly. </li>
                                <li>Responsible to make summary Beverage Consumption of sales and daily inventory in the end of operational time.</li>
                                <li>Implement the FIFO method very well.</li>
                                <li>Incharge to the bar products stock and par-stock maintenance.</li>
                                <li>HACCP implementation on mise en place, during operational, and after operational.</li>
                                <li>Inform customers about the day’s specials.</li>
                                <li>Offer menu recommendations upon request.</li>
                                <li>Up-sell additional products when appropriate.</li>
                                <li>Communicate order details to the Kitchen Staff.</li>
                                <li>Serve food and drink orders.</li>
                                <li>Deliver checks and collect bill payments.</li>
                                <li>Refilling all the fridges based on the pars.</li>
                                <li>Answering questions and always having suggestions, our Wine Steward will guide guests through the bars &
                                    restaurants offerings different options anytime our guests will like to have some wines.</li>
                                <li>The duty of the Wine Steward to explain the wine list, assist guests with special wines occasions and
                                    recommend items that the bars & restaurants would like to sell more.</li>
                                <li>Maintaining the inventory, informing missing items, supervise all the wines fridges including main store and
                                    chillers area and ensure the other team members are keeping the working areas up to standards, will be the
                                    main duties of the Wine Steward.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>

            <dialog id="kenzy" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Kez’s Bakery & Restaurant, Batam, Indonesia</h3>
                    <div className="content">
                        <img src="./assets/kenzy.avif" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Bar Server</h5>
                            <small className="text-xs font-light text-[#ff0000]">August 2016 – December 2016</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 10 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 100 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Prepare restaurant before opening. </li>
                                <li>Inform customers about the day’s specials.</li>
                                <li>Offer menu recommendations upon request.</li>
                                <li>Up-sell additional products when appropriate.</li>
                                <li>Communicate order details to the Kitchen Staff.</li>
                                <li>Serve food and drink orders.</li>
                                <li>Deliver checks and collect bill payments.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>


            <dialog id="harmoni" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#071739]">Harmoni One Hotel, Batam, Indonesia</h3>
                    <div className="content">
                        <img src="./assets/harreal.avif" className="rounded-box mt-2 object-cover h-full w-full" />
                        <div className="mt-2 font-poppins text-black font-normal text-sm leading-5 ">
                            <h5 className="font-bold text-[#071739]">As Banquet Server</h5>
                            <small className="text-xs font-light text-[#ff0000]">January 2014 – January 2016</small>
                            <p className="mt-3">Restaurant Staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 20 Staff</p>
                            <p>Number of Seats in Outlet &nbsp;&nbsp; : 100 Seats</p>
                            <h5 className="font-bold mt-3">Job Description</h5>
                        </div>
                        <div className="font-poppins text-black text-xs font-normal">
                            <ul className="list-disc list-inside">
                                <li>Monitored before start event, while start event, and After event. </li>
                                <li>Assisted with setup of the banquet hall and tables.</li>
                                <li>Set dining tables according to type of event and service standards.</li>
                                <li>Followed checklists for shift start and end to help with smooth transitions.</li>
                                <li>Arrange & Counting all item need it and put in system BEO and announce to all team following requirement.</li>
                                <li>Report to Management Status of event.</li>
                                <li>Make Summary report after end of event.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Cxt2