import Image from "next/image";
import Link from "next/link";
import './syle.css'

export default function Header() {
    return (
        <header className="header-pagina">
            <Link href={'/'}><Image className="img-logo" src={'/logo.png'} alt="Logo da empresa" width={150} height={150}/></Link>
            <nav>
                <ul className="nav-header">
                    <li><Link className="link" href={'/contato'}>contato</Link></li>
                    <li><Link className="link" href={'/produtos'}>produtos</Link></li>
                    <li><Link className="link" href={'/sobre'}>sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}