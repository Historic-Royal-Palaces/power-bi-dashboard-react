import { useState, useEffect } from 'react';
import ButtonGroup from './components/ButtonGroup';
import Footer from './components/Footer';
import Iframe from './components/Iframe';
import Spinner from './components/Spinner';
import { Button } from 'semantic-ui-react';

const App = () => {
  const [title, setTitle] = useState('IS Ops PowerBI Dashboard');
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iframeUrl, setIframeUrl] = useState(
    'https://app.powerbi.com/view?r=eyJrIjoiZDEyYWI2OTctOWQ0MS00ZGE1LTg4N2YtZTRmNDQyNDI1MTYzIiwidCI6Ijg0YjhiMDNiLTAyMTYtNGU4MC05NTNjLTA2NTVkMmIxMzMyMSIsImMiOjh9'
  );
  const [path, setFullPath] = useState(
    'https://app.powerbi.com/groups/7c69927a-9c2c-4a28-b034-622e3eef416b/reports/84851775-46d7-4100-865b-c68a6f5e9224/ReportSection26323c5c4ab76d6e80db?experience=power-bi'
  );

  const handleButtonClick = (url, itemPath, title) => {
    setIframeUrl(url);
    setFullPath(itemPath);
    setTitle(title);
    setIsActive((active) => (active = !active));
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://func-powerbi-menudata.azurewebsites.net/api/GetData'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="absolute left-0 w-full">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Spinner size={4} color="text-red-500" className="mx-auto mt-12" />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="report-banner">{title}</div>

          <div className="flex justify-around w-full">
            <div className="w-[12%] flex flex-col justify-between">
              <ButtonGroup
                data={data}
                onItemClick={handleButtonClick}
                isActive={isActive}
              />
              <div className="mb-10">
                <Button inverted>
                  <a href={path} target="_blank">
                    Open Web Version
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-[80%]">
              <Iframe src={iframeUrl} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
