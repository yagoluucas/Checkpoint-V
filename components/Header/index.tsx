'use client'
import Image from "next/image";
import Link from "next/link";
import './syle.css'
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [iconeMenu, setIconeMenu] = useState('/icone-abrir.png')
    const menu = useRef<HTMLUListElement>(null)
    function setMenu() {
        if (menu.current) {
            if (iconeMenu === '/icone-abrir.png') {
                menu.current.style.display = 'flex'
                setIconeMenu('/icone-fechar.png')
            } else {
                menu.current.style.display = 'none'
                setIconeMenu('/icone-abrir.png')
            }
        }
    }

    function changeMenu() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                if (menu.current) {
                    if (window.innerWidth > 900) {
                        menu.current.style.display = 'flex'
                        setIconeMenu('/icone-fechar.png')
                    } else {
                        setIconeMenu('/icone-abrir.png')
                        menu.current.style.display = 'none'
                    }
                }
            })
        }
    }

    useEffect(() => {
        changeMenu()
    }, [])


    return (
        <header className="header-pagina">
            <Link href={'/'}><Image className="img-logo" src={'/logo.png'} alt="Logo da empresa" width={150} height={150} /></Link>
            <nav>
                <Image className="img-menu-mobile" onClick={setMenu} src={iconeMenu} alt="Menu" width={40} height={40} />
                <ul ref={menu} className="nav-header">
                    <li><Link className="link" href={'/contato'}>contato</Link></li>
                    <li><Link className="link" href={'/produtos'}>produtos</Link></li>
                    <li><Link className="link" href={'/sobre'}>sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}