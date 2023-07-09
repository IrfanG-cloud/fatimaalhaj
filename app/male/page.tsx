import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Male(){
  return (
    <div className="w-full my-20">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-1 px-6'>
        <div className="item py-4">
            <Link href="/products/id">
            <Image
                src="/man3.png"
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
                    src="/man4.png"
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
                    src="/man2.jpg"
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
                src="/man5.png"
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
                    src="/man6.jpg"
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
                    src="/man7.jpg"
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
                    src="/man8.jpg"
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
                    src="/man9.jpg"
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