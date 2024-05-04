'use client'

import CampoFormulario from "@/components/pagina-contato/CampoFormulario"
import { useEffect, useState } from "react"
import '@/style/contato.css'
import BotaoFormulario from "@/components/pagina-contato/BotaoFormulario"
import {infoContatoFomulario} from '@/utils/interface'

export default function Contato() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [isDisabled, setDisabled] = useState(true)

    function changeNome(e: any) {
        setNome(e.target.value)
    }

    function changeTelefone(e: any) {
        setTelefone(e.target.value)
    }

    function changeEmail(e: any) {
        setEmail(e.target.value)
    }

    function enviarInformacoes(e:any) {
        e.preventDefault()
        const info:infoContatoFomulario = {
            nome: nome,
            telefone: telefone,
            email: email
        }    
        console.log(JSON.stringify(info))
        alert(`Informações enviadas com sucesso ${nome}!`)
        setNome('')
        setTelefone('')
        setEmail('')
    }    

    useEffect(() =>{
            if(nome.length <= 2 || telefone.length < 11 || email.length <= 5) {
                setDisabled(true)
            }else {
                setDisabled(false)
            }
    }, [nome, telefone, email])

    return (
        <main className="contato">
            <section>
                <h1>Contato</h1>
                <h2>Preencha os dados para contato</h2>
                <form>
                    <CampoFormulario
                        nomeLabel="Nome:"
                        tipoInput="text"
                        valorInput={nome}
                        htmlFor="nome"
                        onChangeInput={changeNome}
                        placeholder="Digite seu nome completo"
                    />

                    <CampoFormulario
                        nomeLabel="Telefone:"
                        tipoInput="phone"
                        valorInput={telefone}
                        htmlFor="telefone"
                        onChangeInput={changeTelefone}
                        placeholder="Digite seu telefone com DDD"
                    />

                    <CampoFormulario
                        nomeLabel="Email:"
                        tipoInput="email"
                        valorInput={email}
                        htmlFor="telefone"
                        onChangeInput={changeEmail}
                        placeholder="Digite seu email"
                    />
                    <BotaoFormulario disabled={isDisabled} onClick={enviarInformacoes}/>
                </form>       
            </section>
        </main>
    )
}