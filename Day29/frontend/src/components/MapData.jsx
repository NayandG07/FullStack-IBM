import "./MapData.css";

const MapData = ({ item, ...props }) => {
  return (
    <div className="user-card" {...props}>
      <h4>{item?.name?.firstname}</h4>
      <p>{item?.address?.city}</p>
      <p>{item?.email}</p>
    </div>
  );
};

export default MapData;


