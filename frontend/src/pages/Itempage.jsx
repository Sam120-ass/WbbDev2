import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


const Itempage = () => {
    const id = useParams()
    const location = useLocation();
    const item = location.state?.item;
  return (
    <div>
        {/*<p className=''>{item.name}</p>
        <p className=''>{item.description}</p>
        <p className=''>{item.price}</p>
        <p className=''>{item.specs.battery}</p>*/}

        
        <div className = "imageContainer">
                <img src="" alt="" className=""/>
            </div>
            <div className="informationFlex">
                <div className="NameandDescription">
                  <h1 className="name"> {item.name}</h1>
                  <p className="description"> {item.description}</p>
                  <p className=""><span className="descriptionLabel">Storage:</span>{item.storge}</p>
                  <p className=""><span className="descriptionLabel">RAM:</span>{item.storge}</p>
                  <p className=""><span className="descriptionLabel">Camera:</span>{item.storge}</p>
                  <p className=""><span className="descriptionLabel">Battery:</span>{item.storge}</p>
                  <p className=""><span className="descriptionLabel">Brand:</span>{item.storge}</p>
                  <p className="descriptionLabel">Description:</p>
                  <p className="description">{item.description}</p>
                </div>
                <div className="PriceAndButtons">
                  <p className="price"> $ {item.price}</p>
                  <p className="addtoCartButton"> Add to Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Itempage
