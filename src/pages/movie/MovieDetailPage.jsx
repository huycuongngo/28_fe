import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovie, getMovie, removeMovie } from '../../redux/movie/movieSlice'
import { notification } from 'antd'
import NOTIFICATION_TYPE from '../../constants'
import './MovieDetailPage.scss'

function MovieDetailPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log("id in movie detail", id)
  const movie = useSelector(getMovie)
  console.log("movie detail", movie)
  const fetchMovie = async () => {
    if (localStorage.getItem('access_token') && id) {
      const data = await dispatch(fetchAsyncMovie({
        accessToken: localStorage.getItem('access_token'),
        id,
      }))
      console.log("data in movie detail", data)
      if (data?.payload) {
        notification[NOTIFICATION_TYPE.success]({
          message: 'Get movie successfully',
          placement: 'topRight'
        })
      } else {
        notification[NOTIFICATION_TYPE.error]({
          message: 'Get movie fail',
          placement: 'topRight'
        })
      }
    }
  }

  useEffect(() => {
    fetchMovie()

    return () => {
      dispatch(removeMovie())
    }
  }, [localStorage.getItem('access_token'), id])

  return (
    <section>
      <h1 className='title'>Movie</h1>
      
    </section>
  )
}

export default MovieDetailPage