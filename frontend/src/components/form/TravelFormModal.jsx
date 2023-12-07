import '../../style/TravelFormModal.css'

export const TravelFormModal = ({ data }) => {
  return (
    <div className="travel-form-modal-container">
      <div className="travel-form-modal-item">
        <h2>{data.name}</h2>
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <p>Rating: {data.rating}</p>
          <p>Pricing: {data.price}</p>
          <p>Location: {data.location}</p>
        </div>
      </div>
    </div>
  );
};