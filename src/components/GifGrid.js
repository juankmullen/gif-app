import React,{useEffect, useState} from "react";

export const GifGrid = ({category})=>{

    const [images,setImages] = useState([])

    useEffect(()=>{
            getGifs()
        },[])

    const getGifs = async()=>{

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=4OzUHVgDCYsCYTo6psGJ2jP3SMaz5wl3&q=goku&limit=10'
        const resp = await fetch(url);
        const {data} = await resp.json()

        const gifs = data.map(img =>{
            return {
                        id: img.id,
                        title : img.title,
                        img : img.images?.downsized_medium.url
                    }    
        })

        setImages(gifs)
    }



    return (
            <div>
                <h3>{category}</h3>
                <ol>
                   {
                     images.map(({id,title}) =>
                        (
                            <li key={id}> {title}</li>  
                        ))
                    }
                </ol>
            </div>)
} 