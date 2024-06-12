import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/movie/movieSlice'
import CreateMovie from '../../components/CreateMovie/CreateMovie'

function DashboardAdmin() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const movies = useSelector(getMovies)
  console.log("movies in admin page", movies)

  const [isCreateNewMovie, setIsCreateNewMovie] = useState(false)
  const [isUpdateMovie, setIsUpdateMovie] = useState(false)
  const [idSelectedMovie, setIdSelectedMovie] = useState('')

  const selectedMovie = useMemo(() => {
    return movies.find(item => item._id === idSelectedMovie)
  }, [movies, idSelectedMovie])

  return (
    <div>
      <h1>Admin dashboard</h1>

      <button className='new-movie-btn' onClick={() => setIsCreateNewMovie(true)}>New Movie</button>

      {
        isCreateNewMovie && <CreateMovie setIsCreateNewMovie={setIsCreateNewMovie} />
      }




    </div>
  )
}

export default DashboardAdmin