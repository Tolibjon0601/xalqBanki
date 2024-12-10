import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiperImg from "../../../assets/icons/swiper_vector1.svg";
import swiperImg2 from "../../../assets/icons/swiper_vector2.svg";
import { Navigation } from 'swiper/modules';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FC } from "react";
const SwiperPage :FC= () => {
  return (
    <div className="flex justify-center mt-[136px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation  >

        <SwiperSlide>
          <div className="flex items-center gap-6 rounded-xl shadow-xl p-[27px] max-w-[446px]">
            <div className="swiper_logo flex items-center gap-2 px-[42px] py-[49px] rounded-[50%] w-[154px] h-[154px]">
              <div className="flex flex-col gap-2">
                <img src={swiperImg} alt="Logo" />
                <img src={swiperImg} alt="Logo" />
              </div>
              <div>
                <img src={swiperImg2} alt="Icon" />
              </div>
            </div>

            <div>
              <h1 className="text-[29px] text-[#053f4] font-normal mb-4">Node JS dev</h1>
              <h2 className="text-[19px] font-normal mb-2">Markaziy apparat</h2>
              <p className="text-[14px] font-normal">
                Maosh: <span className="font-bold">$3000+</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-6 rounded-xl shadow-xl p-[27px] max-w-[446px]">
            <div className="swiper_logo flex items-center gap-2 px-[42px] py-[49px] rounded-[50%] w-[154px] h-[154px]">
              <div className="flex flex-col gap-2">
                <img src={swiperImg} alt="Logo" />
                <img src={swiperImg} alt="Logo" />
              </div>
              <div>
                <img src={swiperImg2} alt="Icon" />
              </div>
            </div>

            <div>
              <h1 className="text-[29px] text-[#053f4] font-normal mb-4">SQL dev</h1>
              <h2 className="text-[19px] font-normal mb-2">Markaziy apparat</h2>
              <p className="text-[14px] font-normal">
                Maosh: <span className="font-bold">$2000+</span>
              </p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex items-center gap-6 rounded-xl shadow-xl p-[27px] max-w-[446px]">
            <div className="swiper_logo flex items-center gap-2 px-[42px] py-[49px] rounded-[50%] w-[154px] h-[154px]">
              <div className="flex flex-col gap-2">
                <img src={swiperImg} alt="Logo" />
                <img src={swiperImg} alt="Logo" />
              </div>
              <div>
                <img src={swiperImg2} alt="Icon" />
              </div>
            </div>

            <div>
              <h1 className="text-[29px] text-[#053f4] font-normal mb-4">JAVA dev</h1>
              <h2 className="text-[19px] font-normal mb-2">Markaziy apparat</h2>
              <p className="text-[14px] font-normal">
                Maosh: <span className="font-bold">$1000+</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPage;
