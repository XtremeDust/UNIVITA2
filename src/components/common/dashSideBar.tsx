'use client'
import { HTMLAttributes } from 'react';
type AsideProps = HTMLAttributes<HTMLDivElement>;
import Image from "next/image";
import {Button} from '@/types/ui_components';
import Navigate from '@/components/ui/Router'

const menu=[
    {id:1, section:'Home', src:'/', img:'/'},
    {id:2, section:'Normativas', src:'/', img:'/'},
    {id:3, section:'Inscripciones', src:'/', img:'/'},
    {id:4, section:'Eventos y Actividades', src:'/', img:'/'},
    {id:5, section:'Ofertas Deportivas', src:'/', img:'/'},
]

export default function Aside({...props}:AsideProps){
    return(
        <div {...props}>
            <section className='border-b-2 border-gray-300'>
                <Image
                src={'/logounimar-25-aniversario.png'}
                alt={''}
                width={600}
                height={600}
            />
            </section>
            <section className=''>
                {menu.map((aside)=>(
                    <div  key={aside.id} className={`px-4 py-3 hover:bg-unimar/15 cursor-pointer rounded-lg`}>
                            {aside.section}
                    </div>
                ))}
            </section>
            <section className='absolute bottom-2 w-full'>
                <Navigate href='/'>
                    <Button className=' px-4 py-3 hover:bg-unimar/95 bg-unimar text-white font-bold cursor-pointer text-start rounded-lg w-[96%]'>
                            Cerrar Sesión
                    </Button>
                </Navigate>
            </section>
        </div>
    );
}