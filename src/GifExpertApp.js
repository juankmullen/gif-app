import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = ()=>{

    const [categories,setCategories] = useState (['One Punch'])

    const handleAdd= ()=>{
        setCategories( cats => [...cats,'Pokemon'])

    }

    return (
       <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr/> 


        <ol>
            {
                categories.map(category=>  (<GifGrid key={category} category={category}></GifGrid>)
                )
            }
        </ol>
       </>

      
    )
}
