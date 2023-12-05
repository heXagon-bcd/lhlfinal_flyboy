export const TravelFormModal = ({ data }) => {

  console.log("Travel form data", data)
    return (
        <div>
              <h2>{data.name}</h2>
              <img src={data.image} alt={data.name} />
              <p>Rating: {data.rating}</p>
              <p>Location: {data.location}</p>
        </div>
    );
};
