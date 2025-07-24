const FeedCard = ({ feed }) => {
  const { firstName, photoUrl, skills, _id, age, gender, about, lastName } =
    feed || {};

  return (
    <div className="card bg-base-300 w-80 shadow-sm">
      {photoUrl && (
        <img
          src={photoUrl}
          alt="Shoes"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "fill", // Maintains aspect ratio and crops if needed
          }}
        />
      )}
      <div className="card-body">
        {firstName && (
          <h2 className="card-title">
            {firstName} {lastName && <h2 className="card-title">{lastName}</h2>}
          </h2>
        )}
        {skills?.length > 0 && <p>Skills: {skills.join(", ")} </p>}
        {age && (
          <p>
            {age} {gender && <p>,{gender}</p>}
          </p>
        )}
        {about && <p>{about}</p>}
        <div className="card-actions justify-center">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-info">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
