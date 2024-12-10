import { FC } from "react";
import footerLogo from "../../assets/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import appStore from "../../assets/icons/appstore_img.png";
import googlePlay from "../../assets/icons/google_play_img.png";
import { FaPhone } from "react-icons/fa6";

const Footer: FC = () => {
  return <div className="bg-btnColor px-[100px] mx-auto pb-10 ">
<img src={footerLogo} className="pt-24 mb-[46px]" alt="" />
<hr  className="bg-white mb-[45px] max-w-[1440px] mx-auto"/>
<ul className="flex  justify-between mb-4 ">
<li className="flex flex-col gap-7">
<h1 className="font-bold text-[23px] text-white ">Bank haqida </h1>
<a href="#" className="text-[23px] text-white font-normal underline">Bank Tarixi</a>
<a href="#" className="text-[23px] text-white font-normal ">Qadriyatlarimiz</a>
<a href="#" className="text-[23px] text-white font-normal underline">Rahbariyat - Xodimlar</a>
<a href="#" className="text-[23px] text-white font-normal ">Aloqa</a>
</li>

<li className="flex flex-col gap-7">
<h1 className="font-bold text-[23px] text-white capitalize">HR</h1>
<p className="font-normmal  text-white capitalize text-[23px]" >Vakansiyalar</p>
<p className="font-normmal  text-white capitalize text-[23px]" >Stajyorlar uchun</p>
<p className="font-normmal  text-white capitalize text-[23px]" >Yo’riqnoma</p>
<p className="font-normmal  text-white capitalize text-[23px]" >FAQ</p>
</li>
<li className="flex flex-col gap-7">
<a href="#" className="px-5 py-2 border-[#b1b1b1] border text-center  inline-block  font-normmal  text-white">Bank bilan bog'lanish</a>
<p className="font-normmal  flex items-center  gap-2 text-white capitalize text-[23px]" ><FaPhone />1106, +99871 210-20-02</p>
<div className="flex items-center gap-10"><p className="font-normmal  text-white capitalize text-[23px]" >info@xb.uz</p>
  <button className="px-5 py-2 border border-[#b1b1b1]  inline-block  font-normmal  text-white text-center">Murojaat yuborish</button></div>
<div className="flex items-center gap-5 ">
<FaFacebookF  size={45} color="white"  />
<FaTelegramPlane  size={45} color="white" />
<FaInstagram  size={45} color="white" />
<BsYoutube size={45} color="white"  />


</div>
</li>
<li>
  <img className="mb-4" src="	https://xb.uz/_next/static/media/xazna-white.abab55da.svg" alt="" />
  <img src={appStore} alt="" />
  <img src={googlePlay} alt="" />


</li>


</ul>


<hr  className="bg-white mb-[45px]"/>
<div className="flex items-center justify-between">
  <p className="capitalize font-medium text-white text-[18px]">100096, Toshkent sh., Chilonzor tumani, Qatortol ko‘chasi, 46-uy. Barcha huquqlar himoyalangan. Saytdan olingan <br />ma'lumotlardan foydalanganda veb-saytga havola ko‘rsatish shart. Oxirgi yangilangan sana 09.22.2024 yil.</p>
  <p className="capitalize font-medium text-white text-[18px]">Copyright © 2024 - Xalq bank HR portal</p>
</div>
  </div>;
};

export default Footer;
