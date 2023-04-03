
import Wrapper from '../assets/wrappers/PublicRegistration'
import { FaMobile } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const PublicLog = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            mobile: '',
            password: ''
        },
        validationSchema: Yup.object({
            mobile: Yup.string().required("Please Enter  mobile number"),
            password: Yup.string().required("Please Enter your password"),

        }),
        onSubmit: (values, { resetForm }) => {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };

            fetch('http://localhost:8080/api/publicreg/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.result === "failed") {
                        toast.error(data.message)
                    }
                    if (data.result === "Done") {
                        toast.success("welcome " + data?.data?.name)
                        resetForm();
                        navigate(`/public-welcome/${data?.data?.name}`)
                    }
                });
        }
    });


    return (
        <Wrapper>
            <div className='container page'>
                {/* info */}
                <div className='info'>

                    <h2>Welcome to <span>Meri Panchayat</span>
                    </h2>
                </div>
                <div className="card">
                    <h3>Citizen Login</h3>
                    <form onSubmit={formik.handleSubmit}>

                        {/* Mobile Number */}
                        <div className='form-row'>
                            <FaMobile className='input-icons' />
                            <input
                                type="string"
                                placeholder='Enter Mobile Number'
                                className='form-input'
                                name='mobile' id='mobile'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}

                            />
                        </div>
                        {formik.errors.mobile && formik.touched.mobile && (
                            <p className='error'>{formik.errors.mobile}</p>
                        )}

                        {/* password */}
                        <div className='form-row'>
                            <RiLockPasswordFill className='input-icons' />
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='form-input'
                                name='password' id='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <p className='error'>{formik.errors.password}</p>
                        )}

                        <div className='form-row'>
                            <button type="submit" className="btn signup-btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicLog
