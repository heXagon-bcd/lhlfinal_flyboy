<<<<<<< HEAD
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
=======
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
>>>>>>> 07bd56543dc67646d58bf6781b5a407acbb1297d
