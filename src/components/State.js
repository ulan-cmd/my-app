import React, {useState} from 'react';

const style = {
    backgroundColor:"gray",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
}

const State = () => {
    const [text, setText] = useState('good evening');
    const [num, setNum] = useState(0);

    return (
        <div style={style}>
            <button onClick={() => {
                setText('good morning');
                setNum(1);
            }}>Нажми меня</button>
            <p>{ text }</p>
            <p>{ num }</p>
        </div>
    );
};

export default State;



    // Создать любой компонент.
    // Создать для этого компонента новое состояние, и три кнопки,
    // одна увеличивает на 1, другая на 5, третья на 10.