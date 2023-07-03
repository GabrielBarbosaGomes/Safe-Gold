import { useState } from "react";
import { MenuLogged } from "../../component/Menu/MenuLogged";
import { ItemsCar } from "../../component/itemsCar";

export function CompraDoMes() {
    const [produtosName, setProdutosName] = useState('');
    const [quantidade, setQuantidade] = useState(Number);
    const [valor, setValor] = useState(Number);
    const [car, setCar] = useState<Item[]>([]);
    const [itemSacola, setItemSacola] = useState({ produto: produtosName, quantidade: quantidade, valor: valor });

    function addItemsCArrinho() {
        if (produtosName.trim().length == 0) return;

        const newItemsCar: Item = {
            produtosName: produtosName,
            quantidade: quantidade,
            valor: valor,
        };

        setCar([...car, newItemsCar]);
        setProdutosName('');
        setQuantidade(0);
        setValor(0);
    }

    return (
        <>
            <MenuLogged />
            <div className="p-4 sm:ml-64">
                <div className="flex gap-4 flex-col justify-center items-center min-w-max max-w-md border-2 border-black">
                    <h1>Compra do Mês!</h1>
                    <div className="flex">
                        <div className="flex flex-col justify-center items-center px-1">
                            <label htmlFor="">Nome do Produto</label>
                            <input
                                type="Text"
                                value={produtosName}
                                placeholder='Arroz'
                                onChange={(e: any) => setProdutosName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center px-1">
                            <label htmlFor="">Quantidade</label>
                            <input
                                type="Number"
                                value={quantidade}
                                placeholder='2'
                                onChange={(e: any) => setQuantidade(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center px-1">
                            <label htmlFor="">Valor</label>
                            <input
                                type="Number"
                                value={valor}
                                placeholder='R$22,50'
                                onChange={(e: any) => setValor(e.target.value)}
                            />
                        </div>

                        <button onClick={addItemsCArrinho}>Add Produto</button>
                    </div>

                    {
                        car.map(car => <ItemsCar key={car.produtosName} produtosName={car.produtosName} quantidade={car.quantidade} valor={car.valor} />)
                    }
                    
                </div>
            </div>
        </>
    )
}