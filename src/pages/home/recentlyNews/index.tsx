import NewsImg1 from "../../../assets/images/lastNewsImg1.png";
import NewsImg2 from "../../../assets/images/lastNewsImg2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FC } from "react";

const LastNews:FC = () => {
  return (
    <div className="pt-[184px]">
      <div className="flex justify-between">
        <h1 className="text-[53px] font-normal text-primary">
          So’ngi <span className="font-bold">Yangiliklar</span>
        </h1>
        <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
          <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
            Barchasini ko’rish
          </span>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        navigation
        className="mt-[130px]"
      >
        <SwiperSlide>
          <div className="max-w-[689px] relative">
            <img src={NewsImg1} alt="Biznes boshqaruvi bo’yicha trening" />
            <button className="py-3 px-6 uppercase text-primary bg-white font-bold absolute top-9 left-9 rounded-xl">Trening</button>
            <div>
              <h2 className="flex text-[29px] text-primary font-medium gap-[100px] items-center mt-9">
                Biznes boshqaruvi bo’yicha trening <span className="text-[19px] text-third">April 17, 2024</span>
              </h2>
              <p className="text-[19px] text-third max-w-[430px] mt-6 mb-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
              </p>
              <a href="#" className="font-normal block uppercase underline text-primary text-[19px] ">Batafsil</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-[689px] relative mb-[126px]">
            <img src={NewsImg2} alt="AJOU UNIVERSITY Graduate" />
            <button className="py-3 px-6 uppercase text-primary bg-white font-bold absolute top-9 left-9 rounded-xl">Ta'lim</button>
            <div>
              <h2 className="flex text-[29px] text-primary font-medium gap-[100px] items-center mt-9">
                AJOU UNIVERSITY Graduate <span className="text-[19px] text-third">May 16, 2024</span>
              </h2>
              <p className="text-[19px] text-third max-w-[430px] mt-6 mb-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
              </p>
              <a href="#" className="font-normal block uppercase underline text-primary text-[19px] ">Batafsil</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LastNews;
