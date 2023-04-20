import { getGuitarra } from "../models/guitarras.server" 
import { useLoaderData, useOutletContext } from "@remix-run/react"
import styles from '../styles/guitarra.css'
import { useState } from "react"
import { number } from "mathjs"

export async function loader({params}){

  const { guitarraUrl } = params

  const guitarra = await getGuitarra(guitarraUrl)

  console.log(guitarra.data.length === 0)
  
  if(guitarra.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })
  }

  return guitarra
}


export function meta({data}) {
  

  if(!data) {
    return [
      {
        title:'GuitarLA Guitarra No Encontrada',
        description: 'Guitarras, venta de guitarra, guitarra no Encontrada',
      }
    ]
  }
  const datosGuitarra = data.data[0].attributes
  return [
    {
      title: `GuitarLA - ${datosGuitarra.nombre}`,
      description: `Guitarras, venta de guitarra, guitarra ${data.data[0].attributes.nombre}`
    }
  ]
}


export function links () {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


function Guitarra() {

  
  const {agregarCarrito} = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad === 0){
      alert("cero guitarras")
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`${nombre}-imagen`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            onChange={e => setCantidad(parseInt(e.target.value))}
            id="cantidad">

            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
          </select>

          <input type="submit" value={'Agregar al carrito'}/>

        </form>
      </div>
    </main>
  )
}

export default Guitarra