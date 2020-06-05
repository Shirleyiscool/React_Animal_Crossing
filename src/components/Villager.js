import React from 'react';

const Villager = ({name, image_uri, species}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={'vv_img'} src={image_uri}/>
            <div>
                <h3>{name}</h3>
                <p>{species}</p>
            </div>
        </div>
    );
};

export default Villager;