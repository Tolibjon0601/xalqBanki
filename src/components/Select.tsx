import { FC } from "react";
import { ComponentChildrenProps } from "../types";
const uzbekistanRegions: string[] = [
  "Hududni tanlang",
  "Andijon",
  "Buxoro",
  "Farg'ona",
  "Jizzax",
  "Xorazm",
  "Namangan",
  "Navoiy",
  "Qashqadaryo",
  "Qoraqalpog'iston Respublikasi",
  "Samarqand",
  "Sirdaryo",
  "Surxondaryo",
  "Toshkent",
  "Toshkent Shahri",
];

const Select: FC<ComponentChildrenProps> = () => {
  return (
    <div className=" select  w-full bg-[#0950521A] rounded-xl px-[70px] py-[45px]">
      <div className="flex gap-[95px]">
        <div>
          <h2 className="font-semibold text-lg mb-6">Hudud</h2>
          <select>
            {uzbekistanRegions.map((region, i) => (
              <option key={i} value={region}>
                {region}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-4 mt-5">
            <input type="checkbox" />
            <h2 className="text-[#6B7280] text-xl">
              Nogironligi bo’lgan shaxslar uchun
            </h2>
          </div>
        </div>
        <div>
          {" "}
          <h2 className="font-semibold text-lg mb-6">Filial</h2>
          <select>
            <option value="Filialni tanlang">Filialni tanlang</option>
            {uzbekistanRegions.map((region, i) => (
              <option key={i} value={region}>
                {region} filliali
              </option>
            ))}
          </select>
          <div className="flex items-center gap-4 mt-5">
            <input type="checkbox" />
            <h2 className="text-[#6B7280] text-xl">
              Staj talab qilinmaydigan ishlar
            </h2>
          </div>
        </div>
        <div>
          {" "}
          <h2 className="font-semibold text-lg mb-6">Yo’nalish turi</h2>
          <select>
            <option value="Yo’nalishni tanlang">Yo’nalishni tanlang</option>
            <option value="Kassir">Kassir</option>
            <option value="Bosh Hisobchi">Bosh Hisobchi</option>
            <option value="Dasturchi">Dasturchi</option>
            <option value="Oshpaz">Oshpaz</option>
          </select>
          <button className="text-3xl px-8 py-4 text-white rounded-xl mt-7 bg-[#095052]">
            Vakansiyani Izlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
