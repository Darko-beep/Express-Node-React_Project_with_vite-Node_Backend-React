import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//import axios 
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);
  
  // 1. Initialize loading state to true right away to avoid synchronous setState inside useEffect
  const [isLoading, setIsLoading] = useState(true);

  // fetch the API data using axios
  const fetchApiData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/data");
      setArray(response.data.fruits); // Assuming the API returns an object with a 'fruits' array
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      // 2. Set loading to false asynchronously after the request finishes
      setIsLoading(false);
    }
  };

  // useEffect to call the fetchApiData function when the component mounts
  useEffect(() => {
    fetchApiData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div>
        {/* 3. Show a loading message while fetching, then map over the data */}
        {isLoading ? (
          <div>Loading data...</div>
        ) : (
          /* display the API data in a list */
          array.map((fruit, index) => (
            <div key={index}>
              <div>{fruit}</div>
              <br />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default App
