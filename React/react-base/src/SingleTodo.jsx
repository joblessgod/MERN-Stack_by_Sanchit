import "./main.css"

export default  function SingleTodo(props) {
    return (
        <div className="todo">
            <h3 className="capitalize">{props.title} {props.status}</h3>
            <p>{props.description}</p>
        </div>
    )
}
