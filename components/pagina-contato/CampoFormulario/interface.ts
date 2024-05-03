interface CampoFormularioProps{
    nomeLabel: string;
    tipoInput:string,
    valorInput:string,
    onChangeInput: any,
    htmlFor: string,
    placeholder?:string
}

export type {CampoFormularioProps}