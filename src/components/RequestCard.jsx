const RequestCard = ({ photoUrl, name, age, gender, about }) => {
  return (
    <div
      className="card flex"
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div
        className="photoUrl"
        style={{
          height: "150px",
          display: "flex",
          alignItems: "center",
          marginRight: "5px",
        }}
      >
        <img
          src={photoUrl}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            height: "100px",
            width: "100px",
          }}
        />
      </div>
      <div
        className="profile-data"
        style={{
          width: "500px",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          {name && <h2 className="name">{name}</h2>}
          <p className="age">
            {age ? age : ""} {gender ? gender : ""}
          </p>
          {about && <p className="about">{about}</p>}
          <div style={{ display: "flex", gap: 5,marginTop : '10px' }}>
            <button className="btn btn-primary">accept</button>
            <button className="btn btn-secondary">reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
