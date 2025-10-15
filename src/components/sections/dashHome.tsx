'use client'
import Image from "next/image";
import Button from "../ui/Button";
import { InputGroup } from "../ui/InputGroup";
import { useEffect, useState, useRef } from "react";
import {sports} from "@/types/sports"
import Select from "../ui/Select";
import  Table  from '../ui/Table';
import { TableHead, TableHeaderCell } from "../ui/TableHead";
import { TableBody, TableCell, TableRow } from "../ui/TableBody";


export interface currentProps{
    current:number;
}

const titlesdeporte=[
    { id: 1, titulo: "Deporte" },
    { id: 2, titulo: "Modo de Juego" },
    { id: 3, titulo: "Inscritos"},
    { id: 4, titulo: "Acciones"},
]

const tabladeporte=[
    { id: 1, nombre: "Fútbol", inscritos: 120, tipo: "Individual" },
    { id: 2, nombre: "Basquet", inscritos: 80, tipo: "En Grupo" },
    { id: 3, nombre: "Voleibol", inscritos: 50, tipo: "En Duplas" },
]

export const HomeRender=({current}:currentProps)=>{

    const [isSelectJ, setSelectJ] = useState('Todos'); 
    const [isOpenJ, setIsOpenJ] = useState(false);

        const handleSelectJ = (id: number, label:string) => {
        setSelectJ(label);
        setIsOpenJ(false);
    };

    const [isEstate, setSelectE] = useState('Todos'); 
    const [isOpenE, setIsOpenE] = useState(false);

        const handleSelectE = (id: number, label:string) => {
        setSelectE(label);
        setIsOpenE(false);
    };

    const [isEstateE, setSelectEsE] = useState('Todos'); 
    const [isOpenEsE, setIsOpenEsE] = useState(false);

        const handleSelectEsE = (id: number, label:string) => {
        setSelectEsE(label);
        setIsOpenEsE(false);
    };

    const selectTipoJ=[
        {id:1, label:'Individual'},
        {id:2, label:'En Duplas'},
        {id:3, label:'En Grupo'},
    ]

    const estate=[
        {id:1,label:'Activo'},
        {id:2,label:'Pausado'},
    ]

    const estateE=[
        {id:1,label:'Activo'},
        {id:2,label:'Próximo'},
        {id:3,label:'Pasado'},
    ]

    const filteredEstate = estate
    .filter(item => item.label !== isEstate)
    .map(item => ({
        id: item.id,
        label: item.label,
    }));

    const filteredEstateE = estateE
    .filter(item => item.label !== isEstateE)
    .map(item => ({
        id: item.id,
        label: item.label,
    }));
    
    const filteredTipo = selectTipoJ
    .filter(item => item.label !== isSelectJ)
    .map(item => ({
        id: item.id,
        label: item.label,
    }));

    const dropdownOptions= [
        ...(isSelectJ!== 'Todos' ? [{id:0, label: 'Todos'}]:[]),
        ...filteredTipo,
        
    ];

    const dropdownEstateE = [
    ...(isEstateE !== 'Todos' ? [{ id: 0, label: 'Todos' }] : []),
    ...filteredEstateE,
    ];

    const dropdownEstate = [
    ...(isEstate !== 'Todos' ? [{ id: 0, label: 'Todos' }] : []),
    ...filteredEstate,
    ];


    switch (current) {
        case 1:
            return(
                    <div className="Case1 overflow-y-auto">
                            <section>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                                    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between h-32">
                                        <p className="text-gray-500">Atletas Total Inscritos</p>
                                        <p className="text-3xl font-bold">1,250</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between h-32">
                                        <p className="text-gray-500">Ofetas Activas</p>
                                        <p className="text-3xl font-bold">20</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between h-32">
                                        <p className="text-gray-500">Solicitudes Pendientes</p>
                                        <p className="text-3xl font-bold">50</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between h-32">
                                        <p className="text-gray-500">Tasa de inscripción</p>
                                        <p className="text-3xl font-bold text-green-500">1,250</p>
                                        <p className="text-lg text-red-500">850</p>
                                    </div>
                                </div>
                            </section>

                            <section className="grid grid-cols-1 lg:grid-cols-3 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                <h3 className="text-xl font-semibold mb-6">Deportes populares por evento</h3>
                                <div className="grafica">
                                    <div className="grid grid-rows-2">
                                    <div className="flex flex-row justify-between">
                                    <h3 className="text-lg mb-1">Fútbol</h3>
                                    <h3>50%</h3>
                                    </div>
                                    <div className="bg-gray-200 relative shadow-md rounded-4xl overflow-hidden">
                                        <div className="bg-blue-500 absolute inset-0 w-[50%] rounded-3xl"/>
                                    </div>
                                    </div>
                                    <div className="grid grid-rows-2">
                                    <div className="flex flex-row justify-between">
                                    <h3 className="text-lg mb-1">Voleibol</h3>
                                    <h3>23%</h3>
                                    </div>
                                    <div className="bg-gray-200 relative shadow-md rounded-4xl overflow-hidden">
                                        <div className="bg-green-500 absolute inset-0 w-[23%] rounded-3xl"/>
                                    </div>
                                    </div>
                                    <div className="grid grid-rows-2">
                                    <div className="flex flex-row justify-between">
                                    <h3 className="text-lg mb-1">Basquet</h3>
                                    <h3>18%</h3>
                                    </div>
                                    <div className="bg-gray-200 relative shadow-md rounded-4xl overflow-hidden">
                                        <div className="bg-yellow-500 absolute inset-0 w-[18%] rounded-3xl"/>
                                    </div>
                                    </div>
                                    <div className="grid grid-rows-2">
                                    <div className="flex flex-row justify-between">
                                    <h3 className="text-lg mb-1">Otros</h3>
                                    <h3>9%</h3>
                                    </div>
                                    <div className="bg-gray-200 relative shadow-md rounded-4xl overflow-hidden">
                                        <div className="bg-red-500 absolute inset-0 w-[9%] rounded-3xl"/>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow">
                                    <h2 className="text-xl font-bold mb-4">Acciones Rápidas</h2>
                                    <section className="flex flex-col gap-3">

                                    <div className="flex flex-row gap-2 cursor-pointer">
                                        <div className="bg-amber-200 rounded-2xl">
                                        <Image
                                            className="scale-80 size-14"
                                            src={'/calend.png'}
                                            alt=""
                                            width={500}
                                            height={500}
                                        />
                                        </div>
                                        <div>
                                        <h3 className="text-lg font-semibold">Crear un nuevo evento</h3>
                                        <p>Configura los detalles y publica</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2 cursor-pointer">
                                        <div className="bg-blue-200 rounded-2xl">
                                        <Image
                                            className="scale-80 size-14"
                                            src={'/calend.png'}
                                            alt=""
                                            width={500}
                                            height={500}
                                        />
                                        </div>
                                        <div>
                                        <h3 className="text-lg font-semibold">Crear un nuevo evento</h3>
                                        <p>Configura los detalles y publica</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2 cursor-pointer">
                                        <div className="bg-green-200 rounded-2xl">
                                        <Image
                                            className="scale-80 size-14"
                                            src={'/calend.png'}
                                            alt=""
                                            width={500}
                                            height={500}
                                        />
                                        </div>
                                        <div>
                                        <h3 className="text-lg font-semibold">Ver inscripciones recientes</h3>
                                        <p>Revisa las últimas solicitudes</p>
                                        </div>
                                    </div>
                                    </section>

                                </div>

                            </section>

                    </div>  
            );
        case 2:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1  space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow ">
                                    <h3 className="text-2xl font-bold mb-6">Reglas Generales</h3>
                                    
                                    <table className="table-auto md:table-fixed w-full overflow-hidden rounded-md ">

                                        <thead className="">
                                            <tr className="bg-gray-200 border-b text-gray-600 font-bold">
                                            <th className="py-2 px-4 text-left ">Documento</th>
                                            <th className="py-2 px-4 text-left ">Versión</th>
                                            <th className="py-2 px-4 text-left ">Fecha de Publicación</th>
                                            <th className="py-2 px-4 text-left ">Acciones</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="rounded-lg">
                                            
                                            <tr className="border-b border-gray-300">
                                            <td className="py-2 px-4 font-semibold">Dato A1</td>
                                            <td className="py-2 px-4">Dato A2</td>
                                            <td className="py-2 px-4">Dato A3</td>
                                            <td className="py-2 px-4">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="bg-gray-100 border-gray-300 border-b">
                                            <td className="py-2 px-4 font-semibold">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table> 
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow">
                                    <h3 className="text-2xl font-bold mb-6">Reglas por deporte</h3>

                                     <table className="table-auto md:table-fixed w-full overflow-hidden rounded-md ">
                                        <thead className="">
                                            <tr className="bg-gray-200 border-b text-gray-600 font-bold">
                                            <th className="py-2 px-4 border-b text-left">Columna 1</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 2</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 3</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 4</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="">
                                            
                                            <tr className="border-b border-gray-300">
                                            <td className="py-2 px-4 font-semibold">Dato A1</td>
                                            <td className="py-2 px-4">Dato A2</td>
                                            <td className="py-2 px-4">Dato A3</td>
                                            <td className="py-2 px-4">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="bg-gray-100 border-gray-300 border-b">
                                            <td className="py-2 px-4 font-semibold">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table> 
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow ">
                                    <h3 className="text-2xl font-bold mb-6">Reglas por evento</h3>
                                     <table className="table-auto md:table-fixed w-full overflow-hidden rounded-md ">
                                        <thead className="">
                                            <tr className="bg-gray-200 border-b text-gray-600 font-bold">
                                            <th className="py-2 px-4 border-b text-left">Columna 1</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 2</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 3</th>
                                            <th className="py-2 px-4 border-b text-left">Columna 4</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="">
                                            
                                            <tr className="border-b border-gray-300">
                                            <td className="py-2 px-4 font-semibold">Dato A1</td>
                                            <td className="py-2 px-4">Dato A2</td>
                                            <td className="py-2 px-4">Dato A3</td>
                                            <td className="py-2 px-4">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="bg-gray-100 border-gray-300 border-b">
                                            <td className="py-2 px-4 font-semibold">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table> 
                                </div>


                                

                            </section>

                    </div>  
            );
        case 3:
            return(
                    <div className="Case2 overflow-y-auto">

                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Equipos Inscritos</h3>
                                        <Button className="bg-unimar hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4">
                                        + Añadir Equipo
                                        </Button>
                                    </div>

                                    <table className="table-auto md:table-fixed w-full rounded-lg overflow-hidden">                                        
                                        <thead className="text-white bg-unimar">
                                            <tr>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 1</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 2</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 3</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 4</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="odd:bg-unimar  even:bg-unimar/15">
                                            
                                            <tr className="hover:bg-gray-100 odd:bg-unimar/0">
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A1</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A2</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A3</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="hover:bg-gray-100 even:bg-gray-100">
                                            <td className="py-2 px-4">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table>                                
                                </div>

                            </section>

                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <h3 className="text-2xl font-bold mb-6">Usuarios Inscritos</h3>
                                    <table className="table-auto md:table-fixed w-full rounded-lg overflow-hidden">                                        
                                        <thead className="text-white bg-unimar">
                                            <tr>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 1</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 2</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 3</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 4</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="odd:bg-unimar  even:bg-unimar/15">
                                            
                                            <tr className="hover:bg-gray-100 odd:bg-unimar/0">
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A1</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A2</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A3</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="hover:bg-gray-100 even:bg-gray-100">
                                            <td className="py-2 px-4">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table>                                
                                </div>

                            </section>


                    </div>  
            );
        case 4:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">


                                <div className="bg-white p-6 rounded-lg shadow">
                                   <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Eventos</h3>
                                        <Button className="bg-unimar hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4">
                                        + Anadir Evento
                                        </Button>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">

                                        <InputGroup label="Estado" For="select" className="w-[25%]">
                                           <Select
                                                options={dropdownEstateE}
                                                currentValue={isEstateE}
                                                isOpen={isOpenEsE}
                                                setOpen={setIsOpenEsE} 
                                                onSelect={handleSelectEsE}
                                                placeholder="Seleccione el estado"
                                           />
                                           {/*
                                           <p className="mt-4 text-xs text-gray-600">
                                                Deporte actual: {isSelectJ || 'Ninguno'}
                                            </p>
                                            */}

                                        </InputGroup>
                                        
                                    </div>
                                  
                                    <table className="table-auto md:table-fixed w-full rounded-lg overflow-hidden">                                        
                                        <thead className="text-white bg-unimar">
                                            <tr>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 1</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 2</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 3</th>
                                            <th className="py-2 px-4 border-b text-left font-semibold ">Columna 4</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="odd:bg-unimar  even:bg-unimar/15">
                                            
                                            <tr className="hover:bg-gray-100 odd:bg-unimar/0">
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A1</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A2</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A3</td>
                                            <td className="py-2 px-4 border-b border-gray-300">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="hover:bg-gray-100 even:bg-gray-100">
                                            <td className="py-2 px-4">Dato B1</td>
                                            <td className="py-2 px-4">Dato B2</td>
                                            <td className="py-2 px-4">Dato B3</td>
                                            <td className="py-2 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table> 
                                    

                                </div>

                            </section>

                    </div>  
            );
        case 5:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1  space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2 space-y-1">
                                   
                                     <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Ofertas deportivas</h3>
                                        <Button className="bg-unimar hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4">
                                        + Anadir Oferta
                                        </Button>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">

                                        <InputGroup label="Modo de juego" For="select" className="w-[25%]">
                                           <Select
                                                options={dropdownOptions}
                                                currentValue={isSelectJ}
                                                isOpen={isOpenJ}
                                                setOpen={setIsOpenJ} 
                                                onSelect={handleSelectJ}
                                                placeholder="Seleccione el tipo de juego"
                                           />
                                           {/*
                                           <p className="mt-4 text-xs text-gray-600">
                                                Deporte actual: {isSelectJ || 'Ninguno'}
                                            </p>
                                           */}
                                        </InputGroup>

                                        <InputGroup label="Estado" For="select" className="w-[25%]">
                                           <Select
                                                options={dropdownEstate}
                                                currentValue={isEstate}
                                                isOpen={isOpenE}
                                                setOpen={setIsOpenE} 
                                                onSelect={handleSelectE}
                                                placeholder="Seleccione el estado"
                                           />
                                           {/*
                                           <p className="mt-4 text-xs text-gray-600">
                                                Deporte actual: {isSelectJ || 'Ninguno'}
                                            </p>
                                            */}

                                        </InputGroup>
                                        
                                    </div>
                                    
                                   <Table className="w-full">
                                        <TableHead className="text-gray-700  bg-gray-300">
                                            {titlesdeporte.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg py-3 px-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tabladeporte.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.tipo}</TableCell>
                                                    <TableCell>{data.inscritos}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-end text-white">
                                                        <Button className="btn bg-unimar rounded-lg">Ver</Button>
                                                        <Button className="btn bg-gray-400 rounded-lg">Editar</Button>
                                                        <Button className="btn bg-red-400 rounded-lg">Eliminar</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>                                                

                                </div>

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-semibold mb-6">Ofertas recreativas</h3>
                                        <Button className="bg-unimar hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4">
                                        + Anadir Oferta
                                        </Button>
                                    </div>
                                    
                                   <Table className="w-full">
                                        <TableHead className="text-white bg-unimar">
                                            {titlesdeporte.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg py-3 px-4 border-b justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tabladeporte.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.tipo}</TableCell>
                                                    <TableCell>{data.inscritos}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-end text-white">
                                                        <Button className="btn bg-unimar rounded-lg">Ver</Button>
                                                        <Button className="btn bg-gray-400 rounded-lg">Editar</Button>
                                                        <Button className="btn bg-red-400 rounded-lg">Eliminar</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>                                    

                                </div>

                            </section>

                    </div>  
            );
        case 6:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-xl shadow ">
                                 <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comentarios de usuario</h2>
                                    <table className="table-auto md:table-fixed w-full">                                        
                                        <thead className="text-gray-500 bg-gray-200/75">
                                            <tr>
                                            <th className="py-3 px-4 text-left font-bold  first:rounded-l-lg">Usuario</th>
                                            <th className="py-3 px-4 text-left font-bold ">Comentario</th>
                                            <th className="py-3 px-4 text-left font-bold ">Fecha</th>
                                            <th className="py-3 px-4 text-left font-bold last:rounded-r-lg">Accion</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="">
                                            
                                            <tr className="border-b border-gray-300">
                                            <td className="py-3 px-4 font-semibold">Dato A1</td>
                                            <td className="py-3 px-4 ">Dato A2</td>
                                            <td className="py-3 px-4 ">Dato A3</td>
                                            <td className="py-3 px-4 ">Dato A4</td>
                                            </tr>
                                            
                                            
                                            <tr className="border-b border-gray-300">
                                            <td className="py-3 px-4 font-semibold">Dato B1</td>
                                            <td className="py-3 px-4">Dato B2</td>
                                            <td className="py-3 px-4">Dato B3</td>
                                            <td className="py-3 px-4">Dato B4</td>
                                            </tr>
                                        </tbody>                                    
                                    </table> 
                                    <h1 className="mt-3 text-gray-500">Resultados</h1>
                                </div>

                            </section>

                    </div>  
            );
    
        default:
            return(<div>Página no encontrada</div>);
    }
}