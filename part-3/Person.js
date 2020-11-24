const Person = (props) => {
    let reply;
   
    if (props.age < 18) {
       reply = <h3>You must be 18.</h3>
    } else {
        reply = <h3>Please go vote!</h3>
    }
 
    return (
    <div>
        <p>Learn some info about this person</p>
        {props.name.slice(0,6)}
        {reply}
        <ul>Hobbies: {props.hobbies.map(h => (
            <li>{h}</li>
        )
        )}</ul>
    </div> 
    )

    
    }