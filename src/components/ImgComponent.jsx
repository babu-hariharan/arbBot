"use client"
import Image from 'next/image'
import React from 'react'

const ImgComponent = (props) => {

    const { alt, src, width, height, className, isPriority, onClick } = props
    return (
        <div>
            <Image
                alt={alt || 'image'}
                src={src}
                width={width || 500}
                height={height || 0}
                className={className}
                priority={isPriority}
                onClick={() => onClick ? onClick() : null} />
        </div>
    )
}

export default ImgComponent
