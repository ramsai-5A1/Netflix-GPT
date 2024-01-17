import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";
import { BACKEND_MOVIES_LIST_URL } from "../utils/constants";
import { addMovies } from "../utils/MoviesSlice";

const Browse = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const getDataFromIMDB = async () => {
        const rawData = await fetch(BACKEND_MOVIES_LIST_URL);
        const data = await rawData.json();
        console.log(data);
        dispatch(addMovies(data));
    }

    useEffect(() => {
        getDataFromIMDB();
        if(!user) {
            navigate("/");
        }
    }, []);
    

    return (
        <div className="">
            <Header/> 
            
        </div>
    )
};

export default Browse;