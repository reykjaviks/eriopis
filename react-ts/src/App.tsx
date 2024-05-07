import { useEffect, useState } from 'react';
import './App.css'
import { HavainnotPaneeli } from './havainnot/HavainnotPaneeli'
import { convertData } from './havainnot/helper';

function App() {
  // todo: käytä apia, ehkä
  // todo: mieti ympäristömuuttujia

  const API_URL = import.meta.env.VITE_HAVAINNOT_API_URL
  const [havainnot, setHavainnot] = useState([]);

  // todo: mieti nopeutta + tee custom hook
  useEffect(() => {
    const fetchHavainnot = async () => {
      const response = await fetch(API_URL);
      const responseData = await response.json();
      setHavainnot(responseData.results);
      console.log(responseData.results);
    };

    fetchHavainnot();
  }, [API_URL]);

  const transformedData = convertData(havainnot)

  return (
    <>
      <h1 className="text-center text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-amber-600 to-emerald-500 " >
        Kaupungin perhoset
      </h1>
      <HavainnotPaneeli havainnot={transformedData} />
    </>
  )
}

export default App
