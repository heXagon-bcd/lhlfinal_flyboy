DROP TABLE IF EXISTS itinerary CASCADE;

CREATE TABLE itinerary (
    id SERIAL PRIMARY KEY NOT NULL,
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);