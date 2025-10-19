import React, { HTMLAttributes } from 'react';
import Image from "next/image";
import Avatar from '../ui/Avatar';
import {menu, Submenu, AsideProps} from "@/components/common/dashSideBar"
import { view } from 'framer-motion/client';


interface HeaderProps extends HTMLAttributes<HTMLDivElement>{
  CurrentKey:number
};

export default function Header({CurrentKey,...props}:HeaderProps){

  

  let activeItem: Submenu | undefined = menu.find(item => item.id === CurrentKey);

  if (!activeItem) {
      menu.map(item => {
          if (item.submenu) {
              const subItem = item.submenu.find(sub => sub.id === CurrentKey);
              if (subItem) {
                  activeItem = subItem;
              }
          }
      });
  }

    return(
        <div {...props}>

          <div className='flex flex-row place-items-center justify-between py-4 px-6 w-full'>
                {activeItem?.id &&(
                    <h1 className={`text-3xl font-bold`}>{activeItem.section}</h1>
                  )}

            <section className='flex  flex-row items-center gap-4'>
              <div className='size-6'>
                <Image
                  src={'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759070639/el-sonar_cgjz7t.png'}
                  alt=''
                  width={500}
                  height={500}
                />
              </div>
              
              <div className={`size-12 rounded-full overflow-hidden flex place-content-center-safe items-center text-white font-semibold bg-gray-500 ring-gray-400`}> {/*bg-univita*/}
                  <Avatar email={'Walas.9519@unimar.edu.ve'}/>                      
              </div>
            </section>

          </div>
        </div>
    );
}