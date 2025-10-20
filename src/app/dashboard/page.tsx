'use client'
import Header from "@/components/common/dashHeader";
import Aside from "@/components/common/dashSideBar";
import AsideMobile from "@/components/common/dashSideBarMobile";
import Footer from "@/components/common/dashFooter";
import {HomeRender} from "@/components/sections/dashHome";
import { useState } from "react";

export default function Dasboard() {
   const [currentView, setCurrentView] = useState(1);
   
   const handleChange = (newKey: number) => {
     setCurrentView(newKey);
   };

  return (
    <div className="grid  lg:grid-cols-[auto_1fr] min-h-dvh bg-gray-200">

      
      <Aside onNavigate={handleChange} CurrentKey={currentView}
       className="w-64 text-black text-text-light dark:text-text-dark  flex-col shadow-l relative hidden lg:flex"
       />

       <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-2xl z-40 lg:hidden">
                <AsideMobile onNavigate={handleChange} CurrentKey={currentView}
                className="w-64 text-black text-text-light dark:text-text-dark  flex-col shadow-l relative hidden lg:flex"
                />
            </nav>

      <section className="grid grid-rows-[auto_1fr_auto]">
      <Header CurrentKey={currentView} className="shadow-sm h-16 bg-unimar w-full flex "/>

        <main className="p-6 md:p-8 bg-gray-100 md:col-auto text-black ">
          <HomeRender current={currentView}/>
        </main>

      <Footer className=" bg-white p-3 text-sm text-gray-500 text-center border-t border-gray-200"/>
      </section>

    </div>
  );
}
