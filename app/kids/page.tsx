import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Kids(){
  return (
    <div className="w-full my-20">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-2 px-6'>
        <div className="item py-4">
            <Link href="/products/id">
            <Image
                src="/kid3.png"
                width={600}
                height={800}
                alt="Picture of the tshirt"
            />
            <span>$220</span>
            <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
                <Image
                    src="/kid4.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
                <Image
                    src="/kid5.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
            <Image
                src="/kid6.jpg"
                width={600}
                height={800}
                alt="Picture of the tshirt"
            />
            <span>$220</span>
            <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
                <Image
                    src="/kid7.jpg"
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
                    src="/kid8.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
                <Image
                    src="/kid9.jpg"
                    width={600}
                    height={800}
                    alt="Picture of the tshirt"
                />
                <span>$220</span>
                <h3>Comfort Grey Sneakers</h3>
            </Link>
        </div>
        <div className="item py-4">
            <Link href="/products/id">
                <Image
                    src="/kid10.jpg"
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
