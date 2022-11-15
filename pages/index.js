import React from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';

const App = () => {

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );
  
  const { publicKey } = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <img src='https://media4.giphy.com/media/l0MYKMrQnwNvLjYhW/giphy.gif?cid=ecf05e47tu4c6ypa604nj709idisnd4iuhfliiohjmbxlkhk&rid=giphy.gif&ct=g' alt='The Dark Side of The Moon' />
      <div className='button-container'>
        <WalletMultiButtonDynamic className='cta-button connect-wallet-button' />
      </div>    
    </div>
  );

  return (
    <div className='App'>
      <div className='container'>
        <header className='header-container'>
          <p className='header'> —△🌈 Pink Floyd GIF Store</p>
          <p className='sub-text'>The Dark Side Of The Store</p>
        </header>

        <main>
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? 'Connected!' : renderNotConnectedContainer()}
        </main>

        <div className='footer-container'>
        </div>
      </div>
    </div>
  );
};

export default App;
