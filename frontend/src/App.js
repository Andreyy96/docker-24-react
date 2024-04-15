import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://owu.linkpc.net/carsAPI/v1/cars").then(({data}) => setCars(data))
    }, []);


  return (
      <div>
          {cars.map(car =>
              <div>
                  <p>id: {car.id}</p>
                  <p>brand: {car.brand}</p>
              </div>
          )}
      </div>
  );
};

export {App};

