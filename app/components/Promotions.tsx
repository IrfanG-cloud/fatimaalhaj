import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Promotions() {
  return (
    <div className="w-full mt-16">
        <div className='text-center py-6'>
            <span className='text-1xl text-[var(--primary-color)]'>
                Promotions
            </span>
            <h1 className=' text-2xl font-bold md:text-4xl'>Our Promotions Events</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-1 px-6'>
        <div className="item py-4">
            <Link href="/products">
            <Image
                src="/pro1.png"
                width={600}
                height={800}
                alt="Picture of the tshirt"
            />
            <span>$220</span>
            <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products">
                <Image
                    src="/kid1.png"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products">
                <Image
                    src="/man2.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        </div>
    </div>

  )
}
