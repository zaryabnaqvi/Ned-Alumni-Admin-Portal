// Home.jsx
import React from 'react';
import EventCard from '../Compoenent/EventCard';

const Home = () => {
  const eventsData = [
    { id: 1, title: 'Event 1', description: 'Description for Event 1' },
    { id: 2, title: 'Event 2', description: 'Description for Event 2' },
    { id: 3, title: 'Event 3', description: 'Description for Event 3' },
    // Add more events as needed
  ];

  const specialOccasionsData = [
    { id: 4, title: 'Occasion 1', description: 'Description for Occasion 1' },
    { id: 5, title: 'Occasion 2', description: 'Description for Occasion 2' },
    { id: 6, title: 'Occasion 3', description: 'Description for Occasion 3' },
    // Add more occasions as needed
  ];

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-light text-dark">
        <h1 className="display-4">Welcome to NEDIAN APPLICATION</h1>
        <p className="lead">Explore events and special occasions at NED University.</p>
      </div>

      {/* Active Events Section */}
      <section className="my-5">
        <h2 className="h2 mb-4">Active Events</h2>
        <div className="row">
          {eventsData.map((event) => (
            <EventCard key={event.id} title={event.title} description={event.description} />
          ))}
        </div>
      </section>

      {/* Special Occasions Section */}
      <section className="my-5">
        <h2 className="h2 mb-4">Special Occasions</h2>
        <div className="row">
          {specialOccasionsData.map((occasion) => (
            <EventCard key={occasion.id} title={occasion.title} description={occasion.description} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="my-5">
        <h2 className="h2 mb-4">About NED University</h2>
        <p>
          NED University is a leading institution committed to academic excellence and innovation.
          Learn more about our history, vision, and mission.
        </p>
      </section>

      {/* Contact Footer */}
      <footer className="text-center my-5">
        <p>Contact us: example@email.com</p>
      </footer>
    </div>
  );
};

export default Home;
