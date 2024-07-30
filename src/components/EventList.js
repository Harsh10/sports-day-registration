// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, onSelect, selectedEventIds, onDeselect }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          onSelect={onSelect}
          isSelected={selectedEventIds.includes(event.id)}
          onDeselect={onDeselect}
        />
      ))}
    </div>
  );
};

export default EventList;
