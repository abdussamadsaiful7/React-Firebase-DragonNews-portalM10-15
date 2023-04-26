import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Category = () => {
    const [showAll, setShowAll] = useState(false);

    const showAllHandle =()=>{
        setShowAll(true)
    }

    const showLessHandle = ()=>{
        setShowAll(false)
    }

    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
           {id &&( <h2>This Category News: {categoryNews.length}</h2>)}
            {
                categoryNews.slice(0, showAll? 26: 3).map(news=> <NewsCard key={news._id} news={news}></NewsCard>)
            }
            { !showAll &&
               ( <Button onClick={showAllHandle}>See More</Button>)
            }
            { showAll &&
               ( <Button onClick={showLessHandle}>See Less</Button>)
            }
        </div>
    );
};

export default Category;