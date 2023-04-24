import { createSlice } from "@reduxjs/toolkit";
import { KEY_TASK_LIST } from "../../../constants/common";

const initialState = {
    taskList: JSON.parse(localStorage.getItem(KEY_TASK_LIST)) || [],
    taskDetail: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        actAddTask: (state, action) => {
            const _taskList = [...state.taskList, action.payload];

            state.taskList = _taskList;
            localStorage.setItem(KEY_TASK_LIST, JSON.stringify(_taskList))
        },
        actDeleteTaskById: (state, action) => {
            const id = action.payload;
            const _taskList = state.taskList.filter(task => task.id !== id);
            state.taskList = _taskList;
            localStorage.setItem(KEY_TASK_LIST, JSON.stringify(_taskList))
        },
        actUpdateDetailTask: (state, action) => {
            const id = action.payload;
            const task = state.taskList.find(task => task.id === id);
            if (task) {
                state.taskDetail = task;
            }
        },
        actUpdateTask: (state, action) => {
            const { id, task } = action.payload;
            const existedindexTask = state.taskList.findIndex(task => task.id === id);
            const _taskList = [...state.taskList];
            if (existedindexTask !== -1) {
                _taskList[existedindexTask] = {
                    ..._taskList[existedindexTask],
                    ...task,
                };
                state.taskList = _taskList;
            }
        },
    }
});


export const { actAddTask, actDeleteTaskById, actUpdateDetailTask, actUpdateTask } = taskSlice.actions;
export default taskSlice.reducer;