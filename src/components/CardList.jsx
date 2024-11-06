import React from 'react'
import data from '../assets/data.json'
import Card from './Card'

function CardList() {
  return (
  <>

  <hr className="mt-10"  />
  <h1 className="justify-self-center text-3xl font-bold mt-5">My Services</h1>
    <div className='flex flex-wrap justify-center gap-8 mt-4'>
                {data.map((item)=>(
                    <Card 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        buttonText={item.buttonText}
                    />
                ))}

    </div>
    </>
  )
}

export default CardList