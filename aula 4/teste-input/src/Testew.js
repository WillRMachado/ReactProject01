import React, {useState} from 'react';


function W() {
    const [name, setName] = useState("Will");

    function atualizaInput(e){
        setName(e.target.value)
    }


    return (
        <>
        <h1>kk</h1>
        <input type="text" value ={name}  onChange={atualizaInput} />
        </>
    );
}

export default W