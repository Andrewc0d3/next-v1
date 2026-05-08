import Link from 'next/link';
import Props from './props'
export default function Uno(){
    return(
        <div>
            Uno
            <Link href= "/">Boton Home</Link>
            <Link href= "/uno">Boton Uno</Link>
            <Link href= "/dos">Boton Dos</Link>

            <Props nombre="este es un props"></Props>
        </div>
    )
}