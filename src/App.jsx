import React from 'react'

const App = () => {
  return (
    
    <div className='w-full h-screen bg-zinc-900 p-4'>
      <div className='w-44 h-20 rounded-xl bg-pink-300 p-3 text-white'>Welcome To React Vite</div>
      <h1 className='text-3xl'>{import.meta.env.VITE_API_KEY}</h1>
      <h3 className='text-white'>Lets's Learn</h3>
      <button className='w-20 h-15 bg-pink-600 rounded-md'>Explore</button>
    </div>
  
    
  )
}

export default App
