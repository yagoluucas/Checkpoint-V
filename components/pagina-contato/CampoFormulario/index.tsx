import { CampoFormularioProps } from "./interface";
import './style.css'
export default function CampoFormulario(props: CampoFormularioProps) {
    return (
        <div className="campo-formulario">
            <label htmlFor={props.htmlFor}>{props.nomeLabel}</label>
            <input type={props.tipoInput} value={props.valorInput} onChange={props.onChangeInput} name={props.htmlFor} id={props.htmlFor} placeholder={props.placeholder}/>
        </div>
    )
}