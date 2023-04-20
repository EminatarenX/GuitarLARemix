import imagen from "../../public/img/nosotros.jpg";
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
  {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
    
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }

  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">

      <h2 className="heading">Nosotros</h2>
      <div className="contenido">

        <img src={imagen} alt="imagen" />
        
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas
          blandit eros. Maecenas dictum libero commodo euismod interdum. Mauris
          quis libero at ligula imperdiet vulputate. Aliquam ullamcorper massa
          eget mi maximus rutrum. Nunc egestas a lorem vel maximus. Nulla nec
          dui eu leo ullamcorper placerat. Aenean consequat sodales nisi quis
          hendrerit.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas
          blandit eros. Maecenas dictum libero commodo euismod interdum. Mauris
          quis libero at ligula imperdiet vulputate. Aliquam ullamcorper massa
          eget mi maximus rutrum. Nunc egestas a lorem vel maximus. Nulla nec
          dui eu leo ullamcorper placerat. Aenean consequat sodales nisi quis
          hendrerit.
        </p>
      </div>
      </div>
    </main>
  );
};

export default Nosotros;
