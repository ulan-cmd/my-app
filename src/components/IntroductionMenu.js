import React from 'react';
import About from "./About";
import PopularPosts from "./PopularPosts/PopularPosts";
import Tags from "./Tags";

const IntroductionMenu = () => {
    return (
        <div className="w3-col l4">
            <About/>
            <PopularPosts/>
            <Tags/>
        </div>
    );
};

export default IntroductionMenu;