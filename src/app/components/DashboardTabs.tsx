'use client'
import Nav from 'react-bootstrap/Nav';
import { NextPage } from 'next'

interface Props { }

const DashboardTabs: NextPage<Props> = ({ }) => {
    return <div>
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link eventKey="currency">Currency Pairs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="broker">Broker</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="accounts">Accounts</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
}

export default DashboardTabs