import { FC } from "react";
import img from "../../assets/images/Group 45.png";
const ContactPage: FC = () => {
  return (
    <div className="mt-[50px]  bg-[#D9D9D933] text-[#095052] w-[100%] h-[730px] rounded-[10px]">
      <div className="p-9 flex justify-center">
        {/* <h1 className="text-[20px] font-bold">Bog’lanish uchun</h1>
      <br /> */}

        <div className="w-[50%] h-[670px]">
          <h2 className="text-[18px] font-bold">Manzil:</h2>
          <p className="text-[18px]  mt-4">
            100096, Toshkent sh., Chilonzor tumani, Qatortol <br /> ko‘chasi,
            46-uy.
          </p>
          <h2 className="text-[18px] font-bold mt-4">Mo‘ljal:</h2>

          <p className="text-[18px]">Qatortol bozori</p>
          <p className="text-[18px]">Matbuot xizmati bilan bog'lanish:</p>
          <p className="text-[18px] mt-4">(+998) 90 028 11 55</p>

          <h2 className="text-[18px] mt-4 font-bold">Murojaatlar uchun:</h2>

          <a
            className="text-[18px] mt-4"
            href="https://t.me/Xalq_banki_Community_Manager"
          >
            Xalq_banki_community_manager
          </a>

          <p className="text-[18px] mt-4 font-bold">E-mail:</p>

          <a className="text-[18px] mt-4" href="https://xb.uz/">
            press@xb.uz
          </a>

          <h2 className="text-[18px] mt-4 font-bold">Fax:</h2>

          <p className="text-[18px] mt-4">(+998) 78 120-17-03</p>

          <h2 className="text-[18px] mt-4 font-bold">Ish vaqti:</h2>

          <p className="text-[18px] mt-4">
            Dushanba — Juma 9:00 dan 18:00 gacha.
          </p>

          <h2 className="text-[18px] mt-4 font-bold">Tushlik vaqti:</h2>

          <p className="text-[18px] mt-4">13:00 dan 14:00 gacha</p>
        </div>
        <div className="w-[50%] h-[670px]">
          <div className="relative">
            <img
              className="w-[450px] h-[450px] top-[200px] left-[130px] absolute"
              src={img}
              alt=""
            />
            <div className="w-[450px] h-[450px] top-[200px] left-[130px] absolute">
              <h1 className="text-[30px] mt-4 font-bold">
                Murojaat yo’llash uchun
              </h1>

              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                >
                  Ism
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                >
                  Telefon
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Savol yoki murojaatingizni yozing:
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <br />
              <button className="bg-[#095052] w-60 h-10 rounded text-white">
                Murojaat yo’llash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
