'use client'
import {Button, Modal,ContainModal,HeaderModal,FooterModal, Card, Input, InputGroup} from "@/types/ui_components";
import Navigation from "@/components/common/navigation"
import { useState } from "react";
import Sports from "@/components/common/sportsCard"
import {sports, catPredt, pasos} from "@/types/sports"
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Banner from "@/components/ui/Banner";

export function ButtonInscription(){
    
        const [OpenModal, setModal] = useState(false);
        const handleOpenModal=()=>{
            setModal(true)  ;
        };
        const handleCloseModal=()=>{
            setModal(false);
            setStep(1);
        };


        const [isSport, setSport] = useState<number|null>(null);
        const handleClickSport=(id: number)=>{
            setSport(isSport === id ? (null): (id));
            if(isSport===id){
                setSelectCat(null);
            }else{
                setSelectCat(null);
            }
        };

        const [SelectCat, setSelectCat] = useState<number|null>(null);
        const handleCatChange = (id:number) => {
            setSelectCat(SelectCat === id ? null:id)    
        };
        
        const categoria = sports.find((c=> c.id === isSport));
        const enlistada = categoria?.categoria[0].id;


         const [isHovered, setIsHovered] = useState(false);
        const iconMove = {
            initial: { rotate: 0},
            hover: { 
                rotate: [65,0,180,70],
            },
        };

        const setVariant = {
            entre:{
                x:1000,
                opacity:0,
                trasition: {duration:0.5}
            },
            center:{
                x:0,
                opacity:1,
                trasition: {duration:0.5}
            },
            exit:{
                x:-1000,
                opacity:0,
                trasition: {duration:0.5}
            }
        }        

        const [isSept, setStep] = useState(1);
        const next = () => (setStep(isSept =>isSept+1));
        const prev = () => (setStep(isSept=>isSept-1));

    return(
        <>
            <Banner
                SRC="https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg"
                ALT="banner"
            >
                <>
                    <div className="absolute inset-0 z-10 backdrop-blur-md bg-black/40"/>
                    <section className="flex flex-col space-y-1 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h2 className="sm:text-[1.3rem] title text-center font-bold">Inscríbete en tus eventos deportivos</h2>
                        <div className="gap-5 flex flex-col items-center justify-center size-full">
                            <p className=" text-sm md:text-lg text-center w-sm sm:w-[75%]">Tu pasión por el deporte ahora está a un clic de distancia. Inscribrete de manera rápida y secilla.</p>
                            <Button className="btn-primary h-[3rem] xl:h-[4rem] flex place-items-center group not-hover:gap-0 hover:gap-3 transition-all"
                                onClick={handleOpenModal} 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                ¡Quiero inscribirme!
                                <motion.div className="m-0 group-hover:w-6 h-full relative"
                                    variants={iconMove}
                                    animate={isHovered?'hover':'inicial'}
                                >
                                    <Image
                                        src={'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759090778/seleccion_wlilfg.png'}
                                        alt="pointer"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </motion.div>    
                            </Button>
                        </div>
                    </section>
                </>
            </Banner>

            <section className=" space-y-10 bg-gray-100">
                <section className="flex flex-col p-3 space-y-12 text-black place-content-center place-items-center text-center m-0">
                    <div className="mb-5 place-content-center place-items-center">
                        <h3 className='title text-gray-800'>Optimiza tu Tiempo, Maximiza tu Energía</h3>
                        <p className="text-sm md:text-lg w-sm text-gray-600 text-center">Nuestro proceso de Inscripción esta diseñado para que dediques menos tiempo al papeleo y más a lo que amas: competir y entrenar</p>
                    </div>
                     
                     <div className=" flex flex-col lg:flex-row w-full justify-evenly gap-3">
                        {pasos.map((en)=>(
                            <Card key={en.id} 
                                className=" group block place-items-center place-content-center text-center gap-3 m-0">
                                <motion.div
                                    className=" place-items-center"
                                    animate={{scale:0.9}}
                                    whileHover={{scale:1.0}}
                                    transition={{
                                        duration:0.3,
                                        ease:"easeInOut",
                                    }}
                                >
                                     <div className="transition-all duration-300 ease-in-out ring-blue-200 ring-6 group-hover:ring-10 p-4 bg-univita bg mb-4 w-[9rem] rounded-full overflow-hidden">
                                        <Image
                                            className=" p-2 md:p-0 scale-70"
                                            src={en.img}
                                            alt={en.paso}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{en.id}.{en.paso}</h3>
                                        <p className="text-sm md:text-lg text-gray-600 w-sm">{en.content}</p>
                                    </div>
                                </motion.div>
                            </Card>
                        ))}
                     </div>
                </section>
                <Navigation/>
            </section>

             <Modal state={OpenModal}>
                {OpenModal &&(
                    <ContainModal className="grid-flow-row-dense md:flex md:flex-col text-black size-[95%] space-y-3 overflow-y-auto bg-gray-200">
                        <HeaderModal className="flex-none" onClose={handleCloseModal}>
                            <div className="text-start">
                                <h2 className="ml-5 title">Registro e Inscripción</h2>
                                <p className="ml-5 text-[1.2rem]">completa los pasos para inscribirte.</p>
                            </div>
                        </HeaderModal>
                        
                        <div className="relative flex-grow main-modal  place-content-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                key={isSept}
                                variants={setVariant}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className={` space-y-2 transition-opacity flex flex-col p-2 `}>
                                   
                                    {isSept ===1 &&(
                                        <>
                                            <section className="flex flex-col space-y-5 p-2 shadow rounded-xl bg-gray-100">
                                                <div className="section-title mt-3 flex flex-row gap-2 ml-5">
                                                    <div className="relative size-[64px] bg-publicidad ring-4 ring-unimar rounded-2xl">
                                                        <Image
                                                            className=" absolute inset-0 object-contain p-2"
                                                            src={'/file.svg'}
                                                            alt="lol"
                                                            fill
                                                        />
                                                    </div>
                                                    <div className="text-start">
                                                        <h3 className="text-[1.3rem] font-bold">Paso 1: Elige tu Deporte</h3>
                                                        <p className="text-[1.1rem]">Selecciona la disiplina en la que competirás</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                        <div className="flex flex-wrap p-2 gap-3 place-content-center">
                                                                {sports.map((card)=>(
                                                                    <Sports
                                                                        key={card.id}
                                                                        card={card}
                                                                        className=" w-[8rem] sm:w-[10rem] md:w-[15rem] h-[9rem]"
                                                                        classImg="w-[4rem] md:w-[5rem]"
                                                                        state={isSport === card.id}
                                                                        onClick={()=>handleClickSport(card.id)}
                                                                    />
                                                                ))}
                                                        </div>
                                                </div>
                                            </section>
                                            <section className="flex flex-col space-y-5 p-2 shadow rounded-xl bg-gray-100 transition-all">                                
                                                    <div className="section-title mt-3 flex flex-row gap-2 ml-5">
                                                        <div className="relative size-[64px] bg-publicidad ring-4 ring-unimar rounded-2xl">
                                                            <Image
                                                                className=" absolute inset-0 object-contain p-2"
                                                                src={'/file.svg'}
                                                                alt="lol"
                                                                fill
                                                            />
                                                        </div>
                                                        <div className="text-start">
                                                            <h3 className="text-[1.3rem] font-bold">Paso 2: Elige tu Categoría</h3>
                                                            <p className="text-[1.1rem]">Selecciona la categoria en la que participarás</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="group w-[95%] ml-5 transition-all duration-300 ease-in-out">
                                                            {categoria &&(
                                                                <div className={` flex flex-col gap-2 p-2 rounded-xl transition-all duration-300 w-full sm:w-[75%] md:w-auto bg-gray-300/80 shadow-md mb-3`}>
                                                                {categoria.categoria?.map((cat)=>(
                                                                        <Button
                                                                            key={cat.category} 
                                                                            onClick={()=>handleCatChange(cat.id)}
                                                                            className={`relative flex gap-4 transition-all place-items-center justify-start duration-300 ease-in-out text-[17px] btn 
                                                                                ${SelectCat === cat.id? ' shadow-lg text-white border-[2px] border-univita/70  bg-unimar/95': 
                                                                                    ( SelectCat ===null && cat.id===enlistada)?'border-[2px] border-univita/70  bg-unimar/95 text-white':'scale-98 hover:scale-101 hover:bg-white/50 bg-gray-100 border-[2px] border-univita/25  hover:text-black text-gray-600'}`}
                                                                        >
                                                                            <Image
                                                                                className={` transition-all duration-300 ease-in-out ring-white ring-4 rounded-full `}
                                                                                src={cat.img}
                                                                                width={35}
                                                                                height={35}
                                                                                alt={cat.category}
                                                                            /> 
                                                                            {cat.category}
                                                                            <div className={`absolute top-[35%]  right-6 size-[12px] rounded-full ${SelectCat=== cat.id ? 'ring-gray-400 ring-3 bg-gray-400' :(SelectCat===null && cat.id===enlistada ? 'ring-gray-400 ring-3 bg-gray-400': 'bg-transparent ring-3 ring-unimar' )}`}>
                                                                                <div className={` size-full rounded-full scale-95 ${SelectCat===cat.id? 'border-white border-2 bg-univita':(SelectCat===null && cat.id===enlistada ?'border-white border-2 bg-univita':' bg-gray-100')}`}/>
                                                                            </div>
                                                                        </Button>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            
                                                            {!categoria &&(
                                                                <div className={`flex flex-col gap-2 p-2 rounded-xl transition-all duration-300 w-full sm:w-[75%] md:w-auto bg-gray-300/80 shadow-md mb-3`}>
                                                                    {catPredt.map((cat)=>(
                                                                        <Button
                                                                            key={cat.category} 
                                                                            className={`relative flex gap-4 place-items-center justify-start transition-all duration-300 ease-in-out text-[17px] btn bg-gray-100  text-gray-500 border-[2px] border-univita/25`}
                                                                        >
                                                                            <Image
                                                                                className={`transition-all duration-300 ease-in-out ring-white ring-4 rounded-full `}
                                                                                src={cat.img}
                                                                                width={35}
                                                                                height={35}
                                                                                alt={cat.category}
                                                                            /> 
                                                                            {cat.category}
                                                                            <div className={`absolute  top-[35%]  right-6 size-[12px] rounded-full ${categoria ?'ring-gray-400 ring-3 bg-gray-400':'scale-95 bg-transparent ring-3 ring-unimar'}`}>
                                                                                <div className={` size-full rounded-full scale-95 ${categoria ?'border-white border-2 bg-univita':' bg-gray-100'}`}/>
                                                                            </div>
                                                                        </Button>
                                                                    ))}
                                                                </div>                                        
                                                            )}
                                                        </div>
                                                    </div>
                                            </section>
                                        </>
                                    )}
                                    {isSept ===2 &&(
                                        <>
                                            <section className="flex flex-col space-y-5 py-4 px-3 shadow rounded-xl bg-gray-100">
                                                <div className="section-title mt-3 flex flex-row gap-2 ml-2">
                                                    <div className="relative size-[64px] bg-publicidad ring-4 ring-unimar rounded-2xl">
                                                        <Image
                                                            className=" absolute inset-0 object-contain p-2"
                                                            src={'/file.svg'}
                                                            alt="lol"
                                                            fill
                                                        />
                                                    </div>
                                                    <div className="text-start">
                                                        <h3 className="text-[1.3rem] font-bold">Paso 3: Rellene con la información solicitada</h3>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col space-y-5 p-4 shadow rounded-xl bg-gray-200">
                                                    <p className="text-[1.1rem] font-bold text-start">Información del equipo</p>
                                                        <div className="grid grid-cols-2 p-2 gap-3 place-content-center">
                                                            <div className="text-start space-y-3">
                                                                <InputGroup label="Nombre del equipo" className="" For="nombre">
                                                                    <Input className="input bg-white" name="" type="text"></Input>
                                                                </InputGroup> 
                                                                <InputGroup label="Madriana del equipo" className="" For="nombre">
                                                                    <Input className="input bg-white" type="text"/>
                                                                </InputGroup> 
                                                                <InputGroup label="Color del uniforme" className="" For="nombre">
                                                                    <Input className="input bg-white col-start-3" type="text"/>
                                                                </InputGroup>                                                             
                                                            </div>
                                                            <InputGroup label="Logo del equipo" className="text-start" For="nombre">
                                                                <Input className="hidden" id="sumitFile" type="file" accept="image/*"/>
                                                                <div className=" items-center p-2 mt-2">
                                                                    <label htmlFor="sumitFile" className="flex flex-col  h-full
                                                                         rounded-lg border-2 border-dashed text-unimar bg-white hover:bg-white/60 text-center cursor-pointer
                                                                         font-bold py-1  mb-1 place-items-center justify-center">
                                                                        <div className="relative size-[58px] rounded-2xl">
                                                                            <Image
                                                                                className=" absolute inset-0 object-contain p-2"
                                                                                src={'/file.svg'}
                                                                                alt="lol"
                                                                                fill
                                                                            />
                                                                        </div>
                                                                        <p>Subir un Archivo</p>
                                                                    </label>
                                                                    <p className="text-center">Ningún archivo seleccionado</p>
                                                                </div>
                                                            </InputGroup> 
                                                        </div>
                                                </div>

                                                <div className="flex flex-col space-y-5 p-4 shadow rounded-xl bg-gray-200">
                                                    <p className="text-[1.1rem] font-bold text-start m-0">Información del delegado</p>
                                                    <div className="text-start space-y-3 flex flex-row gap-3 p-2 ">
                                                        <InputGroup label="Correo institucional del delegado" className="w-full" For="nombre">
                                                            <Input className="input bg-white" name="" type="text"></Input>
                                                        </InputGroup> 
                                                        <InputGroup label="Numero del Telefono" className="w-full" For="nombre">
                                                            <Input className="input bg-white" type="text"/>
                                                        </InputGroup>                                                            
                                                    </div>
                                                </div>

                                                <div className="flex flex-col space-y-5 p-4 shadow rounded-xl bg-gray-200">
                                                    <p className="text-[1.1rem] font-bold text-start m-0">Información de los Integrantes del Equipo</p>
                                                    
                                                    <div className="text-start  flex flex-wrap gap-3 p-4 bg-gray-300 rounded-lg ">
                                                        <InputGroup label="Dorsal" className="w-[64px]" For="Dorsal">
                                                            <Input className="input bg-white"id="Dorsal" type="text"></Input>
                                                        </InputGroup> 
                                                        <InputGroup label="Cédula" className="" For="nombre">
                                                            <Input className="input bg-white" name="" type="text"></Input>
                                                        </InputGroup> 
                                                        <InputGroup label="Correo institucional" className="" For="nombre">
                                                            <Input className="input bg-white" name="" type="text"></Input>
                                                        </InputGroup> 
                                                        <InputGroup label="Numero del Telefono" className="" For="nombre">
                                                            <Input className="input bg-white" type="text"/>
                                                        </InputGroup>
                                                        <Button className="flex items-center gap-3 cursor-pointer bg-white p-2 rounded-2xl">
                                                            <div className="relative size-[32px] ring-4 ring-unimar rounded-full">
                                                                <Image
                                                                    className=" absolute inset-0 object-contain p-2"
                                                                    src={'/file.svg'}
                                                                    alt="lol"
                                                                    fill
                                                                />
                                                            </div>
                                                            <p className="text-unimar font-bold">Añadir integrante</p>
                                                        </Button>  
                                                    </div>
                                                </div>
                                                
                                            </section>
                                            
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            

                        </div>

                        <FooterModal className="flex-none" BTmain={isSept > 1 ? 'Inscribirse':'Siguiente'} BTSecond={isSept > 1 ? 'Atras':'Cerrar'} onClose={ isSept > 1? prev: handleCloseModal} onSumit={isSept > 1 ? handleCloseModal : next}/>
                            
                        
                    </ContainModal>
                )}
             </Modal>
        </>
    );
}export default ButtonInscription