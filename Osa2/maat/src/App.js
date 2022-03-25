/* Iida Peltonen 2022 */

import { useState, useEffect } from 'react';
import axios from 'axios';
import Haku from './components/Haku';

function App() {
  const [maat, setMaat] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setMaat(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Maiden tiedot</h1>
      <Haku maat={maat} />
    </div>
  );
}



export default App;
