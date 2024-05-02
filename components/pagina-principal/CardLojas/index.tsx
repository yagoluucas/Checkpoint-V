import Image from "next/image";
import {CardLojasProps} from './interface'
export default function CardLojas(props: CardLojasProps) {
    return (
        <div>
            <Image src={props.img} alt="Loja de carros" width={150} height={100}/>
            <h3>{props.nomeLoja}</h3>
            <p>{props.endereco}</p>
        </div>
    )
}