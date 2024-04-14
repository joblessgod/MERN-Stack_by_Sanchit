import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TodoAPI() {
  const [todoAPIList, setTodoAPIList] = useState([])
  const handleSubmit = (e) => {
    let todoUrl = `http://localhost:8000/api/todos`;

    axios
      .post(todoUrl, {
        title: "mongodobl"
      })
      .then((res) => {
        setTodoAPIList(res.data);
      });
  }

  const fetchData = () => {
    let todoUrl = `http://localhost:8000/api/todos`

    axios.get(todoUrl)
      .then((res) => {
        setTodoAPIList(res.data)

      })
  }
  useEffect(() => {
    fetchData() 
  }, [])




  return (
    <>
      <button onClick={handleSubmit}>ADD New  Data</button>
      <ul>

        {
          todoAPIList.map((el, idx) => {
            return (<li key={idx}>{el}</li>)
          })
        }

      </ul>

    </>
  )
}
