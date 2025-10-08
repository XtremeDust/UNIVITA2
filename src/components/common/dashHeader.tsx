import { HTMLAttributes } from 'react';
import Image from "next/image";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({...props}:HeaderProps){
    return(
        <div {...props}>
           Home
        </div>
    );
}