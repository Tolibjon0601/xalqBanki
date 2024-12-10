import { FC } from "react";
import { ComponentChildrenProps } from "../../types";
import heroImg from "../../assets/images/hero_img.png";
import PortalPage from "./hrPortal";
import CurriculumVitae from "./cv";
import Work from "./work";
import SwiperPage from "./swiper";
import LastNews from "./recentlyNews";

const HomePage: FC<ComponentChildrenProps> = () => {
    return (
        <>
            <div className="pt-[70px] flex gap-5 relative">

                <div>
                    <h1 className="text-primary text-lg font-normal">Biz o’zbekistonning #1 bankimiz</h1>
                    <h2 className="text-[98px] max-w-[720px] text-primary mt-[23px] font-medium">
                        Karyerangizni #1 Bank bilan quring
                    </h2>
                    <p className="mt-6 font-normal max-w-[530px] text-xl text-third">
                        Аksiyadorlik tijorat Xalq banki – O‘zbekiston hududida tashkil etilgan birinchi bank bo‘lib, 1,5 asrlik tarixga ega. Toshkentda 1875-yil 15-may.
                    </p>

                    <div className="gap-[30px] flex mt-[25px]">
                        <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
                            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
                            <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
                                CV TOPSHIRISH
                            </span>
                        </button>

                        <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-9 py-4 focus:outline-none focus:ring">
                            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
                            <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
                                Vakansiyalar
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hero_right relative">
                    <img src={heroImg} alt="Hero" />

                    <div className="w-[308px] bg-white z-[-1] rounded-xl p-6 shadow-cardShadow px-[34px] absolute bottom-[-5px]  left-[-140px]">
                        <h2 className="py-6 text-third text-3xl border-b-2 border-custom-gray">
                            Vakansiyalar
                        </h2>
                        <p className="text-third flex flex-col mt-6">
                            <span className="text-[30px] text-primary">80%</span>
                            BXM larda
                        </p>
                        <p className="text-third flex flex-col mt-6 pb-[34px]">
                            <span className="text-[30px] text-primary">20%</span>
                            Bosh ofisda
                        </p>
                    </div>

                    <div className="w-[394px] bg-white rounded-xl p-6 shadow-cardShadow px-[34px]  absolute right-[-100px] bottom-0 ">
                        <h2 className="py-6 text-third text-3xl border-b-2 border-custom-gray">
                            Xodimlar soni
                        </h2>
                        <div>
                            <ul className="flex space-x-4 items-end">
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[66px]"></h1>
                                    <h2 className="text-lg text-diagramText">3k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[108px]"></h1>
                                    <h2 className="text-lg text-diagramText">4k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[97px]"></h1>
                                    <h2 className="text-lg text-diagramText">3.9k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[93px]"></h1>
                                    <h2 className="text-lg text-diagramText">3.8k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[104px]"></h1>
                                    <h2 className="text-lg text-diagramText">5k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-primary rounded-xl h-[125px]"></h1>
                                    <h2 className="text-lg text-diagramText">6.5k</h2>
                                </li>
                                <li className="flex flex-col items-center">
                                    <h1 className="w-9 bg-diagramText rounded-xl h-[157px]"></h1>
                                    <h2 className="text-lg text-diagramText">8k</h2>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <SwiperPage />
            <PortalPage />
            <CurriculumVitae />
            <Work />
            <LastNews />
        </>
    );
};

export default HomePage;
