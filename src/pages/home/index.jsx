import { Link } from "react-router-dom";

const Home = () => {
    return <div className="screenBlue">
            <Link to={`move-task`}>Move task</Link>
        </div>
}

export default Home;