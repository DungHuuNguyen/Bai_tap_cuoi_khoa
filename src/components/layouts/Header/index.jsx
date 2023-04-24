import { useNavigate } from 'react-router-dom';
import './Header.css'
import { APP_ROUTER } from '../../../constants/routes';

const Header = () => {
    const navigate = useNavigate();

    const handleGoAddTask = () => {
        navigate(`${APP_ROUTER.ADD_PAGE}`)
    }
    return (
        <div className="containerHeader">
            <div className="containerHeader__left">
                <button onClick={handleGoAddTask}> Create New Task</button>
            </div>
            <div className="containerHeader__right">
                <input placeholder="Type something to search" />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Header;