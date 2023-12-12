export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            
            <nav>
                <a className="text-black" href="admin/curso/new">
                    Cadastrar Cursos &nbsp;
                </a>
                <a className="text-black" href="admin/curso">
                Listar Cursos &nbsp;{" "}
                </a>
                
            </nav>
        </header>
    )
}