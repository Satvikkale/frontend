const CallToAction = () => {
    const handleClick = () => {
        window.location.href = 'https://www.webtoons.com/en/fantasy/lore-olympus/list?title_no=1320';
    };
    return ( <
        section className = "bg-blue-900 py-8" >
        <
        div className = "container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 text-center" >
        <
        h2 className = "text-3xl font-bold mb-4 text-white" >
        Want to Dive Deeper into Lore Olympus ?
        <
        /h2> <
        button onClick = { handleClick }
        className = "bg-black hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400" >
        Read More <
        /button> <
        /div> <
        /section>
    );
};

export default CallToAction;