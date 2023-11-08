import { Component } from 'react';
import Button from './Button';
//LISTANDO PRODUCTOS

const styles = {
  producto: {
    border: 'solid 1px #eee', //COLOR GRIS SUAVE
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1 )', //SOMBREADO
    width: '30%',
    padding: '10px 15px', //CONTENIDO SE ALEJE DE LOS BORDER
    borderRadius: '5px', //REDONDEAR ESQUINAS
  },

  img: {
    width: '100%', //OCUPEN TODO EL ANCHO DEL ELEMENTO PADDING
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
