import { IoLocationOutline } from 'react-icons/io5'
import { LuClock } from 'react-icons/lu'
import { PiBuilding } from 'react-icons/pi'
import { TfiWallet } from 'react-icons/tfi'
import { PiBag } from "react-icons/pi";
import { FC } from 'react';


const Vacansy: FC = () => {
  return (
    <div>
      <div className="bg-[#fcfcfe] rounded-2xl shadow-sm p-7 border mb-16 border-[#dfe6f4] ">
        <h1 className='font-bold text-2xl mb-4'>Bosh hisobchi</h1>
        <p className='font-semibold text-[16px] mb-6 text-[#26292e] justify-between flex'>Bank tarmoqlari <span className='text-[#79838e]'>Nomzodlar soni 0 ta</span></p>
        <div className=' flex flex-col gap-4  border border-b-[#dfe6f4] p-5 shadow mb-6'>
          <div className='flex items-center justify-between'>

            <div className='flex gap-12'>  <p className='flex items-center gap-2 font-semibold text-[19px]'> <span><IoLocationOutline size={30} color='#5CAA17' /></span>Surxondaryo viloyati , Muzrabot tumani</p>
              <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBuilding size={30} color='#5CAA17' />
              </span>O’zbekiston BXM</p></div>
            <p className='flex items-center gap-2 font-semibold text-[19px]'><span><TfiWallet size={30} color='#5CAA17' />
            </span>2 586 000,00 UZS</p>
          </div>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span>   <LuClock size={30} color='#5CAA17' /></span>To‘liq</p>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBag size={30} color='#5CAA17' />
          </span>2 yillik tajriba
          </p>
          <p className='text-[#79838e] font-semibold text-[19px] '>08 октября 2024</p>

        </div>
        <label
          htmlFor="file-upload"
          className="inline-block w-full text-center mt-4 mb-8 py-3 bg-btnColor uppercase text-white font-semibold text-2xl rounded-lg cursor-pointer "
        >
          cv yuborish
        </label>
        <input
          type="file"
          id="file-upload"
          className="hidden"
        />
      </div>

      <div className="bg-[#fcfcfe] rounded-2xl shadow-sm p-7 border mb-16 border-[#dfe6f4] ">
        <h1 className='font-bold text-2xl mb-4'>Bosh mutaxassis</h1>
        <p className='font-semibold text-[16px] mb-6 text-[#26292e] justify-between flex'>Moliya-iqtisod xoʻjalik faoliyati<span className='text-[#79838e]'>Nomzodlar soni 0 ta</span></p>
        <div className=' flex flex-col gap-4  border border-b-[#dfe6f4] p-5 shadow mb-6'>
          <div className='flex items-center justify-between'>

            <div className='flex gap-12'>  <p className='flex items-center gap-2 font-semibold text-[19px]'> <span><IoLocationOutline size={30} color='#5CAA17' /></span>Surxondaryo viloyati , Muzrabot tumani</p>
              <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBuilding size={30} color='#5CAA17' />
              </span>O’zbekiston BXM</p></div>
            <p className='flex items-center gap-2 font-semibold text-[19px]'><span><TfiWallet size={30} color='#5CAA17' />
            </span>6 086 000,00 UZS</p>
          </div>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span>   <LuClock size={30} color='#5CAA17' /></span>To‘liq</p>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBag size={30} color='#5CAA17' />
          </span>2 yillik tajriba
          </p>
          <p className='text-[#79838e] font-semibold text-[19px] '>08 октября 2024</p>

        </div>
        <label
          htmlFor="file-upload"
          className="inline-block w-full text-center mt-4 mb-8 py-3 bg-btnColor uppercase text-white font-semibold text-2xl rounded-lg cursor-pointer "
        >
          cv yuborish
        </label>
        <input
          type="file"
          id="file-upload"
          className="hidden"
        />
      </div>

      <div className="bg-[#fcfcfe] rounded-2xl shadow-sm p-7 border mb-16 border-[#dfe6f4] ">
        <h1 className='font-bold text-2xl mb-4'>Yetakchi mutaxassis</h1>
        <p className='font-semibold text-[16px] mb-6 text-[#26292e] justify-between flex'>Kichik biznes<span className='text-[#79838e]'>Nomzodlar soni 0 ta</span></p>
        <div className=' flex flex-col gap-4  border border-b-[#dfe6f4] p-5 shadow mb-6'>
          <div className='flex items-center justify-between'>

            <div className='flex gap-12'>  <p className='flex items-center gap-2 font-semibold text-[19px]'> <span><IoLocationOutline size={30} color='#5CAA17' /></span>Surxondaryo viloyati , Muzrabot tumani</p>
              <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBuilding size={30} color='#5CAA17' />
              </span>O’zbekiston BXM</p></div>
            <p className='flex items-center gap-2 font-semibold text-[19px]'><span><TfiWallet size={30} color='#5CAA17' />
            </span>3 785 000,00 UZS</p>
          </div>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span>   <LuClock size={30} color='#5CAA17' /></span>To‘liq</p>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBag size={30} color='#5CAA17' />
          </span>2 yillik tajriba
          </p>
          <p className='text-[#79838e] font-semibold text-[19px] '>08 октября 2024</p>

        </div>
        <label
          htmlFor="file-upload"
          className="inline-block w-full text-center mt-4 mb-8 py-3 bg-btnColor uppercase text-white font-semibold text-2xl rounded-lg cursor-pointer "
        >
          cv yuborish
        </label>
        <input
          type="file"
          id="file-upload"
          className="hidden"
        />
      </div>
      <div className="bg-[#fcfcfe] rounded-2xl shadow-sm p-7 border mb-16 border-[#dfe6f4] ">
        <h1 className='font-bold text-2xl mb-4'>Auditor</h1>
        <p className='font-semibold text-[16px] mb-6 text-[#26292e] justify-between flex'>Moliya-iqtisod xoʻjalik faoliyati<span className='text-[#79838e]'>Nomzodlar soni 0 ta</span></p>
        <div className=' flex flex-col gap-4  border border-b-[#dfe6f4] p-5 shadow mb-6'>
          <div className='flex items-center justify-between'>

            <div className='flex gap-12'>  <p className='flex items-center gap-2 font-semibold text-[19px]'> <span><IoLocationOutline size={30} color='#5CAA17' /></span>Surxondaryo viloyati , Muzrabot tumani</p>
              <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBuilding size={30} color='#5CAA17' />
              </span>O’zbekiston BXM</p></div>
            <p className='flex items-center gap-2 font-semibold text-[19px]'><span><TfiWallet size={30} color='#5CAA17' />
            </span>9 586 000,00 UZS</p>
          </div>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span>   <LuClock size={30} color='#5CAA17' /></span>To‘liq</p>
          <p className='flex items-center gap-2 font-semibold text-[19px]'><span><PiBag size={30} color='#5CAA17' />
          </span>2 yillik tajriba
          </p>
          <p className='text-[#79838e] font-semibold text-[19px] '>08 октября 2024</p>

        </div>
        <label
          htmlFor="file-upload"
          className="inline-block w-full text-center mt-4 mb-8 py-3 bg-btnColor uppercase text-white font-semibold text-2xl rounded-lg cursor-pointer "
        >
          cv yuborish
        </label>
        <input
          type="file"
          id="file-upload"
          className="hidden"
        />
      </div>
    </div>
  )
}

export default Vacansy
