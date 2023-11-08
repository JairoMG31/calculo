import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';
const styles = {
  navbar: {
    backgroundColor: '#d4d0cf',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between', //SEPARAR LETRA UNA ESQUINA DE OTRO
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)', //SEPARAR DEL DEMAS CONTENIDO Y DARLE SOMBRA
  },
};

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    );
  }
}

export default Navbar;
