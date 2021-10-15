/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 14/10/2021 - 17:07:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';

export default (props) => {
    
    const recettes = props.recettes;
    return (
        <div className='container-fluid d-flex flex-row flex-wrap justify-content-start my-3'>
            { 
                recettes && recettes.length ? (
                    recettes.map((r, index) => (
                        <div key={r.id} className='card m-2' style={{ width: '200px' }} onClick={
                            () => (props.selectedRecette(index))
                        }>
                            <div className='card-header'>{ r.titre }</div>
                            <div className='card-body'>
                                <ul className='list-group'>
                                    <li className='list-group-item'>{ r.sous_titre }</li>
                                    <li className='list-group-item'>{ r.ingrediens }</li>
                                </ul>
                                <button type="button" className="btn btn-small btn-danger mt-2"
                                    onClick={  () => (props.deletedRecette(r.id))}>supprimer recette</button>
                            </div>
                        </div>
                    ) )
                ): ( <h2 className="text-center">No recettes ...</h2>)
            } 
        </div>
    )
}