import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompraDoMes } from "../CompraDoMes";
import { MenuLogged } from "../../component/Menu/MenuLogged";
import { SidebarRigth } from "../../component/SidebarRigth";

export function Home() {
    return (
        <div className="flex justify-between">
           <MenuLogged />
            <div className="p-4 sm:ml-64 w-3/4 p-10">
                    <h1 className="m-4">Seja Bem vindo ao SAFE GOLD!</h1>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-[#ffffff] rounded-lg p-8 mx-4">
                            <header className="flex gap-1">
                                <h2 className="p-4">Linha de Progresso</h2>
                                <ul className="flex p-4 gap-3">
                                    <li>all</li>
                                    <li>1 ano</li>
                                    <li>2 anos</li>
                                    <li>select de anos</li>
                                </ul>
                            </header>

                            <div>
                                tabela
                            </div>
                        </div>

                        <div className="bg-[#ffffff] rounded-lg p-8 mx-4">
                        <header className="flex gap-1">
                            <h2 className="p-4">Linha de Progresso</h2>
                            <ul className="flex p-4 gap-3">
                                <li>all</li>
                                <li>1 ano</li>
                                <li>2 anos</li>
                                <li>select de anos</li>
                            </ul>
                        </header>

                        <div>
                            tabela
                        </div>
                    </div>
                    </div>
                    
            </div>
            <SidebarRigth />
        </div>
    )
}