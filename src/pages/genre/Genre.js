import React, { useContext } from 'react'
import Genrelist from '../../Component/genrelist/Genrelist';
import Movielist from '../../Component/movielist/Movielist'
import Pagelist from '../../Component/pagelist/Pagelist';
import { DataContext } from '../../context/dataContext';

const Genre = () => {
  const { trendingMovies, activePage, setActivePage, totalPage } = useContext(DataContext);

  return (
    <div style={{paddingTop: "20px"}}>
      <Genrelist />
      <Movielist movieObj={trendingMovies}/>
      <Pagelist activePage={activePage} setActivePage={setActivePage} totalPage={totalPage}/>
    </div>
  )
}

export default Genre
