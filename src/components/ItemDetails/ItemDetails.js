import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button
                classNane="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open })}
                >
                {this.state.open === false ? `See` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img 
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/https://s3.amazonaws.com/zcom-media/sites/a0iE000000FF6rdIAD/media/catalog/product/m/e/medicom_x_original_fake_kaws_dissected_mono.jpg"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>Medicom Toy 100% Bearbrick TERMINATOR 18 Generations OriginalFake Bear@Brick SF Electroplating PVC Action Figure Toy L2560</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ItemDetails;