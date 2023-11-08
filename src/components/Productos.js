import { Component } from 'react';
import Producto from './Producto';

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row', //VERLO IZQ A DER
    justifyContent: 'space-between', //LOS PRODUCTOS SE SEPAREN DE MANERA EQUITATIVA
  },
};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={() => agregarAlCarro(producto)}
            key={producto.name}
            producto={producto}
          />
        ))}{' '}
      </div>
    );
  }
}

export default Productos;
