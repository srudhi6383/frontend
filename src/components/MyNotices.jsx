import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyNotices = () => {
  const [myNotices, setMyNotices] = useState([]);

  useEffect(() => {
    const fetchMyNotices = async () => {
      try {
        const response = await axios.get('https://jittery-red-singlet.cyclic.app/api/notices');
        setMyNotices(response.data.filter((notice) => notice.user === '<userId>'));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyNotices();
  }, []);

  return (
    <div>
      <h2>My Notices</h2>
      <ul>
        {myNotices.map((notice) => (
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

export default MyNotices;
