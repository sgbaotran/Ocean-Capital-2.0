import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
function Home() {
  const loggedIn = { firstName: 'Stephen' }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='access' />

          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={2000} />

        </header>
      </div>
    </section>
  );
}

export default Home;