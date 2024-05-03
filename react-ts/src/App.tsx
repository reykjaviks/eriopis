import { useEffect, useState } from 'react';
import './App.css'
import { HavainnotPaneeli } from './havainnot/HavainnotPaneeli'

function App() {
  // todo: mieti ympäristömuuttujia
  const url = import.meta.env.VITE_HAVAINNOT_API_URL
  const [havainnot, setHavainnot] = useState([]);

  // todo: käytä apia, ehkä
  // todo: mieti härvelin vakautta / tee custom hook
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
  
  return (
    <>
      <h1>Kaupungin perhoset</h1>
      <HavainnotPaneeli havainto={havainnot[0]?.unit?.linkings?.taxon?.vernacularName?.fi }/>
    </>
  )
}

export default App
