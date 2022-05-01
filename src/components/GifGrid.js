//import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log(images)
    return (
        < >
            <h3>{category}</h3>
            { loading && <p>Loading...</p>}
            { <div className='group'>
                { 
                    images.map((img) => < GifGridItem 
                        key={img.id}
                        { ...img }
                    />) 
                }
            </div>}
        </>
    )
    }
