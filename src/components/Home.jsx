import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `https://jittery-red-singlet.cyclic.app/api/notices${selectedCategory ? `?category=${selectedCategory}` : ''}`
        );
        setNotices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotices();
  }, [selectedCategory]);

  return (
    <div>
      <h2>Home</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="parking">Parking</option>
        <option value="covid">COVID</option>
        <option value="maintenance">Maintenance</option>
      </select>

      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
            <p>Category: {notice.category}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
