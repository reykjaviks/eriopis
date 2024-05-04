import { useEffect, useState } from 'react';
import './App.css'
import { HavainnotPaneeli } from './havainnot/HavainnotPaneeli'
import { data } from './havainnot/havainnot-response'
import { convertData } from './havainnot/helper';

function App() {

  /*
  // todo: toteuta myöhemmin
  // todo: käytä apia, ehkä
  // todo: mieti härvelin vakautta / tee custom hook
  // todo: mieti ympäristömuuttujia

  const url = import.meta.env.VITE_HAVAINNOT_API_URL
  const [havainnot, setHavainnot] = useState([]);

  useEffect(() => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
              setHavainnot(data.results);
              console.log(data.results);
              
          })
          .catch((err) => {
              console.log(err.message);
          });
  }, [url]);
  */

  const havainnot = convertData(data);
  
  return (
    <>
      <h1>Kaupungin perhoset</h1>
      <HavainnotPaneeli havainnot={havainnot}/>
    </>
  )
}

export default App
