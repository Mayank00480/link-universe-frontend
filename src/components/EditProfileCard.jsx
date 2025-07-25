import FeedCard from "./FeedCard";

const EditProfileCard = ({firstName , lastName , gender,age ,about , photoUrl , skills}) => {
    const userData = {
        firstName,lastName,gender,age ,about , photoUrl , skills}
    return<FeedCard feed = {userData}/>
}

export default EditProfileCard;