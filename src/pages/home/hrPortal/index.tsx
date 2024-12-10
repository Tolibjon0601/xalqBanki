
import { FC } from "react";
import ItemImg_1 from "../../../assets/images/portaLimg_1.png";
import ItemImg_2 from "../../../assets/images/portaLimg_2.png";
import ItemImg_3 from "../../../assets/images/portaLimg_3.png";
import ItemImg_4 from "../../../assets/images/portaLimg_4.png";
import ItemImg_5 from "../../../assets/images/portaLimg_5.png";

const PortalPage: FC = () => {
  return (
    <div className="pt-[164px]">
      <ul className="flex-wrap gap-y-[136px] gap-x-[75px] grid grid-cols-3 justify-items-center">

        <li className="ml-[-100px] ">
          <h1 className="text-[22px] uppercase text-diagramText mx-auto w-[180px] flex items-center gap-4">
            HR PORTAL
            <span className="block bg-[#11959f] w-[42px] h-1 mt-1"></span>
          </h1>
          <h2 className="font-semibold text-primary text-[45px] mt-5">Bizning Qadriyatlarimiz</h2>
        </li>
        <li className="flex items-center gap-[34px]">
          <div>
            <img src={ItemImg_1} className="w-[150px] h-[82px]" alt="img" />
          </div>
          <div className="max-w-[363px]">
            <h1 className="text-[26px] text-btnColor font-semibold">Business Consulting</h1>
            <p className="text-[22px] text-secondary mt-5">All types of consulting service It is a
              long established fact that reader.</p>
          </div>
        </li>
        <li className="flex items-center gap-[34px]">
          <div>
            <img src={ItemImg_2} className="w-[150px] h-[82px]" alt="img" />
          </div>
          <div className="max-w-[363px]">
            <h1 className="text-[26px] text-btnColor font-semibold">Market Analysis</h1>
            <p className="text-[22px] text-secondary mt-5">All types of consulting service It is a
              long established fact that reader.</p>
          </div>
        </li>
        <li className="flex items-center gap-[34px]">
          <div>
            <img src={ItemImg_3} className="w-[150px] h-[82px]" alt="img" />
          </div>
          <div className="max-w-[363px]">
            <h1 className="text-[26px] text-btnColor font-semibold">Financial Planning</h1>
            <p className="text-[22px] text-secondary mt-5">All types of consulting service It is a
              long established fact that reader.</p>
          </div>
        </li>
        <li className="flex items-center gap-[34px]">
          <div>
            <img src={ItemImg_4} className="w-[150px] h-[82px]" alt="img" />
          </div>
          <div className="max-w-[363px]">
            <h1 className="text-[26px] text-btnColor font-semibold">Market Analysis</h1>
            <p className="text-[22px] text-secondary mt-5">All types of consulting service It is a
              long established fact that reader.</p>
          </div>
        </li>
        <li className="flex items-center gap-[34px]">
          <div>
            <img src={ItemImg_5} className="w-[150px] h-[82px]" alt="img" />
          </div>
          <div className="max-w-[363px]">
            <h1 className="text-[26px] text-btnColor font-semibold">Trade & Funds</h1>
            <p className="text-[22px] text-secondary mt-5">All types of consulting service It is a
              long established fact that reader.</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PortalPage