import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './Modal';
// import Test from './Test';
import Login from './Login';

class App extends Component {

  state = {
    showModal: false
  }
  

  launchModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    /* un método posible para inyectar html: */
    // let myHTML = "<h1>Exercitation enim laboris qui incididunt.</h1>";
    
    // let myHTML = <>
    //   <h1>
    //     Exercitation enim laboris qui incididunt.
    //   </h1>
    //   <Test/>
    // </>

    return (
      <div className="App">
        <div>
          Ea pariatur fugiat culpa qui in ullamco cillum. Adipisicing ullamco cillum mollit laborum ipsum exercitation ex. Eiusmod dolore cupidatat cupidatat labore aute non culpa deserunt adipisicing laborum veniam voluptate dolor excepteur. Ea et incididunt ad esse exercitation elit excepteur. Ut elit commodo do sunt enim.
        </div>
        <button onClick={ () => this.launchModal() }>
          Modal
        </button>
        {/* <Modal content={ myHTML }/> */}

        {            
          this.state.showModal &&        
          <Modal onCloseModal={ () => this.closeModal() }>
            {/* { myHTML } */}
            <Login/>
          </Modal>
        }

      </div>
    );
  }
}

export default App;
