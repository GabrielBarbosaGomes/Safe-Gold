import { Logo } from "../../component/Logo";
import { MenuLoggedOut } from "../../component/Menu/MenuLoggedOut";

export function Ladingpage() {
    return (
        <div className="flex flex-col bg-stone-900/40 h-screen max-h-100">
            <MenuLoggedOut />
            <section className="grid grid-cols-2 gap-4 h-full">
                <div className="flex items-center justify-center bg-teste/20 shadow-2xl w-3/4">
                    <Logo 
                        fontSize='5xl'
                        fontLogo='semibold'
                    />
                </div>
                <div className="w-3/4">
                    <div className="flex justify-center items-center flex-col h-fullHeight">
                        <h1>Lorem Ipsum</h1>
                        <div className="">
                            Nem sempre o horizonte esta limpo e claro, e é nesse momento que o <strong>Safe Gold</strong> Vai fazer a diferença na sua vida, pois é no detalhe que a mágica acontece!!!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}