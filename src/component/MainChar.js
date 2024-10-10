import React, { useState } from 'react';
const characters = [{
        name: 'Persephone',
        image: 'https://imgs.search.brave.com/vJiiDeJXhMw3IKz5-vSMGfSCNWuJ-_4aVos_ZA3Yz9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZWFy/bmluZy1oaXN0b3J5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNy9MZWdh/Y3ktb2YtR3JlZWst/R29kZGVzcy1QZXJz/ZXBob25lLmpwZw',
        description: 'The Queen of the Underworld',
    },
    {
        name: 'Hades',
        image: 'https://imgs.search.brave.com/KDj9wAOMdfQAGbKxCdDlJLJp5V7SiWWfs7T8cK5a-iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgyLzY4LzUx/LzM2MF9GXzU4MjY4/NTE2N19mSXBaSmR5/d0l0cE9UZmhlYWIy/ejNySE5pNDlRd0Fv/ci5qcGc',
        description: 'The King of the Underworld',
    },
    {
        name: 'Demeter',
        image: 'https://imgs.search.brave.com/AwEko-AUqI7yL2JKamms3wUGKX1lzOXA6PHIppotWtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlY29sbGVjdG9y/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wOC93aGF0/LWRlbWV0ZXItZ29k/ZGVzcy5qcGc_d2lk/dGg9MTQwMCZxdWFs/aXR5PTcw',
        description: 'The Goddess of Agriculture',
    },
];

const MainCharacters = () => {
    const [hoveredCharacter, setHoveredCharacter] = useState(null);

    const handleMouseEnter = (character) => {
        setHoveredCharacter(character);
    };

    const handleMouseLeave = () => {
        setHoveredCharacter(null);
    };

    return ( <
        section className = "bg-white py-8" >
        <
        div className = "container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20" >
        <
        h2 className = "text-3xl font-bold mb-4" > Main Characters < /h2> <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-6" > {
            characters.map((character) => ( <
                div key = { character.name }
                className = "relative group"
                onMouseEnter = {
                    () => handleMouseEnter(character) }
                onMouseLeave = { handleMouseLeave } >
                <
                img src = { character.image }
                alt = { character.name }
                className = "h-64 w-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" /
                > { /* Hover Effect for Character Details */ } {
                    hoveredCharacter === character && ( <
                        div className = "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg" >
                        <
                        h3 className = "text-xl font-bold mb-2" > { character.name } < /h3> <
                        p > { character.description } < /p> <
                        /div>
                    )
                } <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};

export default MainCharacters;