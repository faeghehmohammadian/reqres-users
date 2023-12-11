
import React ,{ useEffect, useState } from 'react';

import './App.css';
import Axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]); // State to manage input value

  useEffect(()=>{
    Promise.all([
      Axios.get("https://reqres.in/api/users?page=1"),
      Axios.get("https://reqres.in/api/users?page=2")
    ])
      .then((responses) => {
        // Combine data from both responses into a single array
        const combinedData = responses.reduce(
          (acc, response) => [...acc, ...response.data.data],
          []
        );
        setMyData(combinedData);
      })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

  return (
<div className="App">
      <div className="box">
        {myData.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
</div>
  );
}

export default App;
