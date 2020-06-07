import React from 'react';

const SearchBox = ({searchChange, searchField}) => {
    return (<div className='pa2'>
                <input className='pa3 ba b--green bg-lightest-blue'
                       type="search" placeholder="Search Characters!"
                       onChange={searchChange}
                />
            </div>)
};

export default SearchBox;