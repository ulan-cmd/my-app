import React from 'react';

const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="nameUser">Имя</label>
                <input type="text" id="nameUser" name="nameUser"/>
            </div>
            <div>
                <label htmlFor="phoneUser">Номер телефона</label>
                <input type="tel" id="phoneUser" name="phoneUser"/>
            </div>
        </form>
    );
};

export default Form;