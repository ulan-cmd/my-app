import React from 'react';
import s from './AddProducts.module.css';

const AddProducts = () => {
    return (
        <div className={s.container}>
            <h2>Добавление товара</h2>
            <form action="javascript:void(0)">
                <div className={s.form_control}>
                    <input type="text" placeholder="Введите ссылку для фото"/>
                </div>
                <div className={s.form_control}>
                    <input type="text" placeholder="Введите название"/>
                </div>
                <div className={s.form_control}>
                    <input type="number" placeholder="Введите прайс (сом)"/>
                </div>
                <div className={s.form_control}>
                    <input type="number" placeholder="Введите прайс (доллар)"/>
                </div>
                <div className={s.form_control}>
                    <select>
                        <option value="0">Выберите продукцию</option>
                        <option value="iphone">Iphone</option>
                        <option value="ipad">Ipad</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>
                <div className={s.form_control}>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;