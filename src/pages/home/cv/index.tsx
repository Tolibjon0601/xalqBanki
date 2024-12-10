import cvImg from "../../../assets/images/cv_img.png"
import cvIcon from "../../../assets/icons/sv_icon.svg"
import { FC } from "react"
const CurriculumVitae: FC = () => {
  return (
    <div>
      <div className='pt-[180px]  flex gap-[125px] ' >
        <div className="curriculumImg  items-center">
          <img className=" ml-12  w-[950px] h-[500px]  " src={cvImg}  alt="img" />
        </div>

        <div>

          <h2 className="text-[49px] w-[732px] text-primary font-normal">
            HR portal orqali <span className="text-diagramText">CV </span>topshirish ishga kirish imkonini oshiradi                </h2>
          <p className="mt-7 font-normal w-[650px] text-[22px] text-third">
            Bank o'z salohiyatini barqarorlashtirish, aholining ishonchini qozonish, mamlakat bank xizmatlari bozoridagi o'z mavqei va rolini mustahkamlash uchun barcha sa'y-harakatlarini
          </p>

          <div className="gap-[30px] flex mt-[150px]">
            <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
              <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
                CV  yuborish
              </span>
            </button>

          </div>
        </div>

      </div>
      <div>

        <div className="pt-[171px] flex justify-between items-center">
          <div>   <h1 className="text-[39px] text-[#798194] font-bold">Qaysi filialda ishlamoqchisiz?</h1>
            <div className="flex gap-[27px] mt-[34px]">
            <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
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
              <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
  <span className="absolute inset-x-0 bottom-0 h-0 bg-btnColor transition-all duration-300 group-hover:h-full group-active:bg-btnColor"></span>
  <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
    <select
      id="pet-select"
      className="relative bg-transparent outline-none cursor-pointer text-lg text-primary group-hover:text-white"
    >
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
      Tumanni tanlang
      </option>
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
        Andijon viloyati
      </option>
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
        Buxoro viloyati
      </option>
    </select>
  </span>
</button>
              <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
  <span className="absolute inset-x-0 bottom-0 h-0 bg-btnColor transition-all duration-300 group-hover:h-full group-active:bg-btnColor"></span>
  <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
    <select
      id="pet-select"
      className="relative bg-transparent outline-none cursor-pointer text-lg text-primary group-hover:text-white"
    >
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
        Vakansiyani izlash
      </option>
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
        Andijon viloyati
      </option>
      <option className="text-lg text-optionsText bg-white group-hover:bg-white">
        Buxoro viloyati
      </option>
    </select>
  </span>
</button>

            </div></div>
          <div className="rounded-[14px] customBorder">
            <div className="py-10 px-8 max-w-[530px]">
              <h2 className="text-lg text-optionsText font-bold mb-6">Chirchiq BXM</h2>
              <p className="text-lg text-optionsText font-normal mb-5">Birinchi toifali mutaxassis (Kichik biznes bo’limi)</p>
              <p className="text-lg text-optionsText font-normal mb-3"><span className="font-bold">Talab etiladi:</span> Rus/Ingliz tili, 3+ yil tajriba, Iqtisodiyot yo’nalishida oliy ma’lumot</p>
              <p className="text-lg text-optionsText font-normal mb-6"><span className="font-bold">Maosh:</span> 3.250.000 UZS</p>
              <img src={cvIcon} alt="icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurriculumVitae
