import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSummaryScreen = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');
  const [showName, setShowName] = useState('');
  const [ticketFormVisible, setTicketFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    movieName: '',
    theater: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setSummary(response.data.summary);
        setShowName(response.data.name);
        setFormData(prevFormData => ({
          ...prevFormData,
          movieName: response.data.name
        }));
      } catch (error) {
        console.error('Error fetching show summary:', error);
      }
    };

    fetchSummary();
  }, [showId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
   
    console.log('Form submitted:', formData);
    
  };

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
      <button onClick={() => setTicketFormVisible(true)}>Booking Ticket</button>
      {ticketFormVisible && (
        <form onSubmit={handleFormSubmit}>
          <h2>Movie: {showName}</h2>
          <div>
            <label>Theater:</label>
            <input
              type="text"
              name="theater"
              value={formData.theater}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ShowSummaryScreen;
