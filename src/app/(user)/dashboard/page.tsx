"use client"
import DashboardCards from '@/app/components/DashboardCards'
import DashboardTabs from '@/app/components/DashboardTabs';
import { NextPage } from 'next'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

interface Props { }

const cardsData = [
    { title: "BTC/USDT", text: "Slippage: 0.05% | Volume: $1.2B" },
    { title: "ETH/USDT", text: "Slippage: 0.08% | Volume: $850M" },
    { title: "BNB/USDT", text: "Slippage: 0.03% | Volume: $600M" },
    { title: "ADA/USDT", text: "Slippage: 0.07% | Volume: $400M" },
];
const Dashboard: NextPage<Props> = ({ }) => {
    return <div>
        <div className='d-flex justify-content-between my-3'><h1>Dashboard</h1><div><DropdownButton
            align="end"
            title="A1"
            id="dropdown-menu-align-end"
        >
            <Dropdown.Item eventKey="1">A1</Dropdown.Item>
            <Dropdown.Item eventKey="2">A2</Dropdown.Item>
            <Dropdown.Item eventKey="3">A3</Dropdown.Item>
            <Dropdown.Item eventKey="4">A4</Dropdown.Item>
        </DropdownButton></div></div>
        <DashboardTabs />
        <DashboardCards cards={cardsData} />
    </div>
}

export default Dashboard