import Image from "next/image";
import './style.css'
import {CardLojasProps} from './interface'
export default function CardLojas(props: CardLojasProps) {
    return (
        <div className="card-lojas">
            <Image className="img" src={props.img} alt="fachada de loja de carros" width={370} height={300}/>
            <h3>{props.nomeLoja}</h3>
            <p>{props.endereco}</p>
        </div>
    )
}