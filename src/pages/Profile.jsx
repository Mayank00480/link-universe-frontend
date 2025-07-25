import { useSelector } from "react-redux";
import EditProfileCard from "../components/EditProfileCard";
import EditProfileForm from "../components/EditProfileForm";


const Profile = () => {
  const userData = useSelector((state) => state.user);
  
  return (
    <>
    {userData && <EditProfileForm userData = {userData} />}
    </>
  )
};
export default Profile;
