import React from "react";
import ItemCard from "./ItemCard.jsx";
import styles from "./ItemCard.module.css";


const items = [   {
    "id": 1,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1199.99,
    "description": "The latest flagship from Samsung with a powerful Snapdragon 8 Gen 3 processor and a 200MP camera.",
    "specs": {
      "display": "6.8-inch Dynamic AMOLED 2X, 120Hz",
      "processor": "Snapdragon 8 Gen 3",
      "battery": "5000mAh",
      "storage": "256GB/512GB/1TB",
      "ram": "12GB/16GB",
      "camera": "200MP + 12MP + 10MP + 10MP"
    }
  },
  {
    "id": 2,
    "name": "Apple iPhone 15 Pro Max",
    "price": 1299.00,
    "description": "Apple's top-tier smartphone with A17 Pro chip and titanium design.",
    "specs": {
      "display": "6.7-inch Super Retina XDR, 120Hz",
      "processor": "A17 Pro Bionic",
      "battery": "4323mAh",
      "storage": "256GB/512GB/1TB",
      "ram": "8GB",
      "camera": "48MP + 12MP + 12MP"
    }
  },
  {
    "id": 3,
    "name": "Google Pixel 8 Pro",
    "price": 999.99,
    "description": "Google’s latest AI-powered smartphone with Tensor G3 chipset and pro-level camera features.",
    "specs": {
      "display": "6.7-inch LTPO OLED, 120Hz",
      "processor": "Google Tensor G3",
      "battery": "5000mAh",
      "storage": "128GB/256GB/512GB",
      "ram": "12GB",
      "camera": "50MP + 48MP + 48MP"
    }
  },
  {
    "id": 4,
    "name": "OnePlus 12 Pro",
    "price": 899.99,
    "description": "OnePlus’ flagship with Snapdragon 8 Gen 3 and fast 100W charging.",
    "specs": {
      "display": "6.8-inch AMOLED, 120Hz",
      "processor": "Snapdragon 8 Gen 3",
      "battery": "5000mAh",
      "storage": "256GB/512GB",
      "ram": "16GB",
      "camera": "50MP + 50MP + 64MP"
    }
  },
  {
    "id": 5,
    "name": "Xiaomi 14 Ultra",
    "price": 1099.99,
    "description": "Xiaomi’s latest premium smartphone with Leica optics and a powerful Snapdragon processor.",
    "specs": {
      "display": "6.73-inch LTPO OLED, 120Hz",
      "processor": "Snapdragon 8 Gen 3",
      "battery": "5000mAh",
      "storage": "256GB/512GB/1TB",
      "ram": "16GB",
      "camera": "50MP + 50MP + 50MP + 50MP"
    }
  },
  {
    "id": 6,
    "name": "Samsung Galaxy Z Fold 5",
    "price": 1799.99,
    "description": "Samsung’s latest foldable phone with improved durability and multitasking features.",
    "specs": {
      "display": "7.6-inch Foldable Dynamic AMOLED, 120Hz",
      "processor": "Snapdragon 8 Gen 2",
      "battery": "4400mAh",
      "storage": "256GB/512GB/1TB",
      "ram": "12GB",
      "camera": "50MP + 12MP + 10MP"
    }
  },
  {
    "id": 7,
    "name": "Apple iPhone 15",
    "price": 799.99,
    "description": "Apple’s base model iPhone with A16 Bionic chip and Dynamic Island.",
    "specs": {
      "display": "6.1-inch Super Retina XDR, 60Hz",
      "processor": "A16 Bionic",
      "battery": "3877mAh",
      "storage": "128GB/256GB/512GB",
      "ram": "6GB",
      "camera": "48MP + 12MP"
    }
  },
  {
    "id": 8,
    "name": "Google Pixel 7a",
    "price": 499.99,
    "description": "A budget-friendly Google Pixel phone with great AI-powered photography.",
    "specs": {
      "display": "6.1-inch OLED, 90Hz",
      "processor": "Google Tensor G2",
      "battery": "4385mAh",
      "storage": "128GB",
      "ram": "8GB",
      "camera": "64MP + 13MP"
    }
  },
  {
    "id": 9,
    "name": "Samsung Galaxy A54",
    "price": 449.99,
    "description": "A mid-range smartphone with an AMOLED display and great battery life.",
    "specs": {
      "display": "6.4-inch Super AMOLED, 120Hz",
      "processor": "Exynos 1380",
      "battery": "5000mAh",
      "storage": "128GB/256GB",
      "ram": "6GB/8GB",
      "camera": "50MP + 12MP + 5MP"
    }
  },
  {
    "id": 10,
    "name": "OnePlus Nord 3",
    "price": 499.99,
    "description": "A performance-packed mid-range phone with fast charging and a smooth display.",
    "specs": {
      "display": "6.74-inch AMOLED, 120Hz",
      "processor": "Dimensity 9000",
      "battery": "5000mAh",
      "storage": "128GB/256GB",
      "ram": "8GB/16GB",
      "camera": "50MP + 8MP + 2MP"
    }
  }]

const ItemContainer = () => {
    return(
        <div className={styles.ItemContainer}>
            {items.map((item)=> (
                <ItemCard key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default ItemContainer