import React from 'react';

const Pagination = ({totalUsers, usersPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for(let i =1; i<= Math.ceil(totalUsers/usersPerPage); i++){
        pages.push(i)
    }
    return (
        <div className='mx-[45%]'>
          
            {
                pages.map((page, index)=> <button
                id='p-btn'
                className={page == currentPage ? 'active btn' : ''}
                onClick={()=> setCurrentPage(page)}
                 key={index}>{page}</button>)
            }
        </div>
    );
};

export default Pagination;