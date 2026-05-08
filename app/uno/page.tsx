"use client";
import Link from 'next/link';
import Props from './props'
import { useAppContext } from '../contexto/AppContext';
export default function Uno(){
    const { nombre } = useAppContext ();
    return(
        <div>
            Uno
            <Link href= "/">Boton Home</Link>
            <Link href= "/uno">Boton Uno</Link>
            <Link href= "/dos">Boton Dos</Link>

            <Props nombre="este es un props"></Props>

            <p> Hola {nombre}</p>
        </div>
    )
}