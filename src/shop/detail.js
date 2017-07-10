import React, { PropTypes } from 'react';

export default class Detail extends React.Component {

    static propTypes = {
        phone: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {
        const {phone, className} = this.props;

        return (
            <div className={ className }>
                <h3>{ phone.name }</h3>
                <small>{ phone.id }</small>
                <img src={ phone.imgUrl } alt={ phone.name } />
                <p>{ phone.snippet }</p>
            </div>
        );
    }
}
