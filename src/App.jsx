import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import Footer from './components/Footer';
import buttonData from './data/buttonData';
import Iframe from './components/Iframe';

const App = () => {
  const [iframeUrl, setIframeUrl] = useState(buttonData[0].buttons[0].src);

  const handleButtonClick = (url) => {
    setIframeUrl(url);
  };

  return (
    <div className="w-[100vw]">
      <div className="flex flex-col justify-center items-center">
        <div className="report-banner" id="reportBanner">
          IS Ops PowerBI Dashboard
        </div>

        <div className="container">
          <div>
            <ButtonGroup
              buttonData={buttonData}
              onItemClick={handleButtonClick}
            />
          </div>
          <div>
            <Iframe src={iframeUrl} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
