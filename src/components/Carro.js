import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';
const styles = {
  carro: {
    backgroundColor: '#359a2c',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },

  bubble: {
    position: 'relative',
    left: 12, //QUE SE MUEVA DESDE LA IZQ A LA DERECHA 12PX
    top: 20, // QUE SE MUEVA DE ARRIBA HACIA ABAJO 20PX
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0); //METODO SE UTILIZA PARA TOMAR LOS NUMEROS Y SUMARLOS TODOS

    //MOSTRANDO CANTIDAD DE PRODUCTOS DEL CARRO
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
