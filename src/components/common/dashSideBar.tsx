'use client'
import { HTMLAttributes } from 'react';
import Image from "next/image";
import {Button} from '@/types/ui_components';
import Navigate from '@/components/ui/Router'

type Navigate = (newKey: number) => void;
export interface AsideProps extends HTMLAttributes<HTMLDivElement>{
    onNavigate:Navigate,
    CurrentKey:number
};

export const menu=[
    {id:1, section:'Home', src:'', img:'/hogar.png'},
    {id:2, section:'Normativas', src:'/', img:'/martillo-de-subasta.png'},
    {id:3, section:'Inscripciones', src:'/', img:'/contrato (1).png'},
    {id:4, section:'Eventos y Actividades', src:'/', img:'/calendario (3).png'},
    {id:5, section:'Ofertas Deportivas', src:'/', img:'/etiqueta (1).png'},
    {id:6, section:'Comentarios', src:'/', img:'/insertar-comentario.png'},
]

export default function Aside({onNavigate, CurrentKey, ...props}:AsideProps){

    return(
        <div {...props} >
            <section className='justify-content-center '>
                <div className=' bg-white h-16'>
                    <Image
                    src={'/logounimar-25-aniversario.png'}
                    alt='logo'
                    width={500}
                    height={500}
                    />
                </div>
                <div className=' mt-0.5 px-1 '>
                    {menu.map((aside)=>(
                        <div  key={aside.id} className={`mt-0.5 p-3 flex items-center gap-3 hover:bg-unimar/15 cursor-pointer rounded-lg ${CurrentKey===aside.id?'bg-unimar/15 font-medium text-unimar':' grayscale-95'}`} onClick={()=>onNavigate(aside.id)} >
                                <Image
                                    className='size-8'
                                    src={aside.img}
                                    alt={aside.section}
                                    width={100}
                                    height={100}
                                />
                                <h3>{aside.section}</h3>
                        </div>
                    ))}
                </div>

            </section>
            <section className='absolute bottom-3 left-1 right-1'>
                <Navigate href='/'>
                    <Button className='w-full p-3 flex gap-3 items-center hover:bg-red-200 text-red-700  cursor-pointer text-start rounded-lg '>
                            <Image
                                className='size-8'
                                src={'/cerrar-sesion.png'}
                                alt={'cerrar'}
                                width={100}
                                height={100}
                            />                            
                            Cerrar Sesión
                    </Button>
                </Navigate>
            </section>
        </div>
    );
}