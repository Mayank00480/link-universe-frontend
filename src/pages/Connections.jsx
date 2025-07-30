import { useEffect, useState } from "react";
import RequestCard from "../components/RequestCard";
import axios from "axios";

const Connections = () => {
  const [connection, setConnection] = useState([]);

  const getConnections = async () => {
    const response = await axios.get("http://localhost:3000/connections", {
      withCredentials: true,
    });
    setConnection(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (connection.length === 0) getConnections();
  }, []);

  return (
    <div className="my-10">
      <div
        className="heading "
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 className="text-bold" style={{fontSize : "28px" , fontWeight : 600}}>Connections</h2>
      </div>
      <div className="content my-10" style={{ display : 'flex' , justifyContent : 'center' ,flexDirection:"column",gap:5}}>
        {connection &&
          connection?.map((connect) => {
            return (
              <RequestCard
                photoUrl={connect?.photoUrl}
                name={connect?.firstName}
                age={connect?.age}
                gender={connect?.gender}
                about={connect?.about}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Connections;
