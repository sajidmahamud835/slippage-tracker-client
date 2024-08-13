import DashboardCards from '@/app/components/DashboardCards'
import { NextPage } from 'next'

interface Props { }

const cardsData = [
    { title: "BTC/USDT", text: "Slippage: 0.05% | Volume: $1.2B" },
    { title: "ETH/USDT", text: "Slippage: 0.08% | Volume: $850M" },
    { title: "BNB/USDT", text: "Slippage: 0.03% | Volume: $600M" },
    { title: "ADA/USDT", text: "Slippage: 0.07% | Volume: $400M" },
];
const Dashboard: NextPage<Props> = ({ }) => {
    return <div>
        <h1>Dashboard</h1>
        <DashboardCards cards={cardsData} />
    </div>
}

export default Dashboard