// src/components/SelectedEvents.js
import React from 'react';
import EventCard from './EventCard';

const SelectedEvents = ({ selectedEvents, onDeselect }) => {
  return (
    <div className="selected-events">
      {selectedEvents.map(event => (
        <EventCard
          key={event.id}
          event={event}
          isSelected={true}
          onDeselect={onDeselect}
        />
      ))}
    </div>
  );
};

export default SelectedEvents;
