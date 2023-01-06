 import { Formik,Form,Field,ErrorMessage } from 'formik';
 import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(), 
    password: yup.string().min(4).max(10).required(),
})

const initialValues = {
    login: '',
    password: ''
}

export const Formics = () => {
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     const {login,password} = evt.target.elements
    //     console.log("🚀  password", password.value);
    //     console.log("🚀  login", login.value);
        
    // }
    const handleSubmit = (values, actions) => {
    console.log("🚀  actions", actions);
    console.log("🚀  values", values);
    actions.resetForm()
        
    }
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
          <Form autoComplete="off"
                // onSubmit={handleSubmit}
            >Login
            <label htmlFor="login">
                    <Field type="text" name="login" />
                    <ErrorMessage component="div" name="login"/>
                </label>
                <br />
            <label htmlFor="password">Password
                    <Field type="text" name="password" />
                    <ErrorMessage component="div" name="password"/>
            </label>
            
            <br />
            <button type="submit">Отправить</button>
            </Form>
           </Formik> 
    )
}