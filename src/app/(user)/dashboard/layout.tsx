import Sidebar from '@/app/components/layout/Sidebar';
import { FC, ReactNode } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}><div><Sidebar /></div></Col>
                    <Col sm={10}><main>{children}</main></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout;