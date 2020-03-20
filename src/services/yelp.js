import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer 82lt7PmJ7SqdRpXmxFcQZhL2Sol6KYDbLGQI0OGYgYi8RS5plsOD5AZ1YGgfapi6nbioJdBL_lYyiA2cPoGh1PWqa409II9-Zch_bLlNtlUSizmnBJMYAPyM1sVzXnYx'
  }
})