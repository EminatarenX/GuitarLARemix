import { useLoaderData, Outlet} from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import ListadoGuitarras from '../components/listado-guitarras'
import styles from '../styles/guitarra.css'


export function meta() {
  return [
    {
      title: 'GuitarLA - Tienda de Guitarras',
      description: 'GuitarLA - Nuestra coleccion'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader() {

const guitarras = await getGuitarras()

  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoGuitarras
        guitarras={guitarras}
      />

    </main>
  )
}

export default Tienda