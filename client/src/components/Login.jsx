
import { useState } from 'react'
import camionAbeja from '../assets/imgs/Camion-Abeja.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [formErrors, setFormErrors] = useState({})
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // Función para alternar mostrar/ocultar contraseña
    const toggleShowPassword = () => setShowPassword(!showPassword)
    const navigate = useNavigate()

    // Maneja el cambio de cada input y actualiza el estado del formulario
    function handleInputChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormErrors({})

        // Validación de campos vacíos
        const errors = {}
        if (!formData.email) {
            errors.email = 'Debe ingresar su Email'
        }
        if (!formData.password) {
            errors.password = 'Debe ingresar su Contraseña'
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }

        try {
            const response = await axios.post('/login', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            // const resJSON = await response.json()
            // console.log('Respuesta de la API:', resJSON)

            if (response.data.message == 'Authorized') {
                alert('Logead')
                console.log('Login con éxito:', formData)
                setFormData({ email: '', password: '' })
                navigate('/tutos') // Redirige a la ruta deseada
            } else {
                setFormErrors({ general: 'Credenciales incorrectas' })
                console.log('Respuesta de la API:', response.data) // Verifica la respuesta
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            setFormErrors({ general: 'Error en la conexión' })
        }
    }

    function closeSuccessModal() {
        setSuccessModalIsOpen(false)
    }

    return (
        <>
            <div className="flex content-center justify-center flex-col md:flex-row  w-full h-full xl:fixed">
                <div className="flex justify-center  xl:w-full md:w-1/2  hidden xl:block bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg shadow-lg ">
                    <div className="flex justify-center items-center pt-[6%]  w-full">
                        <h1 className=" text-4xl font-semibold text-black ">
                            <Link to="/" className="text-[#ffb200] p-2 hover:shadow-lg">
                                Pikapak
                            </Link>
                        </h1>
                    </div>
                    <img
                        src={camionAbeja}
                        alt="Camion-Abeja"
                        className="w-[65%] xl:mt-[7%]  m-auto"
                    />
                </div>
                <div className="flex flex-col justify-center xl:w-[70rem] items-center text-white  m-2 xl:mt-[2rem] ">
                    <div className="xl:hidden flex justify-center items-center   w-full">
                        <h1 className=" text-3xl font-semibold text-black my-2">
                            <Link to="/" className="text-[#ffb200] hover:shadow-lg">
                                Pikapak
                            </Link>
                        </h1>
                    </div>
                    <div className="xl:m-4">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col    rounded-xl shadown-xl p-8 xl:px-8  justify-center border-2 border-[#3C047B] border-solid shadow-xl">

                            <div className="flex flex-wrap w-full xl:mb-4">
                                <div className="flex w-full ">

                                    <div className="flex w-full mb-6">
                                        {/* Email Input */}
                                        <div className='w-full'>
                                            <label className="block text-black text-sm font-bold mb-2 " htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                className="appearance-none border rounded min-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Ej. micorreo@mail.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />

                                            {formErrors.email && (
                                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-4">
                                    <label className="block text-black text-sm font-bold mb-2 " htmlFor="password">
                                        Contraseña
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        // Alternar entre 'text' y 'password'
                                        name="password"
                                        placeholder="Escriba su contraseña 6 digitos"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    {/* Icono para mostrar/ocultar la contraseña */}
                                    <span className=" absolute cursor-pointer text-gray-700 z-0 mt-2 ml-2" onClick={toggleShowPassword}>
                                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {formErrors.password
                                        && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                                        )}
                                </div>

                                {/* Mostrar error general */}
                                {formErrors.general && (
                                    <p className="text-red-500 text-sm text-center ">{formErrors.general}</p>
                                )}
                            </div>


                            {/* Submit Button */}
                            <div className="xl:mb-2 w-full flex-wrap flex justify-center ">
                                <button
                                    className="xl:w-1/2 bg-[#3C047B] text-pink-300 hover:bg-[#3C028B] hover:text-white font-sans text-white font-bold px-4 py-2 mb-4 xl:mb-0 rounded flex-wrap focus:outline-none focus:ring-2 focus:white hover:shadow-xl"
                                    type="submit"
                                >
                                    Iniciar Sesion
                                </button>
                            </div>

                            {/* Toggle Link */}
                            <div className="inline justify-center w-full">
                                <p className="w-full inline text-center text-gray-500 text-sm ">
                                    {/* {isLogin ? ( */}
                                    <span className="flex w-full gap-4 justify-center mb-2">
                                        ¿No tienes una cuenta?{' '}

                                        <Link to="/users" className="text-[#3C043B] self-center  h-full   hover:text-[#930f7f] focus:outline-none hover:underline  hover:text-[#930f7f]" >
                                            Regístrate
                                        </Link>
                                    </span>

                                </p>
                                <p className="w-full inline text-center text-gray-500 text-sm">
                                    <span className="flex w-full gap-4 justify-center">
                                        <Link to="/users/recovery" className="text-[#3C043B] self-center  h-full   hover:text-[#930f7f] focus:outline-none hover:underline  hover:text-[#930f7f]" >
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Modal de éxito */}
            {successModalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h4 className="text-xl font-semibold mb-2">¡Registro exitoso!</h4>
                        <p className="text-gray-600 mb-4">Gracias por registrarte. Te enviaremos un mail de confirmación a la brevedad.</p>
                        <button
                            onClick={closeSuccessModal}
                            className="px-4 py-2 bg-[#ffb200] hover:bg-[#e8a200] text-white rounded-md">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
export default Login;
