export const TravelFormModal = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt={item.name} />
                    <p>Rating: {item.rating}</p>
                    <p>Location: {item.location}</p>
                </div>
            ))}
        </div>
    );
};
