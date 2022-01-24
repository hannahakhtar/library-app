import React, { useEffect } from 'react';
import axios from 'axios'

function App() {

  type Data = {
    express: string
  }

  useEffect(() => {
    test()
    // eslint-disable-next-line
  }, [])

  async function test() {
    const response = await axios.get<Data>('/api')
    console.log('response: ', response.data)
  }

  return (
    <div className="App">
      <h1>Library App</h1>
    </div>
  );
}

export default App;
