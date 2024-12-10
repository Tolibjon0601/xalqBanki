import Back from "../../assets/images/back.svg";
import Kon from "../../assets/images/konfirensiya.png";
import Xalq from "../../assets/images/xalq-banki.png";
import Xalq2 from "../../assets/images/xalq2.png";
import Bunyodkor from "../../assets/images/bunyodkor.png";
import Aksiya from "../../assets/images/aksiya.png";
// import Back2 from "../../assets/images/background-of-hero.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { InputMask } from "@react-input/mask";
const NewsPage: any = () => {
  return (
    <div>
      <div className="flex justify-between mb-[91px] mt-[70px]">
        <div className="flex flex-col gap-[19px] w-[393px]  ">
          <img className=" rounded-xl" src={Kon} alt="" />
          <p className="text-[#095052]">
            Lorem Ipsum is simply Lorem Ipsum is simply
          </p>
          <p className="text-[#4d4d4d]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it tstandard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambledo make
          </p>
          {/* <img className="" src={Back2} alt="" /> */}
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[19px] w-[253px]    ">
            <img className=" rounded-sm w-[247px]" src={Xalq} alt="" />
            <p className="text-[#095052] text-xs">
              Lorem Ipsum is simply Lorem Ipsum is simply
            </p>
            <p className="text-[#4d4d4d] text-xs ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
          <div className="flex flex-col gap-[19px] w-[253px]">
            <img className=" rounded-sm w-[247px]" src={Xalq} alt="" />
            <p className="text-[#095052] text-xs">
              Lorem Ipsum is simply Lorem Ipsum is simply
            </p>
            <p className="text-[#4d4d4d] text-xs ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[31px]">
          <div className="flex gap-[26px] items-center">
            <img className="w-[201px] rounded-lg" src={Xalq2} alt="" />
            <div className="flex flex-col gap-[6px] w-[200px]">
              <p className="text-[#095052] text-xs">
                Lorem Ipsum is simply Lorem Ipsum is simply
              </p>
              <p className="text-[#4d4d4d] text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="flex gap-[26px] items-center">
            <img className="w-[201px] rounded-lg" src={Xalq2} alt="" />
            <div className="flex flex-col gap-[6px] w-[200px]">
              <p className="text-[#095052] text-xs">
                Lorem Ipsum is simply Lorem Ipsum is simply
              </p>
              <p className="text-[#4d4d4d] text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="flex gap-[26px] items-center">
            <img className="w-[201px] rounded-lg" src={Xalq2} alt="" />
            <div className="flex flex-col gap-[6px] w-[200px]">
              <p className="text-[#095052] text-xs">
                Lorem Ipsum is simply Lorem Ipsum is simply
              </p>
              <p className="text-[#4d4d4d] text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="flex gap-[26px] items-center">
            <img className="w-[201px] rounded-lg" src={Xalq2} alt="" />
            <div className="flex flex-col gap-[6px] w-[200px]">
              <p className="text-[#095052] text-xs">
                Lorem Ipsum is simply Lorem Ipsum is simply
              </p>
              <p className="text-[#4d4d4d] text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[101px]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          <SwiperSlide>
            <div className=" ml-[17px] w-[390px] flex flex-col gap-[20px] ">
              <img
                className="w-full rounded-lg"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-[#195b5d] text-xl">
                Lorem Ipsum is simply Lorem imply
              </p>
              <p className="">
                {" "}
                but also the leap into electronic typesetting, remaining
                essentially unchan asapopowq qwweas sd
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ml-[17px] w-[390px] flex flex-col gap-[20px] ">
              <img
                className="w-full rounded-lg"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-[#195b5d] text-xl">
                Lorem Ipsum is simply Lorem imply
              </p>
              <p className="">
                {" "}
                but also the leap into electronic typesetting, remaining
                essentially unchan asapopowq qwweas sd
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ml-[17px] w-[390px] flex flex-col gap-[20px] ">
              <img
                className="w-full rounded-lg"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-[#195b5d] text-xl">
                Lorem Ipsum is simply Lorem imply
              </p>
              <p className="">
                {" "}
                but also the leap into electronic typesetting, remaining
                essentially unchan asapopowq qwweas sd
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ml-[17px] w-[390px] flex flex-col gap-[20px] ">
              <img
                className="w-full rounded-lg"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-[#195b5d] text-xl">
                Lorem Ipsum is simply Lorem imply
              </p>
              <p className="">
                {" "}
                but also the leap into electronic typesetting, remaining
                essentially unchan asapopowq qwweas sd
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mb-[71px]  gap-[100px] flex justify-center">
        <div className="flex flex-col gap-[30px] w-[550px]">
          <img className="w-[px] rounded-xl" src={Aksiya} alt="Aksiya" />
          <p className="text-[#095052] text-xl">
            Lorem Ipsum is simply dummy text of the print
          </p>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaiLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electro
          </p>
        </div>
        <div className="flex flex-col gap-[30px] w-[550px]">
          <img className="w-[px] rounded-xl" src={Aksiya} alt="Aksiya" />
          <p className="text-[#095052] text-xl">
            Lorem Ipsum is simply dummy text of the print
          </p>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaiLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electro
          </p>
        </div>
      </div>
      <div className="mb-[49px] flex justify-center gap-[150px]">
        <div className="w-[600px] flex flex-col gap-[47px]">
          <h1 className="text-[#095052] text-2xl">
            Lorem Ipsum is simply dummy text of the print
          </h1>
          <div className="flex gap-[25px] flex-wrap">
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
            <div className="flex flex-col gap-[10px] w-[180px]">
              <img
                className="rounded-xl w-[180px]"
                src={Bunyodkor}
                alt="Bunyodkor"
              />
              <p className="text-xs">he 1500s, when lllasd aw an unknown</p>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img className="w-[500px] " src={Back} alt="" />
          <div className=" flex flex-col gap-[20px] absolute top-[80px] left-[-30px]">
            <p className="text-[#095052] text-xl">
              Lorem Ipsum is simply dummy text of the print
            </p>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[#095052] text-xs font-semibold	">Ism</p>
              <input
                type="text"
                className=" w-[300px] rounded-e rounded-s p-[10px] border-solid border-2 border-[#c2c2c2]"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[#095052] text-xs font-semibold	">Telefon</p>
              <InputMask
                className="w-[300px] rounded-e rounded-s p-[10px] border-solid border-2 border-[#c2c2c2]"
                mask=" (__) ___-__-__"
                replacement={{ _: /\d/ }}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[#095052] text-xs  font-semibold	">
                Savol yoki murojaatingizni yozing:
              </p>
              <textarea className=" w-[400px]  rounded-e rounded-s p-[10px] border-solid border-2 border-[#c2c2c2]"></textarea>
            </div>
            <div className="">
              <button className="rounded-e rounded-s w-[270px] py-[10px] bg-[#095052] text-white cursor-pointer">
                Murojaat yo’llash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
