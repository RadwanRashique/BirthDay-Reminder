import React from 'react'


function List({people}){

    return(
        <>
       { people.map((data)=>(
        <article className='person' key={people.id}>
<img src={data.image} alt='' />
<div>
    <h3> {data.name}</h3>
    <p>age: {data.age}</p>
</div>
        </article>
          ) )}
          
        </>
    )
}

export default List