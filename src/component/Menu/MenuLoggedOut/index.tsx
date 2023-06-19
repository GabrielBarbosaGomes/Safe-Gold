import { Logo } from "../../Logo";

export function MenuLoggedOut() {

    return(
        <nav className="flex justify-between items-center h-20 w-full px-8 bg-grayNav">
            <Logo fontSize='2xl' fontLogo='light'/>
            <ul className="flex justify-center gap-1 w-1/4 text-black">
                <li className="rounded-l-lg bg-grayMain py-2 px-8"><a>Entrar</a></li>
                <li className="rounded-r-lg bg-blueMain py-2 px-8"><a>Cadastrar-me</a></li>
            </ul>
        </nav>
    )
}