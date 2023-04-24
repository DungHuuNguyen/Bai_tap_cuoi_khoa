import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../constants/routes';

const ProductTable = ({ taskList }) => {
    const navigate = useNavigate();
    const handleGoDetailTask = (id) => {
        navigate(generatePath(APP_ROUTER.DETAIL_TASK_PAGE, { idTask: id }))
    }

    const renderProductList = (tasks) => {
        return tasks?.map((task, index) => {
            return (
                <div key={index} className='containerItem'>
                    <div
                        className='containerItem__title'
                        onClick={() => handleGoDetailTask(task.id)}
                    ><p style={{ fontWeight: "bold" }}>Title:</p> <p>{task.title}</p>
                    </div>
                    <div className='containerItem__creator'>
                        <p style={{ fontWeight: "bold" }}>Creator:</p> <p>{task.creator}</p>
                    </div>
                    <div className='containerItem__status'>
                        <p style={{ fontWeight: "bold" }}>Status:</p> <p>{task.status}</p>
                    </div>
                    <hr className="containerItem__lineBreak" />
                    <div className="containerItem__description">
                        <p style={{ fontWeight: "bold" }}>Description:</p> <p>{task.description}</p>
                    </div>
                </div>
            )
        })
    }

    console.log(taskList);
    return (
        <div className='containerBody'>
            {renderProductList(taskList)}
        </div>
    )
}

export default ProductTable