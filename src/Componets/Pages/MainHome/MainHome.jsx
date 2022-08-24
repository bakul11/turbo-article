import React from 'react';
import Discovered from './Discover/Discovered';
import HeroSlide from './HeroSlide/HeroSlide';
import HowWork from './HowWork/HowWork';
import Resourse from './Resourse/Resourse';
import Subcription from './Subcription/Subcription';
import NewsFeed from './NewsFeed/NewsFeed';
import FreeBlog from './FreeBlog/FreeBlog';

const MainHome = () => {
    return (
        <section>
            <HeroSlide />
            <HowWork />
            <Resourse />
            <FreeBlog />
            <Subcription />
            <Discovered />
            <NewsFeed />
        </section>
    );
};

export default MainHome;