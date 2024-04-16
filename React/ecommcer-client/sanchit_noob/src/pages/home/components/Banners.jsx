import React, { Component } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Banners() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='container'>

            <Slider {...settings}>
                <div>
                    <img src="/banner-1.png" alt="" />
                </div>
                <div>
                    <img src="/banner-2.png" alt="" />
                </div>
                <div>
                    <img src="/banner-3.png" alt="" />
                </div>
            </Slider>
        </div>
    );
}