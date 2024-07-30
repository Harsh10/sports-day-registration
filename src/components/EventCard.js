// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, onSelect, isSelected, onDeselect }) => {
  return (
    <div className="event-card">
      <h3>{event.event_name}</h3>
      <p>Category: {event.event_category}</p>
      <p>Timings: {event.start_time} - {event.end_time}</p>
      {isSelected ? (
        <button onClick={() => onDeselect(event.id)}>Deselect</button>
      ) : (
        <button onClick={() => onSelect(event.id)}>Select</button>
      )}
    </div>
  );
};

export default EventCard;
