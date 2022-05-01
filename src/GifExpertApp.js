import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//import PropTypes from 'prop-types'

function GifExpertApp() {
    
    //const categories = ['One punch', 'One Piece', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch']);

   /*  const handleAdd = ()=>{
        //setCategories( ['Hunter X Hunter', ...categories ]  );
        setCategories( cats => ['Hunter X Hunter', ...cats] );
    }; */


    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories= {setCategories} />
            <hr/>


            <ol>
                {
                    categories.map( category => (
                         <GifGrid 
                            key={category}
                            category = {category}/>
                    ))
                }
            </ol>
        </>
    )
}

//GifExpertApp.propTypes = {}

export default GifExpertApp
