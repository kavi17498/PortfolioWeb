import React from 'react'
import data from '../assets/data.json'
import Card from './Card'

function CardList() {
  return (
    <div className='flex flex-wrap justify-between gap-2 mt-4'>
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
  )
}

export default CardList