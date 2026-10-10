"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative min-[900px]:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                className="text-foreground z-50"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isOpen && (
                <nav
                    className="absolute right-0 top-full z-50 mt-4 flex w-56 flex-col gap-4 rounded-lg border border-border bg-card p-5 shadow-lg"
                >
                    <Link href={"/"}
                        onClick={() => setIsOpen(false)}
                    >Início</Link>

                    <Link href={"/sobre"}
                        onClick={() => setIsOpen(false)}
                    >Sobre</Link>

                    <Link href={"/servicos"}
                        onClick={() => setIsOpen(false)}
                    >Serviços</Link>

                    <Link href={"/contato"}
                        onClick={() => setIsOpen(false)}
                    >Contato</Link>

                    <Link href={"/contato"}
                        onClick={() => setIsOpen(false)}
                        className="rounded-full bg-primary px-4 py-2.5 text-center text-white"
                    >Fale com a gente</Link>
                </nav>
            )}

        </div>
    )
}

export default MobileMenu