import React, { useState } from   'react'
import data from  '../../StaticData/data'
import List from '../../components/List/List'
function Home(){
     const [people,setPeople]=useState(data)

    
return(
    <>
    <main>
       <section className='container'>
        <h3>{people.length}  BirthDay Today</h3>
        <List   people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
        
       </section>
    </main>
    </>
)

}
export default Home