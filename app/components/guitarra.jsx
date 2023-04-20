import { Link } from '@remix-run/react'

export const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, precio, url, nombre } = guitarra;

  const urlThumbnail = imagen.data.attributes.formats.thumbnail.url;
  const urlImagen = imagen.data.attributes.formats.medium?.url;

  return (
    <div className="guitarra">
      <img
        src={
          imagen.data.attributes.formats.medium?.url ? urlImagen : urlThumbnail
        }
        alt={`imagen guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p>${precio}</p>

        <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};
