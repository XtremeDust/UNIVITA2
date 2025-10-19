'use client'
import { HTMLAttributes, useState } from 'react';
import Image from "next/image";
import {Button} from '@/types/ui_components';
import Navigate from '@/components/ui/Router'

type Navigate = (newKey: number) => void;
export interface AsideProps extends HTMLAttributes<HTMLDivElement>{
    onNavigate:Navigate;
    CurrentKey:number;
};


export interface Submenu{
    id:number;
    section:string;
    img:string;
    submenu?:Submenu[];
}

export const menu:Submenu[]=[
    {id:1, section:'Home', img:'/hogar.png'},
    {id:2, section:'Normativas', img:'/martillo-de-subasta.png'},
    {id:3, section:'Inscripciones', img:'/contrato (1).png'},
    {id:4, section:'Eventos y Actividades', img:'/calendario (3).png',
        submenu:[   
            {id:41, section:'Actividades generales', img:'/insertar-comentario.png', },
            {id:42, section:'Gestion de Torneos', img:'/insertar-comentario.png', }
        ]
    },
    {id:5, section:'Ofertas Deportivas', img:'/etiqueta (1).png'},
    {id:6, section:'Comentarios', img:'/insertar-comentario.png'},
]

export default function Aside({onNavigate, CurrentKey,...props}:AsideProps){
    const [openSubmenu, setSubmenu] = useState<number | null>(null)
    const handleMenuClick = (id : number, active:boolean) =>{
        if(active){
            setSubmenu(openSubmenu===id? null:id)
        }else{
            onNavigate(id);
            setSubmenu(null);
        }
    }

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
                        <div key={aside.id}>
                            <div className={`mt-0.5 p-3 flex items-center gap-3 hover:bg-unimar/15 cursor-pointer rounded-lg ${CurrentKey===aside.id || aside.submenu?.some(sub => sub.id === CurrentKey) ?'bg-unimar/15 font-medium text-unimar':' grayscale-95'} `} onClick={()=>handleMenuClick(aside.id, !!aside.submenu)} >
                                    <Image
                                        className='size-8'
                                        src={aside.img}
                                        alt={aside.section}
                                        width={100}
                                        height={100}
                                    />
                                    <h3>{aside.section}</h3>
                            </div>

                        {aside.submenu && aside.id===openSubmenu&&(
                            <div className="ml-3 pl-2 pr-2 border-l border-gray-300 space-y-1 mt-1">
                                {aside.submenu.map((sub)=>(
                                    <div key={sub.id} className={`mt-0.5 p-3 flex items-center gap-3 hover:bg-unimar/15 cursor-pointer rounded-lg ${CurrentKey===sub.id?'bg-unimar/15 font-medium text-unimar':' grayscale-95'}`} onClick={()=>onNavigate(sub.id)} >
                                        <Image
                                            className='size-8'
                                            src={aside.img}
                                            alt={sub.section}
                                            width={100}
                                            height={100}
                                        />
                                        <h3>{sub.section}</h3>
                                </div>
                                ))}
                            </div>
                        )}

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