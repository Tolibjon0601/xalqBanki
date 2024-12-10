import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import Vacansy from "./vacancy";

const VacancyPage: FC = () => {
  return <div>
    <div className="flex justify-between  items-center mb-8">
      <h1 className="font-bold text-[26px] uppercase">Vakansiyalar soni: 15</h1>
      <div className="flex items-center gap-2">
        <CiSearch size={30} />
        <input type="text" className="bg-[#D1DFDF] w-[1000px] rounded-s-lg pl-3  h-[46px]" />
      </div>
    </div>
    <p className="font-normal text-[18px] text-[#79838e] mb-9">Batafsil qidirish</p>

    <div className="">
      <ul className="flex gap-8 justify-around bg-[#D1DFDF] pt-[45px] mb-16 rounded-2xl">
        <li >
          <h1 className="text-[21px] text-[#26292e] mb-6">Hudud</h1>
          <button className="group relative inline-block bg-white overflow-hidden border rounded-xl border-[#116c6f] px-7 py-4 focus:outline-none focus:ring">
            <span className="absolute inset-x-0 bottom-0 h-0 bg-btnColor transition-all duration-300 group-hover:h-full group-active:bg-btnColor"></span>
            <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
              <select
                id="pet-select"
                className="relative bg-transparent outline-none cursor-pointer text-lg text-primary group-hover:text-white"
              >
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" >Viloyatni tanlang</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Andijon viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Buxoro viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Fargʻona viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Jizzax viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Xorazm viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Namangan viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Navoiy viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Qashqadaryo viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Samarqand viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Sirdaryo viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Surxondaryo viloyati</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Toshkent viloyati</option>

              </select>


            </span>
          </button>
          <div className="flex items-center gap-2 mt-8 mb-24">
            <input type="checkbox" className="w-5 h-5" />
            <p className="font-normal text-[18px] text-[#79838e]">Nogironligi bo'lgan shaxslar uchun</p>
          </div>

        </li>
        <li >
          <h1 className="text-[21px] text-[#26292e] mb-6">Filial</h1>
          <button className="group relative inline-block bg-white overflow-hidden border rounded-xl border-[#116c6f] px-7 py-4 focus:outline-none focus:ring">
            <span className="absolute inset-x-0 bottom-0 h-0 bg-btnColor transition-all duration-300 group-hover:h-full group-active:bg-btnColor"></span>
            <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
              <select
                id="pet-select"
                className="relative bg-transparent outline-none cursor-pointer text-lg text-primary group-hover:text-white"
              >
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" >Yo'nalishni tanlang</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum.</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum. </option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum. </option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum.   </option>

              </select>


            </span>
          </button>
          <div className="flex items-center gap-2 mt-8 mb-24">
            <input type="checkbox" className="w-5 h-5" />
            <p className="font-normal text-[18px] text-[#79838e]">Staj talab qilinmaydigan ishlar</p>
          </div>

        </li>
        <li >
          <h1 className="text-[21px] text-[#26292e] mb-6">Lavozim turi</h1>
          <button className="group relative inline-block bg-white overflow-hidden border rounded-xl border-[#116c6f] px-7 py-4 focus:outline-none focus:ring">
            <span className="absolute inset-x-0 bottom-0 h-0 bg-btnColor transition-all duration-300 group-hover:h-full group-active:bg-btnColor"></span>
            <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
              <select
                id="pet-select"
                className="relative bg-transparent outline-none cursor-pointer text-lg text-primary group-hover:text-white"
              >
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" >Yo'nalishni tanlang</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum.</option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum. </option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum. </option>
                <option className="text-lg text-optionsText bg-white group-hover:bg-white" > Lorem, ipsum.   </option>
              </select>
            </span>
          </button>
          <div className="flex items-center gap-2 mt-12 "><button className="py-4 px-12 bg-btnColor text-white rounded-xl">Vakansiyani izlash</button>
          </div>
        </li>
      </ul>

    </div>
    <Vacansy/>
  </div>;
};

export default VacancyPage;
