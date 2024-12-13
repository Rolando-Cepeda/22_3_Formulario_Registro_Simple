import React, { useState } from "react";

const InputText = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    // Aquí puedes manejar el envío del formulario 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado:", { name, email });
    };


    return (
        <div>
            <form>
                <input type="text" value={name} onChange={handleChangeName}></input>
                <input type="email" value={email} onChange={handleChangeEmail}></input>
                <button type="submit">Enviar</button>
                <p>Nombre: {name}</p>
                <p>Email: {email}</p>
            </form>
        </div>
    );
};


export default InputText;