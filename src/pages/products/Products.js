import React, {useEffect, useState} from 'react';
import ProductElement from './ProductElement';
import style from './Products.module.css';
import {useParams} from 'react-router-dom';
import api from './../../constants/api';

const Products = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = (catalog_name) => {
        fetch(api[catalog_name])
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts(params.catalog_name)
    }, [])

    const elements = products.map((item, index ) => {
        return <ProductElement
            key={index}
            img={item.img}
            name={item.name}
            price_som={item.price_som}
            price_dollar={item.price_dollar}
        />
    })

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Iphone</h1>
            </div>
            <div className={style.product_list}>
                {elements}
            </div>
        </div>
    );
};

export default Products;