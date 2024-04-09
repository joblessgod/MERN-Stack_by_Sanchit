export default function Users() {
    let users = ["Mukesh", "Rochak", "Sanchit", "Bikal", "Nischal"]


    let mappedUsers = users.map((el) => {
        return <li>{el}</li>;
    })
    return (
        <>
            <div className="user">
                <h1>Users</h1>
                <ul>
                    {
                        [
                            users.map(el => {
                                return <li>{el}</li>
                            })
                        ]
                    }
                </ul>
            </div>

        </>
    )
}
