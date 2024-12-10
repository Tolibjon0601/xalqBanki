import { FC } from "react";
import { ComponentChildrenProps } from "../../types";
import Select from "../../components/Select";
import internHeroImg from "../../assets/images/intern-hero-img.png";
import InternMainBg from "../../assets/images/intern-vacancy-img.png";
const InterPage: FC<ComponentChildrenProps> = () => {
  return (
    <section className="intern">
      <h1 className="font-medium text-[98px] text-[#065056]">STAJIROVKA</h1>
      <div className="flex items-center gap-3">
        <div className=" h-[500px]  rounded-[20px] intern-hero-left  p-5 px-8 max-w-[600px]">
          <h2 className="font-bold text-[30px] mt-[40px] mb-[31px] text-[#898989] tracking-normal">
            Stajirovka
          </h2>
          <p className="font-normal text-[16px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptates unde facilis animi cum magni dolorum odio reprehenderit
            accusamus numquam ipsa quis magnam nisi consequatur nobis, velit
            dignissimos modi est assumenda. Quasi quod quaerat itaque expedita
            quidem fugiat minus minima debitis pariatur veniam! Ipsa obcaecati
            dignissimos qui nostrum cupiditate modi voluptas, saepe nesciunt,
            voluptatem quis fugiat sed error nam necessitatibus! Dolores
            expedita rem aliquid atque molestiae omnis maxime, minus natus ad
            magni. Nesciunt eos eveniet amet magni! Porro fuga nemo adipisci
            itaque, similique optio iure vero vel enim! Delectus quos voluptas
            veniam minus possimus, eum est ipsum reiciendis quae sint.
            necessitatibus! Dolores expedita rem aliquid atque molestiae omnis
            maxime, minus natus ad magni. Nesciunt eos eveniet amet magni! Porro
          </p>
        </div>
        <div>
          <img className="h-[508px]" src={internHeroImg} alt="" />
        </div>
      </div>
      <div className=" rounded-md mt-24 intern-main max-w-full w-full mx-auto p-5">
        <h2 className="font-bold text-[30px] mt-[40px] mb-[31px] text-[#898989] tracking-normal">
          Stajirovka
        </h2>
        <Select />
        <div className="w-full relative  bg-[#0950521A] mt-4 rounded-xl h-[586px]">
          <img className="absolute top-10 right-4 " src={InternMainBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default InterPage;
