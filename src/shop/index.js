import React from 'react';
import phones from './phones.json';
import './styles.less';

export default class Shop extends React.Component {

    mapPhones(phone, i) {
        return (
            <li key={i}>
                { phone.name }
                <img src={phone.imageUrl} />
            </li>
        );
    }

    render() {
        return (
            <div className='b-shop'>
                <ul className='list'>
                    { phones.map(this.mapPhones.bind(this)) }
                </ul>
            </div>
        );
    }
}
