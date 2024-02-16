import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import Footer from './components/Footer';
import buttonData from './data/buttonData';
import Iframe from './components/Iframe';

const App = () => {
  const [iframeUrl, setIframeUrl] = useState(buttonData[0].buttons[0].src);
  const [path, setFullPath] = useState(buttonData[0].buttons[0].fullPath);

  const handleButtonClick = (url, itemPath) => {
    setIframeUrl(url);
    setFullPath(itemPath);
  };

  return (
    <div className="absolute left-0 w-full">
      <div className="report-banner">IS Ops PowerBI Dashboard</div>

      <div className="flex justify-around w-full">
        <div className="w-[12%] flex flex-col justify-between">
         
          <ButtonGroup
            buttonData={buttonData}
            onItemClick={handleButtonClick}
          />
           <a
            className="block text-center mb-20 p-1 border-none bg-[#6c757d] text-white text-[14px] cursor-pointer rounded hover:bg-[#5a6268]"
            href={path}
            target="_blank"
          >
            Open Web Version
          </a>
        </div>
        <div className="w-[80%]">
          <Iframe src={iframeUrl} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
