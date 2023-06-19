import { Logo } from "../Logo";
import { MenuLoggedOut } from "../Menu/MenuLoggedOut";

export function Ladingpage() {
    return (
        <div className="flex flex-col bg-stone-900/40 h-screen max-h-100">
            <MenuLoggedOut />
            <section className="flex justify-around h-full">
                <div className="flex items-center justify-center bg-grayNav/50 w-2/4">
                    <Logo fontSize='5xl' fontLogo= 'bold'/>
                </div>
                <div className="w-3/4"></div>
            </section>
        </div>
    )
}