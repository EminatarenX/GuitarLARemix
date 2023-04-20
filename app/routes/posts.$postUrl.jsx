import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server"
import { formatearFecha } from "../utils/helpers"
import styles from '../styles/blog.css'
export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta({data}) {
  

  if(!data) {
    return [
      {
        title:'GuitarLA - Entrada no encontrada',
        description: 'Post no Encontrada',
      }
    ]
  }
  const datosPost = data.data[0].attributes
  return [
    {
      title: `GuitarLA - ${datosPost.titulo}`,
      description: `Post,  ${data.data[0].attributes.titulo}`
    }
  ]
}

export async function loader({params}){

  const {postUrl} = params
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }

  return post
}

export default function Post() {

  const post = useLoaderData()

  const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes

  console.log(post)

  return (
    <article className="contenido post mt-3">
      <img className="imagen" src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}
