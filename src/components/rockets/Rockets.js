import React, { useEffect, useState } from 'react';

const rocketList = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRockets(response);
      });
  }, []);
  return (
    <div>
      {
        rockets.map((rocket) => (
          <div key={rocket.id}>
            {rocket.rocket_name}
          </div>
        ))
      }
    </div>
  );
};

export default rocketList;
