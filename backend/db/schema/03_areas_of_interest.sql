DROP TABLE IF EXISTS areas_of_interest CASCADE;

CREATE TABLE IF NOT EXISTS areas_of_interest (
    id SERIAL PRIMARY KEY NOT NULL,
    itinerary_id INTEGER REFERENCES itinerary(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL
);