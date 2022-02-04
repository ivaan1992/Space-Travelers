import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery';

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
            <div>
              <Gallery images={rocket.flickr_images} name={rocket.rocket_name} />
            </div>
            <p>{rocket.rocket_name}</p>
            <p>{rocket.description}</p>

          </div>
        ))
      }
    </div>
  );
};

export default rocketList;
