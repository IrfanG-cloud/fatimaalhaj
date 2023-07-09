import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Checkproduct() {
  return (
    <div className="w-full my-16">
        <div className='text-center py-6'>
            <span className='text-1xl text-[var(--primary-color)]'>
                Product
            </span>
            <h1 className=' text-2xl font-bold md:text-4xl'>Check What We Have</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-1 px-6'>
        <div className="item py-4">
            <Link href="/products">
            <Image
                src="/pro1.png"
                width={600}
                height={800}
                alt="Picture of the tshirt"
            />
            <span className='text-1xl text-[var(--primary-color)]'>$300</span>
                <h3 className='text-2xl '>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products">
                <Image
                    src="/man1.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span className='text-1xl text-[var(--primary-color)]'>$200</span>
                <h3 className='text-2xl '>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products">
                <Image
                    src="/kid2.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span className='text-1xl text-[var(--primary-color)]'>$220</span>
                <h3 className='text-2xl '>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products">
                <Image
                    src="/pro3.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span className='text-1xl text-[var(--primary-color)]'>$180</span>
                <h3 className='text-2xl '>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        </div>
    </div>

  )
}
