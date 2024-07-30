// src/App.js
import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import SelectedEvents from './components/SelectedEvents';
import './App.css';

const mockEvents = [
  { id: 1, event_name: "Butterfly 100M", event_category: "Swimming", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 2, event_name: "Backstroke 100M", event_category: "Swimming", start_time: "2022-12-17 13:30:00", end_time: "2022-12-17 14:30:00" },
  { id: 3, event_name: "Freestyle 400M", event_category: "Swimming", start_time: "2022-12-17 15:00:00", end_time: "2022-12-17 16:00:00" },
  { id: 4, event_name: "High Jump", event_category: "Athletics", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 5, event_name: "Triple Jump", event_category: "Athletics", start_time: "2022-12-17 16:00:00", end_time: "2022-12-17 17:00:00" },
  { id: 6, event_name: "Long Jump", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 7, event_name: "100M Sprint", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 8, event_name: "Lightweight 60kg", event_category: "Boxing", start_time: "2022-12-17 18:00:00", end_time: "2022-12-17 19:00:00" },
  { id: 9, event_name: "Middleweight 75 kg", event_category: "Boxing", start_time: "2022-12-17 19:00:00", end_time: "2022-12-17 20:00:00" },
  { id: 10, event_name: "Heavyweight 91kg", event_category: "Boxing", start_time: "2022-12-17 20:00:00", end_time: "2022-12-17 22:00:00" },
];

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState(() => {
    const saved = localStorage.getItem("selectedEvents");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Fetch events from mock API or use mock data
    setEvents(mockEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedEvents", JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const isTimeConflict = (newEvent) => {
    return selectedEvents.some(event => {
      return (
        (new Date(newEvent.start_time) < new Date(event.end_time)) &&
        (new Date(newEvent.end_time) > new Date(event.start_time))
      );
    });
  };

  const handleSelect = (eventId) => {
    if (selectedEvents.length >= 3) {
      alert("You can only select up to 3 events.");
      return;
    }

    const eventToSelect = events.find(event => event.id === eventId);

    if (isTimeConflict(eventToSelect)) {
      alert("This event conflicts with another selected event.");
      return;
    }

    setSelectedEvents([...selectedEvents, eventToSelect]);
  };

  const handleDeselect = (eventId) => {
    setSelectedEvents(selectedEvents.filter(event => event.id !== eventId));
  };

  return (
    <div className="App">
      <h1>Sports Day Registration</h1>
      <div className="container">
        <EventList
          events={events}
          onSelect={handleSelect}
          selectedEventIds={selectedEvents.map(event => event.id)}
          onDeselect={handleDeselect}
        />
        <SelectedEvents
          selectedEvents={selectedEvents}
          onDeselect={handleDeselect}
        />
      </div>
    </div>
  );
};

export default App;
