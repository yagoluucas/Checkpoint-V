import { SobreInterface } from "./interface";
import Image from "next/image";
import "./style.css";

function SobreCard ({img, title, descricao}:SobreInterface)
{
    return (
        <div className="sobre-card">
            <Image src={img} alt={title} width={400} height={400}/>
            <h2>{title}</h2>
            <p>{descricao}</p>
            
        </div>
    )
}
export default SobreCard;