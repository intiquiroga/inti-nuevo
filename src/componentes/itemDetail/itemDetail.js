import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const itemDetail = ({Item}) => {
    return (
    <div className='detail-container'>
      <p style={{color:"violet"}}> item detail</p>
      <div className='img-container'>
        <img/>
      </div>
      <div className='img-container'>
        <h4> {Item.title} </h4>
        <h5>$ {Item.price} </h5>
      </div>
    </div>
    );
}