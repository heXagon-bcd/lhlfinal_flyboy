export const TravelFormModal = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.image} alt={data.name} />
            <p>Rating: {data.rating}</p>
            <p>Location: {data.location}</p>
        </div>
    )
}