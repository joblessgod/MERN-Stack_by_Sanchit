import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

export default function Banners() {
    return (
        <Carousel showArrows={true}>
            <div className='h-[764px]'>
                <img src="/banner-1.png" alt="Image 1" />
                <p className="legend">Caption 1</p>
            </div>
            <div>
                <img src="/banner-2.png" alt="Image 2" />
                <p className="legend">Caption 2</p>
            </div>
            <div>
                <img src="/banner-3.png" alt="Image 2" />
                <p className="legend">Caption 2</p>
            </div>
        </Carousel>
    );
}
