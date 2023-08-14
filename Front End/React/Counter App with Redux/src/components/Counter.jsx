import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center mt-[18px] text-white gap-10 '>
      <button
      onClick={() => dispatch(increment())}
      className='border border-black px-4 py-3 bg-white text-black rounded-lg shadow-md shadow-gray-600 cursor-pointer hover:bg-slate-400 transition-all duration-200' 
      >
        Increment
      </button>
      <br/>
      <br/>

      <div className='rounded-full border border-black px-7 py-4 bg-white text-black '>{count}</div>

      <br/>
      <br/>

      <button
      className='border border-black px-4 py-3 bg-white text-black rounded-lg shadow-md shadow-gray-600 cursor-pointer hover:bg-slate-400 transition-all duration-200'
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
