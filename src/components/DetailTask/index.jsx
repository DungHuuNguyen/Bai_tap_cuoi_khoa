import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { APP_ROUTER } from '../../constants/routes';
import Button from '../Button';
import { actDeleteTaskById, actUpdateDetailTask, actUpdateTask } from '../../redux/features/task/taskSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { productFormSchema } from '../../validations/productFormSchema';
import InputText from '../InputText';
import { STATUS } from '../../constants/common';

const initialFormValues = {
    title: '',
    creator: '',
    createAt: '',
    description: '',
    status: STATUS,
}
const DetailTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { idTask } = useParams()
    const taskDetails = useSelector(state => state.tasks.taskDetail)

    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(productFormSchema)
    });

    const { control, handleSubmit, formState: { errors }, reset } = methods;

    const onValid = (values) => {

        dispatch(actUpdateTask({ id: idTask, task: values }))
        reset(initialFormValues)
        handleGoAllTask()
    };

    const handleGoAllTask = () => {
        navigate(`${APP_ROUTER.ALL_TASK_PAGE}`)
    }

    useEffect(() => {
        dispatch(actUpdateDetailTask(idTask))
        // eslint-disable-next-line
    }, [idTask])

    useEffect(() => {
        reset(taskDetails)
    }, [taskDetails, reset])

    console.log(idTask);
    const handleDeleteTaskById = () => {
        dispatch(actDeleteTaskById(idTask))
    }

    console.log(errors);

    return (
        <div className='formClassContainer'>
            <form onSubmit={handleSubmit(onValid)}>
                <InputText label={'Title'} placeholder={'Input title'} name={'title'} control={control} />
                {!!errors.title && <p style={{ color: "red", fontSize: 12 }}> {errors.title?.message} </p>}

                <InputText label={'Creator'} placeholder={'Input creator'} name={'creator'} control={control} />
                {!!errors.creator && <p style={{ color: "red", fontSize: 12 }}> {errors.creator?.message} </p>}

                <InputText label={'Create At'} placeholder={'Input creat at'} name={'createAt'} control={control} />
                {!!errors.createAt && <p style={{ color: "red", fontSize: 12 }}> {errors.createAt?.message} </p>}

                <InputText label={'Description'} placeholder={'Input description'} name={'description'} control={control} />
                {!!errors.description && <p style={{ color: "red", fontSize: 12 }}> {errors.description?.message} </p>}

                <div style={{ display: 'flex', gap: 60 }}>
                    <Button label={'Save'} />
                    <Button label={'Delete'} onClick={handleDeleteTaskById} />
                </div>
            </form>
        </div>
    )
}

export default DetailTask