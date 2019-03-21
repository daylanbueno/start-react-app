import React, { Component } from 'react'
import RotasComponent from './Rotas/RotasComponent'
import Layout from './template/Layout';
class App extends Component {
  render() {
    return (
    <div>
       <Layout>
         <RotasComponent/>
       </Layout>
    </div>
    );
  }
}
export default App;
