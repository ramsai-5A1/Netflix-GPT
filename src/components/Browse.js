import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {useSelector} from "react-redux"
import { useEffect } from "react";

const Browse = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect(() => {
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