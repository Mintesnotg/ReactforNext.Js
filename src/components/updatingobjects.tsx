import { useState } from "react";

export default function Form() {

    const [person, setPerson] = useState({

        firstName: '',
        LastName: '',
        Email: ''
    })


    function handleChange(e) {

        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <label>
                First name:
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input
                    name="LastName"
                    value={person.LastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    name="Email"
                    value={person.Email}
                    onChange={handleChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.LastName}{' '}
                ({person.Email})
            </p>
        </>
    )
}