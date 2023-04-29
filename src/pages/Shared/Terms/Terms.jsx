import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mx-5'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem officia tenetur numquam! Deserunt, neque repellat! Culpa, minus. Illo dignissimos recusandae excepturi at mollitia veritatis iusto in autem ducimus fugit dolorum error repudiandae repellat quo cumque, illum animi quis enim, doloribus placeat necessitatibus ipsam eum corrupti. Cumque magnam exercitationem error alias!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;