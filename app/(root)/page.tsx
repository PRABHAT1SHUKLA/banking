import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const page = () => {
    const loggedIn = { firstName: 'Prabhat' ,lastName: 'Shukla', email:'prabhatshukla0849@gmail.com'}

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.30}
                    />
                </header>

                recent transactions
            </div>

            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50},{currentBalance: 228.50}]}
            />
        </section>
    )
}

export default page