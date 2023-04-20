import { useLoaderData } from '@remix-run/react'
import { getPosts } from '../models/posts.server'
import ListadoPosts from '../components/listado-posts'
import styles from '../styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader() {
  const posts = await getPosts()

  return posts.data
}

export function meta(){
  return[{
    title: 'GuitarLA - Nuestro Blog',
    description: 'Conoce nuestro blog'
  }]
}

function Blog() {

  const posts = useLoaderData()


  return (
    <article className='contenedor'>
      <ListadoPosts
      
        posts={posts}
      />
    </article>
  )
}

export default Blog