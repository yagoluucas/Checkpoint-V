import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
    return (
        <header>
            <Link href={'/'}><Image src={'/logo.png'} alt="Logo da empresa" width={150} height={200}/></Link>
        </header>
    )
}