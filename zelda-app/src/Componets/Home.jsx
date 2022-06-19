import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
function Home() {
    const [zelda, setZelda] = useState()
    // let {id} = useParams()
    const url = `https://botw-compendium.herokuapp.com/api/v2`
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setZelda(res)
        })
        .catch(console.error)
    }, []);






  return (
<div>
    {zelda && (
        <>
        <h1>{zelda.data.equipment[100].name}</h1>
        </>
    )}
</div>
    
  )
}

export default Home