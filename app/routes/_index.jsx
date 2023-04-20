import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "../components/listado-guitarras";
import stylesGuitarras from '../styles/guitarra.css'
import ListadoPosts from "../components/listado-posts";
import stylesPosts from '../styles/blog.css'
import Curso from "../components/curso";
import stylesCurso from '../styles/stylesCurso.css'

export function meta() {}

export function links() {

  return[
    {
      rel: 'stylesheet'
      ,href: stylesGuitarras
    },
    {
        rel: 'stylesheet',
        href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [guitarras, posts,curso] = await Promise.all([
    getGuitarras(), 
    getPosts(),
    getCurso()

  ]);
  console.log(curso)

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

    <Curso
      curso={curso.attributes}
    />


      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />

      </section>
    </>
  );
};

export default Index;
