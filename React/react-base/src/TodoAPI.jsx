import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TodoAPI() {
  const [todoAPIList, setTodoAPIList] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [InputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    todoAPIList.push("Express")


  }

  const fetchData = () => {
    let todoUrl = `http://localhost:8000/api/todos`

    axios.get(todoUrl)
      .then(res => {
        // console.log(res);
        setTodoAPIList(res.data)
        setisLoading(false)

      })
  }
  useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <form>
        <input onSubmit={handleSubmit} name='title' type="text" placeholder='add new todo list' />
      </form>
      {
        isLoading && (<p>Loading...</p>)
      }
      {
        todoAPIList.map((el, idx) => {
          return (<li key={idx}>{el}</li>)
        })
      }


    </>
  )
}
