export const TravelFormModal = ({ data }) => {
  console.log(data)
  return (
    <div style={{display:"flex"}}>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Rating: {data.rating}</p>
      <p>Pricing: {data.price}</p>
      <p>Location: {data.location}</p>
    </div>
  );
};