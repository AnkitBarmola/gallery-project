import React from 'react'

const App = () => {
  return (
     <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setUserData([])

            setIndex(index + 1)

          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
f