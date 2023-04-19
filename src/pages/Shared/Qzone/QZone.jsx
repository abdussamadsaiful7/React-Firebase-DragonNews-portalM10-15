import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary text-center px-auto ps-2 py-2'>
            <h5>Q-Zone</h5>
            <div className='py-4'>
                <img src={qZone1} alt="picture"/>
                <img src={qZone2} alt="picture"/>
                <img src={qZone3} alt="picture"/>
            </div>
        </div>
    );
};

export default QZone;