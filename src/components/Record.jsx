import React from 'react'


const Record = ({title, amount, index}) => {
   const temp = amount>=0 ? <h2>+{amount}</h2>:<h2>{amount}</h2>
  return (
    <div>
      <div className={`bg-white p-2 flex justify-between border-0 border-solid border-r-4 ${amount>=0 ? 'border-green-600': 'border-red-600'}`}>
        <h2 className='font-medium'>{title}</h2>
        {temp}
      </div>
    </div>
  )
}

export default Record
