import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-3">
    <h1>Show List</h1>
   
      {shows.map((show) => (
        <div key={show.show.id} >
        <div className="card mb-3">
  <img className="card-top" src={show.show.image.original} alt="Card cap" width={500} height={500}/>
  <div className="card-body">
    <h2 className="card-title">{show.show.name}</h2>
   
    
    <Link to={`/summary/${show.show.id}`}><button type="button" className="btn btn-succes btn-lg btn-block">View Summary</button></Link>
  </div>
</div>
       
          
     
        </div>
      ))}
      </div>
  );
};

export default ShowList;
