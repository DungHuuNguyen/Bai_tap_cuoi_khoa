import { Link } from 'react-router-dom';
import './Sidebar.css'
import { APP_ROUTER } from '../../../constants/routes';

const Sidebar = () => {
    return (
        <div className="containerSidebar">
            <div className="containerSidebar__item">
                <p>
                    <Link to={APP_ROUTER.ALL_TASK_PAGE}
                        style={{ color: "white", textDecoration: "none" }}>
                        All Task
                    </Link>
                </p>
            </div>
            <div className="containerSidebar__item">
                <p>
                    <Link to={APP_ROUTER.NEW_TASK_PAGE}
                        style={{ color: "white", textDecoration: "none" }}>
                        New Task
                    </Link>

                </p>
            </div>
            <div className="containerSidebar__item">
                <p>
                    <Link to={APP_ROUTER.DOING_TASK_PAGE}
                        style={{ color: "white", textDecoration: "none" }}>
                        Doing Task
                    </Link>

                </p>
            </div>
            <div className="containerSidebar__item">
                <p>
                    <Link to={APP_ROUTER.DONE_TASK_PAGE}
                        style={{ color: "white", textDecoration: "none" }}>
                        Done Task
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Sidebar;