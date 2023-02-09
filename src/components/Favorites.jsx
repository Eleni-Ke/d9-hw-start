import { useDispatch, useSelector } from "react-redux";


const Favorites = () => {
    let favorites = useSelector((state) => state.favorites.content)

    const dispatch = useDispatch()

    return (
        
    )
};

export default Favorites;
