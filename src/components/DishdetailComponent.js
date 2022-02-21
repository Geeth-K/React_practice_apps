import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if(comments != null) {
            const listItems = comments.map((item) => {
                return (
                    <li key={item.id}>
                        <div>
                            {item.comment}
                            <br></br>
                            -- {item.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
                        </div>
                        <br></br>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {listItems}
                    </ul>
                </div>
            ); 
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;