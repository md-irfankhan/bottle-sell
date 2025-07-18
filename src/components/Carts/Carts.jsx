import './Carts.css'

const Carts = ({bottle, handleRemoveCart}) => {
     const {brand,name,material,price_usd,volume_ml,image_url}=bottle;
    return (
        <div className='cards'>
            <div>
                <img className="card-img" src={image_url} alt="" />
            </div>
            <div className='card-text'>
                <h4 >{name}</h4>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2,1fr)',
                    gap: '4px'
                }}>

                    <p ><span>Brand:</span>{brand}</p>
                    <p><span>Material:</span>{material}</p>
                    <p><span>Price:</span>{price_usd}$</p>
                    <p><span>Volume:</span>{volume_ml} ml</p>
                </div>

            </div>
            <button onClick={() => handleRemoveCart(bottle)} style={{ textAlign: 'left' }}>Remove</button>
        </div>
    );
};

export default Carts;