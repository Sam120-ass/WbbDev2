import React from "react";
import {Link} from 'react-router-dom';
import styles from './ItemCard.module.css';

const ItemCard = ({item}) => {
    return(
        <div>
            <Link to = {`/item/${item.id}`} state = {{item}}>
        <div className={styles.ItemCard}>
             <img src='/6570396_sd.avif'></img>
             <div className = {styles.ItemDetails}>
                <p className ={styles.cardPrice}> ${item.price} </p>
                <p className={styles.cardDescription}>{item.description}  </p>
            </div>
            </div>
        </Link>
    </div>
    )
}

export default ItemCard;