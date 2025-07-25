import { useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const EditProfileForm = ({ userData }) => {
  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [lastName, setLastName] = useState(userData.lastName || "");
  const [age, setAge] = useState(userData.age || "");
  const [about, setAbout] = useState(userData.about || "");
  const [gender, setGender] = useState(userData.gender || "");
  const [photoUrl, setPhotoUrl] = useState(userData.photoUrl || "");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = async () => {
    // Build payload with only changed fields
    const payload = {};
    if (firstName && firstName !== userData.firstName)
      payload.firstName = firstName;
    if (lastName && lastName !== userData.lastName) payload.lastName = lastName;
    if (age && age !== userData.age) payload.age = age;
    if (about && about !== userData.about) payload.about = about;
    if (gender && gender !== userData.gender) payload.gender = gender;
    if (photoUrl && photoUrl !== userData.photoUrl) payload.photoUrl = photoUrl;

    if (Object.keys(payload).length === 0) {
      // No changes, optionally notify user
      return;
    }
    console.log(payload);
    try {
      const response = await axios.patch(
        "http://localhost:3000/profile",
        payload,
        { withCredentials: true }
      );
      dispatch(addUser(response.data.data));
      setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Hide toast after 3 seconds
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };
  return (
    <>
      <div className="flex justify-center my-20">
        <div className="card bg-base-300 w-96 shadow-sm p-5 mr-20">
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              FirstName
            </legend>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter your FirstName"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              LastName
            </legend>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter your LastName"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              Age
            </legend>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter your age"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              Gender
            </legend>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter your Gender"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              About
            </legend>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter about yourself"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend" style={{ fontSize: 13 }}>
              Photo URL
            </legend>
            <input
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
              style={{ height: "28px", fontSize: "13px" }}
            />
          </fieldset>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={handleEdit}
              className="btn mt-5 btn-primary"
              style={{ width: "40%", fontSize: "13px" }}
            >
              Edit Profile
            </button>{" "}
          </div>
        </div>
        <FeedCard
          feed={{ firstName, age, about, photoUrl, lastName, gender }}
        />
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Updated Successfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileForm;
