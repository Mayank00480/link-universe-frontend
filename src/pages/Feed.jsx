import axios from "axios";
import { addFeed } from "../store/feedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FeedCard from "../components/FeedCard";

const Feed = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feed);
    const getFeed = async() => {
        try{
            const response = await axios.get("http://localhost:3000/feed", {
                withCredentials: true
            })
            console.log(response.data.data , "FeedData");
            dispatch(addFeed(response.data.data));
        }
        catch(err){
            console.error("Error fetching feed:", err);
        }
    }

    useEffect(() => {
        if(!feedData){
            getFeed();
        }
    },[])

    return <div className="w-full flex justify-center items-center my-20">
        {feedData && <FeedCard feed={feedData?.[0]} />}
    </div>
}
export default Feed;