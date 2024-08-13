'use client'
import { NextPage } from 'next'
import ListGroup from 'react-bootstrap/ListGroup';

interface Props { }

const Sidebar: NextPage<Props> = ({ }) => {
    return <div className='mt-5 mb-5'>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Overview
            </ListGroup.Item>
            <ListGroup.Item as="li">Accounts</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                Settings
            </ListGroup.Item>
            <ListGroup.Item as="li">Logout</ListGroup.Item>
        </ListGroup>
    </div>
}

export default Sidebar