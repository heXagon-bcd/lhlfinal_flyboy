export const TravelFormModal = ({ data }) => {
    return (
        <div style={{display:"flex", flexWrap: "wrap"}}>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.date}</h1>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} />
                    <p>Rating: {item.rating}</p>
                    <p>Pricing: {item.price}</p>
                    <p>Location: {item.location}</p>
                </div>
            ))}
        </div>
    );
};
