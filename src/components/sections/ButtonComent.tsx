import React,{useState} from "react";
import {Button, Modal, ContainModal, Input, InputGroup, TextArea, HeaderModal, FooterModal} from "@/types/ui_components";
import Image from "next/image";

export default function Comment() {
    const [OpenModal, setModal] = useState(false);

    const handleOpenModal=()=>{
        setModal(true)  
          
    };

    const handleCloseModal=()=>{
        setModal(false)    
    };

    const [isChecked, setIsChecked] = useState("public");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.value);
    };

    return(
        <>
        <div className="relative flex flex-col text-[24px] items-center justify-center space-y-3 p-3 lg:gap-5 shadow-lg drop-shadow-sm rounded-xl bg-gray-50 w-[95%] xl:w-[85%]">
            <div className="flex flex-col lg:w-3/5 space-y-3">
                <h2 className=" text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] font-bold text-center ">¿Listo Para Elevar el nivel de la Experiencia Deportiva?</h2>
                <p className="text-[18px] text-gray-600 text-center ">Queremos crecer contigo. Cada idea, cada comentario y cada experiencia compartida nos ayuda a perfeccionar Univita para que refleje lo mejor de nuestra comunidad universitaria.</p>
            </div>
            <Button onClick={handleOpenModal} className="text-[18px] bg-unimar hover:opacity-90 hover:scale-102 transition-all duration-300 px-5 py-2 text-white rounded-full flex gap-2 items-center">
                    Deja Tu Opinión
                        <Image 
                        className="w-9 h-8"
                        src={'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758905980/flecha-correcta_2_l0zpid.png'}
                        alt={'logo'}
                        width={150}
                        height={150}
                    />
            </Button>

           
        </div>
        <Modal state={OpenModal}>
            {OpenModal &&(
                <ContainModal className="bg-gray-100 relative grid-flow-row-dense space-y-6 w-sm sm:w-xl max-h-90% min-w-80 min-h-72 overflow-y-auto">
                    
                    <HeaderModal onClose={handleCloseModal} className="flex-none text-[1.5rem] font-bold">Buzon de Comentarios</HeaderModal>                            

                    <div className="main-modal flex-grow space-y-3 place-items-center">

                        <div className="Email flex items-center gap-2 md:gap-3 flex-col">
                            <InputGroup For="Email" label="Correo Institucional" labelClass="text-[18px] text-start">
                                <Input id="Email" className="input-text w-[18rem] sm:w-sm text-[18px]" type="text" placeholder="example.1234@unimar.edu.ve"/>
                            </InputGroup>

                            <div className="Seletion flex flex-row space-x-3  w-[18rem] sm:w-sm">
                                <InputGroup For="public" label="Publico" className={`flex flex-row-reverse gap-2 ${isChecked === 'public'? 'text-black':'text-gray-500'}`}>
                                    <Input id="public" type="radio" name="correo" value="public" checked={isChecked === 'public'} onChange={handleChange}/>
                                </InputGroup>

                                <InputGroup For="private" label="Anonimo" className={`flex flex-row-reverse gap-2 ${isChecked === 'private'? 'text-black':'text-gray-500'}`}>
                                    <Input id="private" type="radio" name="correo" value="private" checked={isChecked === 'private'} onChange={handleChange}/>
                                </InputGroup>
                            
                            </div>
                                <span className={`text-[16px] w-[18rem] sm:w-sm text-justify ${isChecked==='public' ? 'flex': 'hidden'}`}>
                                    Su informacion de usuario podra ser vista en la seccion de comentarios
                                </span>

                                <span className={`text-[16px] w-[18rem] sm:w-sm text-justify ${isChecked==='private' ? 'block': 'hidden'}`}>
                                    Su informacion de usuario no sera vista en la seccion de comentarios
                                </span>

                        </div>

                        <div className="Coment flex items-start md:items-center">
                            <InputGroup label="Comentario" For="Coment" labelClass="text-[18px] text-start ">
                                <TextArea id="Coment" className="w-[18rem] sm:w-sm h-[8rem]"/>
                            </InputGroup>
                        </div>

                    </div>

                    <FooterModal BTmain="Enviar" BTSecond="Cerrar" onClose={handleCloseModal} className="flex-none mt-8"/>
                        
                    
                </ContainModal>
            )}
        </Modal>
        </>
    )
}