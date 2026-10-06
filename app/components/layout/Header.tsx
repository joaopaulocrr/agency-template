import Image from "next/image"
import Container from "../ui/Container"
import Link from "next/link"

import logo from "../../../public/logo.jpg"

const Header = () => {
    return (
        <header className="bg-linear-to-r from-accent via-accent to-card">
            <Container>
                
                <div className="flex justify-between items-center py-4 ">
                    <Image 
                    src={logo} 
                    alt="Imagem da logo da empresa"
                    width={60}
                    />
                    <nav className="flex items-center gap-6 text-foreground text-sm font-medium ">
                        <Link href={"/"}>Início</Link>
                        <Link href={"/sobre"}>Sobre</Link>
                        <Link href={"/servicos"}>Serviços</Link>
                        <Link href={"/contato"}>Contato</Link>
                        <Link href={"/contato"}
                            className="bg-primary py-2.5 px-4 rounded-full text-white"
                        >Fale com a gente</Link>
                    </nav>
                </div>
             
            </Container>
        </header>
    )
}

export default Header