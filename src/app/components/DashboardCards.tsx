'use client'
import { NextPage } from 'next'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface CardData {
    title: string;
    text: string;
}

interface Props {
    cards: CardData[];
}

const DashboardCards: NextPage<Props> = ({ cards }) => {
    return (
        <div className="mt-3">
            <Row xs={1} md={2} className="g-4">
                {cards.map((card, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default DashboardCards;
