/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 14/10/2021 - 17:07:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react'; 
import { Formik, Field } from 'formik';
import * as axios from 'axios';

export default class extends Component {

    getInitialValues = () => {
        return this.props.recette ?
            { ...this.props.recette } : { titre: '', sous_titre: '', ingrediens	: '' };
    }

    submit = (values, actions) => {
        if (!this.props.recette) {
            axios.post('/recettes', values)
            .then(response => { 
                console.log(response);
            });
        } else {
            axios.put(`/recettes/${ values.id }`, values)
            .then(response => { 
                console.log(response);
            });
        }
    }

    render() {
        return (
            <Formik
                initialValues={ this.getInitialValues() }
                onSubmit={ this.submit }
                enableReinitialize={ true }
            >
                {
                    ({ handleSubmit }) => (
                        <form onSubmit={ handleSubmit } className="d-flex flex-column" style={{ width: 600 }}>
                            <Field name="titre" placeholder="Saisir le titre" className="my-2" />
                            <Field name="sous_titre" placeholder="Saisie le sous titre"  className="my-2"  />
                            <Field name="ingrediens" placeholder="Saisir les ingrediens"  className="my-2" />
                            <button className='my-2 btn btn-primary' style={{ width: 200 }} type="submit">save</button>
                        </form>
                    )
                }
            </Formik>
        )
    }
}