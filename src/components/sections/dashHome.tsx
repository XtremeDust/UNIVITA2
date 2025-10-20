'use client'
import React from "react";
import Image from "next/image";
import { InputGroup, Input, Button } from "@/types/ui_components";
import { useState } from "react";
import Select from "../ui/Select";
import  Table  from '../ui/Table';
import { TableHead, TableHeaderCell } from "../ui/TableHead";
import { TableBody, TableCell, TableRow } from "../ui/TableBody";


export interface currentProps{
    current:number;
}

const titlesdeporte=[
    { id: 1, titulo: "Deporte"},
    { id: 3, titulo: "Inscritos" },
    { id: 2, titulo: "Modo de Juego" },
    {id:4, titulo:"Acciones"},
]

const titlesreglas=[
    {id:1, titulo:"Documento"},
    {id:2, titulo:"Versión"},
    {id:3, titulo:"Fecha de Publicación"},
    {id:4, titulo:"Acciones"},
]

const tablareglas =[
    { id: 1, nombre: "Reglamneto General de Deportes", version:'V2.1', actualizacion: "15/03/2023" },
    { id: 2, nombre: "Normativa de Uso de Instalaciones", version:'V1.1', actualizacion: "01/02/2024" },
]

const titlesreglasdeporte=[
    {id:1, titulo:"Deporte"},
    {id:2, titulo:"Documento"},
    {id:3, titulo:"Última Actualización"},
    {id:4, titulo:"Acciones"},
]

const tablareglasdeporte=[
    { id: 1, nombre: "Inter-Copa", Documento:'Bases del Torneo Interfacultades', actualizacion: "10/09/2025" },
    { id: 2, nombre: "Copa Aniversario Unimar", Documento:'Reglas Especificas Copa Aniversario', actualizacion: "11/05/2025" },
]

const titlesreglasevento=[
    {id:1, titulo:"Evento"},
    {id:2, titulo:"Documento"},
    {id:3, titulo:"Fecha del Evento"},
    {id:4, titulo:"Acciones"},
]

const tablareglasevento=[
    { id: 1, nombre: "Futbol Sala", Documento:'Reglamento Especifico Futbol Sala', FechaE: "Septiembre 2025" },
    { id: 2, nombre: "Baloncesto", Documento:'Reglamento Especifico Futbol Sala', FechaE: "Noviembre 2025" },
]

const tabladeporte=[
    { id: 1, nombre: "Fútbol", inscritos: 120, tipo: "Individual" },
    { id: 2, nombre: "Basquet", inscritos: 80, tipo: "En Grupo" },
    { id: 3, nombre: "Voleibol", inscritos: 50, tipo: "En Duplas" },
]

const titlesofertasdeporte=[
    { id: 1, titulo: "Deporte"},
    { id: 2, titulo: "Modo de Juego" },
    { id: 3, titulo: "Inscritos" },
    { id: 5, titulo: "Estado" },
    {id:4, titulo:"Acciones"},
]

const titlesofertas=[
    { id: 1, titulo: "Deporte"},
    { id: 3, titulo: "Secciones" },
    { id: 2, titulo: "Cupos" },
    {id:4, titulo:"Acciones"},
]


const deporte = [
    {id: 1,title: 'Fútbol Sala',tipo: 'en equipo',inscritos:184,  status:'Activo'},
    {id: 2,title: 'Básquetbol',tipo: 'en equipo',inscritos:50,  status:'Cerrado'},
    {id: 3,title: 'Voleibol',tipo: 'en equipo',inscritos:145, status:'Proximamente' },
    {id: 4,title: 'Béisbol 5',tipo: 'en equipo',inscritos:80 , status:'Activo'},
    {id: 5,title: 'Tenis de Mesa',tipo: 'individual o en duplas',inscritos:105 , status:'Cerrado'},
    {id: 6,title: 'Kickingball',tipo: 'en equipo',inscritos:64, status:'Proximamente'},
    {id: 7,title: 'Karate-Do',tipo: 'individual',inscritos:52 , status:'Activo'},
    {id: 8,title: 'Softbol',tipo: 'en equipo',inscritos:30 , status:'Cerrado'},
    {id: 9,title: 'Pickleball',tipo: 'individual o en duplas',inscritos:24, status:'Proximamente'},
];

const recreativas=[
    {id: 1,title: 'Fútbol Sala', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 2,title: 'Básquetbol', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 3,title: 'Voleibol', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 4,title: 'Béisbol 5', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 5,title: 'Tenis de Mesa', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 6,title: 'Kickingball', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 7,title: 'Karate-Do', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 8,title: 'Softbol', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 9,title: 'Pickleball', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 10,title: 'Orfeon', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 11,title: 'Baile', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 12,title: 'Teatro', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 13,title: 'Oratoria', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 14,title: 'Inteligencia Emocional', seccion:'p-01', cupos:'20/20 (Lleno)'},
    {id: 15,title: 'Ajedrez', seccion:'p-01', cupos:'20/20 (Lleno)'},

]

const titlequipos = [
    {id:1, titulo:"Nombre"},
    {id:2, titulo:"Deporte"},
    {id:3, titulo:"Categoria"},
    {id:4, titulo:"Telefono"},
    {id:5, titulo:"Estados"},
    {id:6, titulo:"Acciones"},
]

const titleintegrantes = [
    {id:1, titulo:"Usuario"},
    {id:2, titulo:"Cedula"},
    {id:4, titulo:"Telefono"},
    {id:3, titulo:"Equipo"},
    {id:5, titulo:"Acciones"},
]

const tablaequipos = [
  {
    "id": 1,
    "nombre": "Las Innombrables",
    "deporte": "Fútbol Sala",
    "categoria": "Masculina",
    "integrantes_total": 3,
    "fecha_inscripcion": "2025-10-10",
    "estatus": "Pendiente",
    "logo_url": "https://url.a.logo/halcones.png",
    "uniforme_color": "Azul y Dorado",
    "delegado": {
      "nombre": "Carlos Mármol",
      "email": "c.marmol@unimar.edu.ve",
      "telefono": "+584121234567",
      "madrina": "María Alegría"
    },
    "integrantes_data": [
      {"dorsal": 12, "cedula": "V-30539519", "email": "w.alas@unimar.edu.ve", "telefono": "+584248090931"},
      {"dorsal": 18, "cedula": "V-27765432", "email": "m.gomez@unimar.edu.ve", "telefono": "+58424..."},
      {"dorsal": 17, "cedula": "V-31246789", "email": "j.silva@unimar.edu.ve", "telefono": "+58424..."},
    ]
  },
  {
    "id": 2,
    "nombre": "Los que la meten?",
    "deporte": "Voleibol",
    "categoria": "Mixta",
    "integrantes_total": 4,
    "fecha_inscripcion": "2025-10-15",
    "estatus": "Rechazado",
    "logo_url": "https://url.a.logo/panteras.png",
    "uniforme_color": "Negro y Rojo",
    "delegado": {
      "nombre": "Elena Gómez",
      "email": "e.gomez@unimar.edu.ve",
      "telefono": "+584149876543",
      "madrina": "Andrea Flores"
    },
    "integrantes_data": [
        {"dorsal": 16, "cedula": "V-31565987", "email": "s.marcano@unimar.edu.ve", "telefono": "+58412..."},
        {"dorsal": 1, "cedula": "V-31485963", "email": "c.marcano@unimar.edu.ve", "telefono": "+58412..."},
        {"dorsal": 8, "cedula": "V-30549874", "email": "a.perez@unimar.edu.ve", "telefono": "+58424..."},
        {"dorsal": 29, "cedula": "V-32587944", "email": "v.gameto@unimar.edu.ve", "telefono": "+58424..."},
    ]
  },
  {
    "id": 3,
    "nombre": "Los Bombasticos",
    "deporte": "Tenis de Mesa",
    "categoria": "Masculino",
    "integrantes_total": 2,
    "fecha_inscripcion": "2025-10-15",
    "estatus": "Aceptado",
    "logo_url": "https://url.a.logo/panteras.png",
    "uniforme_color": "Negro y Rojo",
    "delegado": {
      "nombre": "Elera Gómez",
      "email": "e.gomez@unimar.edu.ve",
      "telefono": "+584149876543",
      "madrina": "Juana Flores"
    },
    "integrantes_data": [
      {"dorsal": 12, "cedula": "V-25945779", "email": "a.taktak@unimar.edu.ve", "telefono": "+58424..."},
      {"dorsal": 8, "cedula": "V-30145785", "email": "d.alarcon@unimar.edu.ve", "telefono": "+58424..."},
    ]
  }
  
];

const titlecoment = [
    {id:1, titulo:"Usuario"},
    {id:2, titulo:"Comentario"},
    {id:4, titulo:"Fecha"},
    {id:3, titulo:"Estado"},
    {id:5, titulo:"Acciones"},
]

const coment = [
    {
        id: 1,
        email: "carlos.marquez@unimar.edu.ve",
        fecha: "2025-10-18T10:30:00Z",
        contenido: "Excelente iniciativa para las inscripciones deportivas. La interfaz de selección de categorías es muy intuitiva.",
        visibilidad: 'Publico',
    },
    {
        id: 2,
        email: "a.nimo@unimar.edu.ve",
        fecha: "2025-10-18T11:45:00Z",
        contenido: "Deberían agregar más deportes de mesa.",
        visibilidad: 'Anonimo',
    },
    {
        id: 3,
        email: "p.gonzalez@unimar.edu.ve",
        fecha: "2025-10-17T15:22:00Z",
        contenido: "Deberían agregar una vista de calendario en el dashboard para ver el cronograma de todos los partidos del mes en una sola pantalla.",
        visibilidad: 'Publico',
    },
    {
        id: 4,
        email: "n.imo.2@unimar.edu.ve",
        fecha: "2025-10-16T09:05:00Z",
        contenido: "El dashboard tarda mucho en cargar al aplicar filtros de fecha. Podrían optimizar la consulta a la base de datos para que sea más rápida.",
        visibilidad: 'Anonimo',
    },
    {
        id: 5,
        email: "maria.perez@unimar.edu.ve",
        fecha: "2025-10-16T18:01:00Z",
        contenido: "¡Me encanta el nuevo diseño! La opción de cerrar sesión es muy visible.",
        visibilidad: 'Publico',
    },
];

 const titleventos=[
    {id:1, titulo:"Evento"},
    {id:2, titulo:"Tipo"},
    {id:3, titulo:"Inscritos"},
    {id:4, titulo:"Fecha"},
    {id:5, titulo:"Estado"},
    {id:6, titulo:"Acciones"},
 ]

 const eventos = [
    {
        "id": 1, 
        "nombre": "Copa Unimar Diciembre 2025",
        "descripcion": "Los mejores de la universidad compiten por la gloria en la cancha.",
        "imagen_url": "https://url.a.imagen/copa-dic.jpg",
        "tipo_evento": "Deportivo",
        "estado": "Próximo",
        "fecha_inicio": "2025-12-15",
        "inscritos": 0,
    },
    {
        "id": 2, 
        "nombre": "Copa Unimar Primavera 2025",
        "descripcion": "La pasión del deporte une a todas las carreras en este emocionante torneo.",
        "imagen_url": "https://url.a.imagen/copa-primavera.jpg",
        "tipo_evento": "Deportivo",
        "estado": "Activo",
        "fecha_inicio": "2025-08-27",
        "inscritos": 184,
    },
    {
        "id": 3,
        "nombre": "Copa Unimar Aniversario 2025",
        "descripcion": "Vive los mejores momentos del torneo de la universidad.",
        "imagen_url": "https://url.a.imagen/copa-aniversario.jpg",
        "tipo_evento": "Deportivo",
        "estado": "Finalizado",
        "fecha_inicio": "2025-04-15",
        "inscritos": 120,
    },
    {
        "id": 4, 
        "nombre": "Copa Unimar Interdisciplinaria 2025",
        "descripcion": "Pon a prueba tu capacidad. Un evento para toda la comunidad universitaria.",
        "imagen_url": "https://url.a.imagen/copa-inter.jpg",
        "tipo_evento": "Deportivo",
        "estado": "Finalizado",
        "fecha_inicio": "2025-10-14",
        "inscritos": 50,
    },
    {
        "id": 5,
        "nombre": "Jornada de Recolección de Firmas",
        "descripcion": "Evento institucional de apoyo a la nueva directiva estudiantil.",
        "imagen_url": "https://url.a.imagen/recoleccion-firmas.jpg",
        "tipo_evento": "General",
        "estado": "Próximo",
        "fecha_inicio": "2025-11-01",
        "inscritos": 0,
    },
    {
        "id": 6, 
        "nombre": "Concurso Fotográfico Universitario",
        "descripcion": "Muestra tu visión de la vida en el campus. Abierto a todas las facultades.",
        "imagen_url": "https://url.a.imagen/concurso-foto.jpg",
        "tipo_evento": "Cultural",
        "estado": "Activo",
        "fecha_inicio": "2025-10-20",
        "inscritos": 35,
    },
    {
        "id": 7, 
        "nombre": "Ceremonia de Grado Septiembre",
        "descripcion": "Acto solemne para los egresados de la promoción 2025-II.",
        "imagen_url": "https://url.a.imagen/grado-sept.jpg",
        "tipo_evento": "General",
        "estado": "Finalizado",
        "fecha_inicio": "2025-09-28",
        "inscritos": 0,
    }
];

const buttons = [
    {id:1, button:"Desacargar", img:"/bandeja-de-descarga.png"},
    {id:2, button:"Editar", img:"/lapiz (1).png"},
    {id:3, button:"Eliminar", img:"/basura (1).png"}
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

                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Reglas Generales</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Regla</h3>
                                        </Button>
                                    </div>

                                    <div className="Filtro flex items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex ">
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>
                                        
                                            <div className="relative">
                                                <Input type="date" id="fecha" className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3" required/>
                                            </div>
                                        
                                    </div>

                                    <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titlesreglas.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tablareglas.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.version}</TableCell>
                                                    <TableCell>{data.actualizacion}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>    
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow">
                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Reglas por deporte</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Regla</h3>
                                        </Button>
                                    </div>

                                    <div className="Filtro flex items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex ">
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>
                                        
                                            <div className="relative">
                                                <Input type="date" id="fecha" className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3" required/>
                                            </div>
                                        
                                    </div>

                                       <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titlesreglasdeporte.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-center font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tablareglasdeporte.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.Documento}</TableCell>
                                                    <TableCell>{data.actualizacion}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table> 
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow ">
                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-bold mb-6">Reglas por evento</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Regla</h3>
                                        </Button>
                                    </div>       

                                    <div className="Filtro flex items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        <div className="relative w-full flex ">
                                            <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                <Image
                                                    className="size-8"
                                                    src={'/lupa.png'}
                                                    alt="buscar"
                                                    width={60}
                                                    height={60}
                                                />
                                            </label>
                                            <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                            
                                                <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                    <Image
                                                        className="size-4"
                                                        src={'/cerca.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </Button>
                                        </div>
                                    </div>
                                    
                                    <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titlesreglasevento.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tablareglasevento.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.Documento}</TableCell>
                                                    <TableCell>{data.FechaE}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>  
                                </div>


                                

                            </section>

                    </div>  
            );
        case 3:
            return(
                    <div className="Case2 overflow-y-auto">

                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <div className="flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Equipos Inscritos</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                                className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Equipo</h3>
                                        </Button>
                                    </div>

                                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row lg:grid lg:grid-cols-2 xl:flex xl:flex-row items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex ">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                    className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                    options={dropdownEstate}
                                                    currentValue={isEstate}
                                                    isOpen={isOpenE}
                                                    setOpen={setIsOpenE} 
                                                    onSelect={handleSelectE}
                                                    placeholder="Seleccione el estado"
                                                />
                                            </div>
                                        
                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                        options={dropdownOptions}
                                                        currentValue={isSelectJ}
                                                        isOpen={isOpenJ}
                                                        setOpen={setIsOpenJ} 
                                                        onSelect={handleSelectJ}
                                                        placeholder="Seleccione el tipo de juego"
                                                />
                                            </div>
                                        
                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                            <Select
                                                    className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                    options={dropdownEstate}
                                                    currentValue={isEstate}
                                                    isOpen={isOpenE}
                                                    setOpen={setIsOpenE} 
                                                    onSelect={handleSelectE}
                                                    placeholder="Seleccione el estado"
                                            />
                                            </div>
                                        
                                    </div>

                                    <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titlequipos.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-center text-center font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tablaequipos.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.nombre}</TableCell>
                                                    <TableCell>{data.deporte}</TableCell>
                                                    <TableCell>{data.categoria}</TableCell>
                                                    <TableCell>{data.integrantes_total}</TableCell>
                                                    <TableCell  className="place-items-center">
                                                        <p  className={`items-center rounded-full p-2 w-40 font-semibold text-gray-950 ${data.estatus==='Aceptado'? ' bg-green-400/50 text-green-800' : (data.estatus==='Rechazado'? 'bg-red-400/50 text-red-800': 'bg-yellow-400/50 text-yellow-800')}`}>
                                                            {data.estatus}
                                                         </p>
                                                    </TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>                               
                                </div>

                            </section>

                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <h3 className="text-2xl font-bold mb-6">Usuarios Inscritos</h3>

                                    <div className="Filtro flex items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex ">
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>
                                    </div>
                                        

                                    <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titleintegrantes.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-center text-center font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {tablaequipos.map((data)=>(
                                                <React.Fragment key={data.id}>
                                                    {data.integrantes_data.map((person)=>(
                                                        <TableRow key={person.dorsal} className="hover:bg-gray-100 text-center">
                                                                <>
                                                                    <TableCell className="font-bold">{person.email}</TableCell>
                                                                    <TableCell>{person.cedula}</TableCell>
                                                                    <TableCell>{person.telefono}</TableCell>
                                                                    <TableCell>{data.nombre}</TableCell>
                                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                                        {buttons.map((btn)=>(
                                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                                <Image
                                                                                    src={btn.img}
                                                                                    alt={btn.button}
                                                                                    width={500}
                                                                                    height={500}
                                                                                />
                                                                            </Button>
                                                                        ))}
                                                                    </TableCell>
                                                                </>
                                                        </TableRow>
                                                    ))}

                                                </React.Fragment>
                                            ))}
                                        </TableBody>
                                    </Table>                                 
                                </div>

                            </section>


                    </div>  
            );
        case 41:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">


                                <div className="bg-white p-6 rounded-lg shadow">

                                    <div className="Titulo flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Actividades Generales y Culturales</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                                <h3 className="font-semibold">Añadir Evento</h3>
                                        </Button>
                                    </div>

                                    <div className="Filtro flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row lg:grid lg:grid-cols-2 xl:flex xl:flex-row items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex col-span-2">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3"
                                                        options={dropdownOptions}
                                                        currentValue={isSelectJ}
                                                        isOpen={isOpenJ}
                                                        setOpen={setIsOpenJ} 
                                                        onSelect={handleSelectJ}
                                                        placeholder="Seleccione el tipo de juego"
                                                />
                                            </div>
                                        
                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3"
                                                        options={dropdownEstate}
                                                        currentValue={isEstate}
                                                        isOpen={isOpenE}
                                                        setOpen={setIsOpenE} 
                                                        onSelect={handleSelectE}
                                                        placeholder="Seleccione el estado"
                                                />
                                                
                                            </div>

                                            <div className="relative w-full md:w-auto col-span-2 bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Input type="date" id="fecha" className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3 " required/>
                                            </div>
                                        
                                    </div>
                                    
                                    <Table className="Tabla w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titleventos.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {eventos.map((data)=>(
                                                <React.Fragment key={data.id}>
                                                    {data.tipo_evento !== 'Deportivo'  &&(
                                                        <TableRow  className="hover:bg-gray-100 text-center">
                                                            <TableCell className="font-bold">{data.nombre}</TableCell>
                                                            <TableCell>{data.tipo_evento}</TableCell>
                                                            <TableCell>{data.inscritos}</TableCell>
                                                            <TableCell>{data.fecha_inicio}</TableCell>
                                                            <TableCell className="place-items-center"><p  className={`rounded-full p-2 w-40 font-semibold text-gray-950 ${data.estado==='Activo'? ' bg-green-400/50 text-green-800' : (data.estado==='Finalizado'? 'bg-red-400/50 text-red-800': 'bg-yellow-400/50 text-yellow-800')}`}>{data.estado}</p></TableCell>
                                                            <TableCell className="space-x-2 flex justify-evenly text-white">
                                                                {buttons.map((btn)=>(
                                                                    <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                        <Image
                                                                            src={btn.img}
                                                                            alt={btn.button}
                                                                            width={500}
                                                                            height={500}
                                                                        />
                                                                    </Button>
                                                                ))}
                                                            </TableCell>
                                                        </TableRow>

                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </TableBody>
                                    </Table>  
                                    

                                </div>


                            </section>

                    </div>  
            );
        case 42:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow">
                                   <div className="flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Torneos Deportivos</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Evento</h3>
                                        </Button>
                                    </div>



                                    <div className="Filtro flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row  items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex col-span-2">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3"
                                                        options={dropdownEstate}
                                                        currentValue={isEstate}
                                                        isOpen={isOpenE}
                                                        setOpen={setIsOpenE} 
                                                        onSelect={handleSelectE}
                                                        placeholder="Seleccione el estado"
                                                />     
                                            </div>                                 

                                            <div className="w-full relative md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl">
                                                <Input type="date" id="fecha" className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3" required/>
                                            </div>
                                        
                                    </div>
                                  
                                   <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titleventos.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {eventos.map((data)=>(
                                                <React.Fragment key={data.id}>
                                                    {data.tipo_evento === 'Deportivo'  &&(
                                                        <TableRow  className="hover:bg-gray-100 text-center">
                                                            <TableCell className="font-bold">{data.nombre}</TableCell>
                                                            <TableCell>{data.tipo_evento}</TableCell>
                                                            <TableCell>{data.inscritos}</TableCell>
                                                            <TableCell>{data.fecha_inicio}</TableCell>
                                                            <TableCell className="place-items-center"><p  className={`rounded-full p-2 w-40 font-semibold text-gray-950 ${data.estado==='Activo'? ' bg-green-400/50 text-green-800' : (data.estado==='Finalizado'? 'bg-red-400/50 text-red-800': 'bg-yellow-400/50 text-yellow-800')}`}>{data.estado}</p></TableCell>
                                                            <TableCell className="space-x-2 flex justify-evenly text-white">
                                                                {buttons.map((btn)=>(
                                                                    <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                        <Image
                                                                            src={btn.img}
                                                                            alt={btn.button}
                                                                            width={500}
                                                                            height={500}
                                                                        />
                                                                    </Button>
                                                                ))}
                                                            </TableCell>
                                                        </TableRow>
    
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </TableBody>
                                    </Table>  
                                    
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow">
                                   <div className="flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Partidos Deportivos</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Evento</h3>
                                        </Button>
                                    </div>

                                    <div className="Filtro flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row  items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex col-span-2">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3"
                                                        options={dropdownEstate}
                                                        currentValue={isEstate}
                                                        isOpen={isOpenE}
                                                        setOpen={setIsOpenE} 
                                                        onSelect={handleSelectE}
                                                        placeholder="Seleccione el estado"
                                                />
                                            </div>                                        

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl relative">
                                                <Input type="date" id="fecha" className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-3 pr-3 py-3" required/>
                                            </div>
                                        
                                    </div>
                                  
                                   <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titleventos.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {eventos.map((data)=>(
                                                <React.Fragment key={data.id}>
                                                    {data.tipo_evento === 'Deportivo'  &&(
                                                        <TableRow  className="hover:bg-gray-100 text-center">
                                                            <TableCell className="font-bold">{data.nombre}</TableCell>
                                                            <TableCell>{data.tipo_evento}</TableCell>
                                                            <TableCell>{data.inscritos}</TableCell>
                                                            <TableCell>{data.fecha_inicio}</TableCell>
                                                            <TableCell className="place-items-center"><p  className={`rounded-full p-2 w-40 font-semibold text-gray-950 ${data.estado==='Activo'? ' bg-green-400/50 text-green-800' : (data.estado==='Finalizado'? 'bg-red-400/50 text-red-800': 'bg-yellow-400/50 text-yellow-800')}`}>{data.estado}</p></TableCell>
                                                            <TableCell className="space-x-2 flex justify-evenly text-white">
                                                                {buttons.map((btn)=>(
                                                                    <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                        <Image
                                                                            src={btn.img}
                                                                            alt={btn.button}
                                                                            width={500}
                                                                            height={500}
                                                                        />
                                                                    </Button>
                                                                ))}
                                                            </TableCell>
                                                        </TableRow>
    
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </TableBody>
                                    </Table>  
                                    
                                </div>

                            </section>

                    </div>  
            );
        case 5:
            return(
                    <div className="Case2 overflow-y-auto">
                            <section className="grid grid-cols-1  space-y-3 lg:space-y-0 lg:gap-6 mb-4">

                                <div className="bg-white p-6 rounded-lg shadow col-span-2 space-y-1">
                                   
                                     <div className="flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Ofertas Deportivas</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Oferta</h3>
                                        </Button>
                                    </div>


                                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                        <div className="relative w-full flex col-span-2">
                                            
                                            <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                <Image
                                                    className="size-8"
                                                    src={'/lupa.png'}
                                                    alt="buscar"
                                                    width={60}
                                                    height={60}
                                                />
                                            </label>
                                            <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                            
                                                <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                    <Image
                                                        className="size-4"
                                                        src={'/cerca.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </Button>
                                        </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                        options={dropdownOptions}
                                                        currentValue={isSelectJ}
                                                        isOpen={isOpenJ}
                                                        setOpen={setIsOpenJ} 
                                                        onSelect={handleSelectJ}
                                                        placeholder="Seleccione el tipo de juego"
                                                />
                                            </div>
                                        

                                        <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                            <Select
                                                    className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                    options={dropdownEstate}
                                                    currentValue={isEstate}
                                                    isOpen={isOpenE}
                                                    setOpen={setIsOpenE} 
                                                    onSelect={handleSelectE}
                                                    placeholder="Seleccione el estado"
                                            />
                                        </div>
                                        
                                    </div>
                                    
                                   <Table className="w-full">
                                        <TableHead className="text-gray-100  bg-unimar">
                                            {titlesofertasdeporte.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {deporte.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.title}</TableCell>
                                                    <TableCell>{data.tipo}</TableCell>
                                                    <TableCell>{data.inscritos}</TableCell>
                                                    <TableCell className="place-items-center"><p  className={`rounded-full p-2 w-40 font-semibold text-gray-950 ${data.status==='Activo'? ' bg-green-400/50 text-green-800' : (data.status==='Cerrado'? 'bg-red-400/50 text-red-800': 'bg-yellow-400/50 text-yellow-800')}`}>{data.status}</p></TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>                                                

                                </div>

                                <div className="bg-white p-6 rounded-lg shadow col-span-2">
                                    <div className="flex justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Ofertas recreativas</h3>
                                        <Button className="bg-unimar flex items-center gap-2 hover:bg-unimar/90 cursor-pointer h-10 text-white rounded-2xl px-4 py-7 md:py-0">
                                            <Image
                                            className="size-5"
                                                src={'/mas.png'}
                                                alt="plus"
                                                width={500}
                                                height={500}
                                            />
                                             <h3 className="font-semibold">Añadir Oferta</h3>
                                        </Button>
                                    </div>

                                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex col-span-2">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>
                                        
                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                        options={dropdownOptions}
                                                        currentValue={isSelectJ}
                                                        isOpen={isOpenJ}
                                                        setOpen={setIsOpenJ} 
                                                        onSelect={handleSelectJ}
                                                        placeholder="Seleccione el tipo de juego"
                                                />
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-6 pr-3 py-3"
                                                        options={dropdownEstate}
                                                        currentValue={isEstate}
                                                        isOpen={isOpenE}
                                                        setOpen={setIsOpenE} 
                                                        onSelect={handleSelectE}
                                                        placeholder="Seleccione el estado"
                                                />
                                            </div>
                                        
                                        
                                    </div>
                                    
                                   <Table className="w-full">
                                        <TableHead className="text-white bg-unimar">
                                            {titlesofertas.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 border-b justify-end font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {recreativas.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                    <TableCell className="font-bold">{data.title}</TableCell>
                                                    <TableCell>{data.seccion}</TableCell>
                                                    <TableCell>{data.cupos}</TableCell>
                                                    <TableCell className="space-x-2 flex justify-evenly text-white">
                                                        {buttons.map((btn)=>(
                                                            <Button key={btn.id} className={`btn rounded-lg cursor-pointer size-14 ${btn.id ===1? 'hover:bg-unimar/10' : (btn.id===2? 'hover:bg-gray-300/50': 'hover:bg-rose-300/50' )}`}>
                                                                <Image
                                                                    src={btn.img}
                                                                    alt={btn.button}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </Button>
                                                        ))}
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


                                    <div className="Filtro flex flex-col md:flex-row items-center mb-6 gap-3 shadow p-3 bg-gray-800/8 rounded-2xl">
                                        
                                            <div className="relative w-full flex ">
                                                
                                                <label htmlFor='buscar' className="h-full place-content-center absolute left-0 px-2 pl-3.5 cursor-pointer rounded-2xl">
                                                    <Image
                                                        className="size-8"
                                                        src={'/lupa.png'}
                                                        alt="buscar"
                                                        width={60}
                                                        height={60}
                                                    />
                                                </label>
                                                <Input type="text" id="buscar" className="bg-gray-50 focus:ring-[1px]  focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl w-full pl-18 pr-3 py-3" placeholder="Buscar" required/>
                                                
                                                    <Button className="h-full items-center px-2 pr-4 absolute right-0 rounded-2xl cursor-pointer ">
                                                        <Image
                                                            className="size-4"
                                                            src={'/cerca.png'}
                                                            alt="buscar"
                                                            width={60}
                                                            height={60}
                                                        />
                                                    </Button>
                                            </div>

                                            <div className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl"       >
                                                <Select
                                                        className="w-full md:w-auto bg-gray-50 focus:ring-[1px] focus:ring-unimar focus:outline-none ring ring-gray-400 shadow-md rounded-2xl pl-6 pr-3 py-3"       
                                                        options={dropdownEstate}
                                                        currentValue={isEstate}
                                                        isOpen={isOpenE}
                                                        setOpen={setIsOpenE} 
                                                        onSelect={handleSelectE}
                                                        placeholder="Seleccione el estado"
                                                /> 
                                            </div>
                                                                                
                                                                                
                                    </div>


                                    <Table className="w-full">
                                        <TableHead className="text-gray-100 bg-unimar">
                                            {titlecoment.map((titulos)=>(
                                                <TableHeaderCell key={titulos.id} className="first:rounded-l-lg last:rounded-r-lg p-4 justify-center text-center font-semibold ">
                                                    {titulos.titulo}
                                                </TableHeaderCell>
                                            ))}
                                        </TableHead>

                                        <TableBody className="bg-white divide-y divide-gray-200">
                                            {coment.map((data)=>(
                                                <TableRow key={data.id} className="hover:bg-gray-100 text-center">
                                                            <TableCell className="font-bold">{data.email}</TableCell>
                                                            <TableCell className="overflow-hidden"><p className="w-sm">{data.contenido}</p></TableCell>
                                                            <TableCell>{data.fecha}</TableCell>
                                                            <TableCell className="place-items-center">
                                                                <p  className={`items-center rounded-full p-2 w-40 font-semibold ${data.visibilidad==='Anonimo'? ' bg-gray-400/50 text-gray-800' : 'bg-blue-400/50 text-blue-800'}`}>
                                                                    {data.visibilidad}
                                                                </p>
                                                            </TableCell>
                                                            <TableCell className="space-x-2 flex justify-evenly text-white">
                                                                {buttons.map((btn)=>(
                                                                    <React.Fragment key={btn.id}>
                                                                        {btn.id===3 &&(
                                                                        <Button  className={`btn rounded-lg cursor-pointer size-14 hover:bg-rose-300/50`}>
                                                                               <Image
                                                                                   src={btn.img}
                                                                                   alt={btn.button}
                                                                                   width={500}
                                                                                   height={500}
                                                                               />
                                                                           </Button>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table> 
                                </div>

                            </section>

                    </div>  
            );
    
        default:
            return(<div>Página no encontrada</div>);
    }
}