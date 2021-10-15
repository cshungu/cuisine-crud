/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 14/10/2021 - 18:28:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ListRecettes from './ListRecettes';
import CreateRecette from './CreateRecette';
import './conf/axios-conf';
import * as axios from 'axios';

class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            recettes: [],
            selectedRecette: null
        }
    }
    componentDidMount() {
        axios.get('/recettes')
        .then(recettes => this.setState({ recettes }))
        .catch(err => console.log);
    }
    deletedRecette = (id) => {
        axios.delete(`/recettes${id}`)
            .then(res => console.log(res));

    }

    selectedRecette = (index) => {
        this.setState({ selectedRecette: index });
    }
    render() {
        return (
            <div style={ { minHeight: '100vh'} } className="container mt-5 p-2">
                <h2>Recette de  Cuisine</h2>
                <ListRecettes deletedRecette={this.deletedRecette}
                    recettes={this.state.recettes} selectedRecette={this.selectedRecette} />
                <hr className="w-100 my-5" />
                <h2>Ajouter la recettte de  Cuisine</h2>
                <CreateRecette
                    recettes={
                        this.state.recettes && this.state.recettes[this.state.selectedRecette] ?
                        this.state.recettes[this.state.selectedRecette] : null
                    }
                />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));