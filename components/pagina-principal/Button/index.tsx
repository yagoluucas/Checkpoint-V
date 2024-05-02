import Link from "next/link";
import './style.css'
import {ButtonProps} from './interface'
export default function Button(props: ButtonProps) {
    return (
        <Link className="btn-pagina-principal" href={props.link}>{props.texto}</Link>
    )
}