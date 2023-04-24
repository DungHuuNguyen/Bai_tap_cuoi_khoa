import React from 'react'
import ProductTable from '../../components/ProductTable'
import { useSelector } from 'react-redux'

const AllTaskPage = () => {
    const tasks = useSelector(state => state.tasks.taskList)

    return (
        <div>
            <ProductTable taskList={tasks} />
        </div>
    )
}

export default AllTaskPage