DROP TABLE IF EXISTS itinerary CASCADE;

CREATE TABLE itinerary (
    id SERIAL PRIMARY KEY NOT NULL,
    trip_name VARCHAR(255) NOT NULL,
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    flight_price VARCHAR(255),
    hotel_cost VARCHAR(255),
    hotel_description VARCHAR(255),
    interest_name VARCHAR(255),
    interest_location VARCHAR(255),
    interest_image VARCHAR(255),
    interest_rating VARCHAR(255)
);
