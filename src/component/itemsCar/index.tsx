import Item from '../../Interfaces/comprasMes';

export function ItemsCar(props: Item){
    return(
        <div className='flex justify-between rounded-lg bg-green/75 p-2 m-1 w-96'>
            <small>Produto: <strong>{props.produtosName}</strong></small>
            <small>Quantidade:  <strong>{props.quantidade}</strong></small>
            <small>Valor: <strong>{props.valor}</strong></small>
        </div>
    )
}