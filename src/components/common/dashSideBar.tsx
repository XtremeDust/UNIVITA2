import { HTMLAttributes } from 'react';
type AsideProps = HTMLAttributes<HTMLDivElement>;
import Image from "next/image";

const menu=[
    {id:1, section:'Home', src:'/', img:'/'},
    {id:2, section:'Normativas', src:'/', img:'/'},
    {id:3, section:'Inscripciones', src:'/', img:'/'},
    {id:4, section:'Eventos y Actividades', src:'/', img:'/'},
    {id:5, section:'Ofertas Deportivas', src:'/', img:'/'},
    {id:6, section:'Cerrar Sesión', src:'/', img:'/'},
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
            <section className='h-full'>
                {menu.map((aside)=>(
                    <div  key={aside.id} className={`px-4 py-3 hover:bg-unimar/15 rounded-lg`}>
                            {aside.section}
                    </div>
                ))}
            </section>
        </div>
    );
}