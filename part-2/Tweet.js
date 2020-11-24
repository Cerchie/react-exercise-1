const Tweet = (props)=> {
 
    return (
        <div>
    <p>{props.name}</p>
    <h1>{props.message}</h1>
    <p>{props.date}</p>
    <p>{props.username}</p>
    </div>

    )
    }