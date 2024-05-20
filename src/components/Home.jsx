import React from 'react';
import Flight from './Flight';
import SearchFlight from './SearchFlight';
import Members from './Members';

const Home = () => {
    return (
        <div>
            <Flight/>
            <SearchFlight/>
            <Members/>
        </div>
    );
};

export default Home;