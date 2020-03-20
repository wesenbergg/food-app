import yelp from '../services/yelp'
import { useEffect, useState } from 'react'

export default (() => {
  const [errMessage, setErrMessage] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    searchApi('pasta')
  }, [])

  const errorHandler = () => {
    setErrMessage('Oops something went wrong')
    setResults([])
    setTimeout(() => setErrMessage(''), 3000)
  }

  const searchApi = async term => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 40,
          term,
          location: 'san jose'
        }
      })
      setResults(res.data.businesses)
    } catch (e) {
      console.log(e)
      errorHandler()
    }
  }

  return [errMessage, results, searchApi]
})