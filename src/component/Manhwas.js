import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const manhwas = [{
        title: 'The God of High School',
        image: 'https://imgs.search.brave.com/HESlw2bdocwh2jeNecDpEqX5n8_rLW8531nfyFx7pW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdWx0/dXJlZHZ1bHR1cmVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMi9UaGUt/R29kLW9mLUhpZ2gt/U2Nob29sLTgwM3g0/NTIuanBn',
    },
    {
        title: 'Noblesse',
        image: 'https://imgs.search.brave.com/2jQ5zlRotn3F3IH_3QVq26sccGQ2NURIG7IiJQQZXuY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzEwL05vYmxl/c3NlLVJhaS1lMTYw/MzU1MTgxMzY5Ni5q/cGc',
    },
    {
        title: 'Tower of God',
        image: 'https://imgs.search.brave.com/nRZ8ZjzYpKEV0EV1mqy3Xd3MOwenuIFcSKJXkE0cyRI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/b25lLXJlYXNvbi1m/b3ItcmVhZGluZy10/b3dlci1vZi1nb2Qt/bWFuaHdhLWZyb20t/dGhlLXN0YXJ0LXYw/LW5va2Izd2k2ZnZw/ZDEuanBnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPWY5NzdmMGNh/N2JjMTc1NzI4Mjcz/ZGYyM2ZiYjJhOThh/ZWE5OTdiNjg',
    },
    {
        title: 'Solo Leveling',
        image: 'https://imgs.search.brave.com/NkBw2ogJuBUENbF9w9EmDucAF_DSSGYRPvcAhRYlx3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDQv/amluLXdvby1zdW5n/LWluLXNvbG8tbGV2/ZWxpbmctbWFuaHdh/LmpwZw',
    },
    {
        title: 'Omniscient Reader',
        image: 'https://imgs.search.brave.com/hxgY-TLzrXXU4FIUqWCWxGJ69VFv2Rf9gWnInqYh-yM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDkv/Q29sbGFnZS1NYWtl/ci0xOS1TZXAtMjAy/Mi0xMDA1LUFNLmpw/Zw',
    },
    {
        title: 'The Breaker',
        image: 'https://imgs.search.brave.com/PWHg7Vj2ALtrukXQFBvYkW71SpzOiwDc5itKXrKDGMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhlcm9lcmEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA3L1RoZS1CcmVh/a2VyLUFuaW1lLVNl/YXNvbi0zLWIuanBn',
    },
    {
        title: 'Hardcore Leveling Warrior',
        image: 'https://imgs.search.brave.com/aZvtCnY5kNr4we_jLZwY2c-QQK0N22voa-lawiIps78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2hh/cmRjb3JlbGV2ZWxp/bmd3YXJyaW9yL2lt/YWdlcy8wLzBkL0hh/cmRjb3JlX0xldmVs/aW5nX1dhcnJpb3Jf/RWFydGhfR2FtZV9X/ZWJ0b29uX0Zyb250/X1BhZ2VfQWR2ZXJ0/X1dFQlRPT05fYXBw/LnBuZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi82NzA_Y2I9/MjAyNDAxMDMxODA2/MDA',
    },
    {
        title: 'The Gamer',
        image: 'https://imgs.search.brave.com/7yY3MaUZbKolm4HcPhjVprUIYEijN3hR07u3vr48a6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDQv/dGhlLWdhbWVyLW1h/bmh3YS5qcGc',
    },
    {
        title: 'Unordinary',
        image: 'https://imgs.search.brave.com/v6Igw6tBvHqKZohf0q5E9FA7quk-IVrvz0pX8xZfiJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA0L3dlYnRv/b24tdW5vcmRpbmFy/eS1ncmFwaGljLW5v/dmVsLmpwZw',
    },
    {
        title: 'Lookism',
        image: 'https://imgs.search.brave.com/GOMj_BPPYvEqGLQm156ilAXmCKjjRxCTA8yeyHj15-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY1NTkw/NjIuanBn',
    },
];
const SupernaturalManhwaCarousel = () => {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Display one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // 2-second interval
        pauseOnHover: true, // Pause on hover
    };

    return ( <
        section className = "bg-gray-100 py-8" >
        <
        div className = "container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20" >
        <
        h2 className = "text-3xl font-bold mb-4" > The 10 Best Supernatural Manhwa... < /h2> <
        Slider {...settings } > {
            manhwas.map((manhwa) => ( <
                div key = { manhwa.title }
                className = "p-4" >
                <
                div className = "flex justify-center items-center" >
                <
                img src = { manhwa.image }
                alt = { manhwa.title }
                className = "h-64 w-full object-cover object-center rounded-lg hover:shadow-lg" /
                >
                <
                /div> <
                h3 className = "text-xl font-bold text-center mt-4" > { manhwa.title } < /h3> <
                /div>
            ))
        } <
        /Slider> <
        /div> <
        /section>
    );
};

export default SupernaturalManhwaCarousel;