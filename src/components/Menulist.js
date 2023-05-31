import React from 'react'

const  Menulist = ({meals}) => {
  return (
    <div className='meal-container px-8 text-green-300'>
        {meals.map((meal) => (
            <div key={meal.id} >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <img src={meal.img} className='img' />
                    <div className="flex flex-col mx-4">
                      <div >
                        <h5>{meal.title}</h5>
                        <small>{meal.price}</small>
                      </div>
                      <div>
                        <small className=' w-full'>--------------------------</small>
                        <p>{meal.para}</p>
                      </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Menulist