import React, { useState } from "react";

const InputText = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return(
        <div>
            <form>
            <input type="text" value={name} onChange={handleChange}></input>
            <button>Enviar</button>
            <p>Nombre: {name}</p>
            </form>
        </div>
    );
};

const InputEmail = () => {
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return(
        <div>
            <form>
                <input type="email" value={email} onChange={handleChange}></input>
                <p>Email: {email}</p>
            </form>
        </div>
    );
}

export default InputText;