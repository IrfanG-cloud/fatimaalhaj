import React from 'react'
import Image from 'next/image'

export default function page() {
    // function addToCart() {}
    // function increment() {}
    // function decrement() {}

  return (
    <div className="w-full flex justify-center items-center my-20 px-4">
        <div className=''>
            <Image
                src="/kid3.png"
                width={300}
                height={500}
                alt="Picture of the tshirt"
            />
        </div>
        <div className="p-4">
            <h1 className="text-3xl my-4">Levis Jeans</h1>
            
            <div className='flex my-4'>
                <div className="pt-4">
                <p>Quantiy:</p>
                </div>

                <div>
                {/* onClick={() => decrement()} */}
                <button className="text-black text-2xl font-bold p-2 rounded-full hover:bg-[#cdcdcd]" >
                -
                </button>
                <span>0</span>
                {/* onClick={() => increment()} */}
                <button className="text-black font-bold text-2xl p-2 rounded-full hover:bg-[#cdcdcd]" >
                +
                </button>
                </div>
            </div>
            <div className='flex my-4'>
                <div>
                    <button className="bg-[#000] text-white p-2 hover:bg-[var(--primary-color)]">
                        Add to Cart
                    </button>
                </div>
                <div className='ml-4 text-2xl font-bold'><p className="mb-4">$200</p></div>
          </div>
        </div>
    </div>
  )
}

