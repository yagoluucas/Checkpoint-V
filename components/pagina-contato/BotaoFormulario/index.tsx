import './style.css';
import { BotaoFormularioProps } from './interface';
export default function BotaoFormulario(props: BotaoFormularioProps) {
    return (
        <button onClick={props.onClick} disabled={props.disabled} className="botao-formulario">Enviar</button>
    )
}    