import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

const Page: React.FC = () => {
    return (
        <section className="py-4 ">
            <div className="text-white grid grid-cols-1 lg:grid-cols-2 h-[100%] gap-4">
                <div className="flex bg-no-repeat bg-slate-800 bg-cover h-[65dvh] bg-[url('https://images.pexels.com/photos/5119398/pexels-photo-5119398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                    <div className="place-self-center ml-16 leading-5 p-4 duration-200 ease">
                        <h1 className="text-4xl  ">
                            Design <br /> Store X
                        </h1>
                        <p className="text-xl my-2">
                            Your number one stop stop for <br />
                            elegant and modern clothing.
                        </p>
                        <Link href="all-products">
                            <button className="flex gap-2 hover:text-emerald-400 bg-gray-800/95 px-4 py-[0.75rem] mt-4 duration-200 ease">
                                View All Products <CgArrowRight size={23} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex bg-slate-800 bg-center bg-[url('https://images.pexels.com/photos/6627104/pexels-photo-6627104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] p-5 ">
                        <div className="place-self-center">
                            <h1 className="text-2xl">Mens</h1>
                            <p className="text-xl my-2">
                                Menswear
                                <br />
                                Browse Shirts / Trousers / Shoes
                            </p>
                            <Link href="all-products">
                                <button className="flex gap-2 hover:text-emerald-400 bg-gray-800/95 px-4 py-[0.75rem] mt-4 duration-200 ease">
                                    View All Products <CgArrowRight size={23} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex bg-slate-800 bg-center bg-[url('https://images.pexels.com/photos/5886045/pexels-photo-5886045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] p-5
                    ">
                        <div className="place-self-center">
                            <h1 className="text-2xl">Womans</h1>
                            <p className="text-xl my-2">
                                Womenswear
                                <br />
                                Browse Shirts / Trousers / Shoes
                            </p>
                            <Link href="all-products">
                                <button className="flex gap-2 hover:text-emerald-400 bg-gray-800/95 px-4 py-[0.75rem] mt-4 duration-200 ease">
                                    View All Products <CgArrowRight size={23} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex bg-slate-700 bg-cover col-span-2 bg-[url('https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                        <div className="place-self-center p-5">
                            <h1 className="text-2xl">Jewelry</h1>
                            <p className="text-xl my-2">Browse Rings / Bracelets / Necklaces / Earrings</p>
                            <Link href="all-products">
                                <button className="flex gap-2 hover:text-emerald-400 bg-gray-800/95 px-4 py-[0.75rem] mt-4 duration-200 ease">
                                    View All Products <CgArrowRight size={23} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
