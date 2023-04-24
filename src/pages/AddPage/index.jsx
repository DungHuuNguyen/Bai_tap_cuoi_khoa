import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productFormSchema } from '../../validations/productFormSchema'
import { useDispatch } from 'react-redux'
import { actAddTask } from '../../redux/features/task/taskSlice'
import { makeRandomId } from '../../util'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../constants/routes'
import { STATUS } from '../../constants/common'

const initialFormValues = {
    title: '',
    creator: '',
    createAt: '',
    status: STATUS.NEW,
    description: '',
}
const AddPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(productFormSchema)
    });

    const { control, handleSubmit, formState: { errors }, reset } = methods;

    const onValid = (values) => {
        const task = {
            ...values,
            id: makeRandomId(),

        }
        dispatch(actAddTask(task))
        reset(initialFormValues)
        handleGoAllTask()
    };

    const handleGoAllTask = () => {
        navigate(`${APP_ROUTER.ALL_TASK_PAGE}`)
    }

    console.log(errors);

    return (
        <div className='formClassContainer'>
            <form onSubmit={handleSubmit(onValid)}>
                <InputText
                    label={'Title'}
                    placeholder={'Input title'}
                    name={'title'}
                    control={control}
                />
                {!!errors.title && <p style={{ color: "red", fontSize: 12 }}> {errors.title?.message} </p>}

                <InputText
                    label={'Creator'}
                    placeholder={'Input creator'}
                    name={'creator'}
                    control={control}
                />
                {!!errors.creator && <p style={{ color: "red", fontSize: 12 }}> {errors.creator?.message} </p>}

                <InputText
                    label={'Create At'}
                    placeholder={'Input creat at'}
                    name={'createAt'}
                    control={control}
                />
                {!!errors.createAt && <p style={{ color: "red", fontSize: 12 }}> {errors.createAt?.message} </p>}

                <InputText
                    label={'Description'}
                    placeholder={'Input description'}
                    name={'description'}
                    control={control}
                />
                {!!errors.description && <p style={{ color: "red", fontSize: 12 }}> {errors.description?.message} </p>}

                <Button label={'Save'} />
            </form>
        </div>
    )
}

export default AddPage