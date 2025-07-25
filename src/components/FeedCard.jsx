const FeedCard = ({ feed }) => {
  const { firstName, photoUrl,  _id, age, gender, about, lastName ,isFeedData = false } =
    feed || {};
  console.log(feed, "FeedCard Data");
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
        {age &&  (
          <p>
            {age}, {gender}
          </p>
        )}
        {about && <p>{about}</p>}
        {isFeedData && <div className="card-actions justify-center">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-info">Interested</button>
        </div>}
      </div>
    </div>
  );
};

export default FeedCard;
