import { useState } from 'react';

function FormContact() {

    const [formErrors, setFormErrors] = useState({});
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        whatsapp: ''
    });


    // Maneja el cambio de cada input y actualiza el estado del formulario
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Validaciones de los campos
    function validateForm() {
        const errors = {};

        // Validación para el nombre
        const nameRegex = /^[A-Za-z\s]+$/; // Expresión regular que permite solo letras y espacios
        if (!formData.name.trim()) {
            errors.name = 'El nombre es obligatorio.';
        } else if (formData.name.length < 2) {
            errors.name = 'El nombre debe tener al menos 2 caracteres.';
        } else if (!nameRegex.test(formData.name)) {
            errors.name = 'El nombre no debe contener números ni caracteres especiales.';
        }

        // Validación para el email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'El correo electrónico es obligatorio.';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Por favor, introduce un correo electrónico válido.';
        }

        // Validación para el WhatsApp (Argentina)
        const whatsappRegex = /^(\+54\s?)?(\d{10})$/; // Permite +54 opcional y 10 dígitos
        if (!formData.whatsapp.trim()) {
            errors.whatsapp = 'El número de WhatsApp es obligatorio.';
        } else if (!whatsappRegex.test(formData.whatsapp)) {
            errors.whatsapp = 'Por favor, introduce un número de WhatsApp válido de Argentina (ej: +54 9 11 1234-5678).';
        }

        // Validación para el mensaje
        if (!formData.message.trim()) {
            errors.message = 'El mensaje es obligatorio.';
        } else if (formData.message.length < 15) {
            errors.message = 'El mensaje debe tener al menos 15 caracteres.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Retorna true si no hay errores
    }

    // Maneja el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado con éxito:', formData);
            // setModalContactIsOpen(false); // Cierra el modal de formulario
            setSuccessModalIsOpen(true); // Abre el modal de éxito

            // Reseteo
            setFormData({
                name: '',
                email: '',
                message: '',
                whatsapp: ''
            });
        }
    }
    function closeSuccessModal() {
        setSuccessModalIsOpen(false);
    }


    return (
        <div className="container mb-36 xl:py-[5rem]  xl:p-6 xl:my-[4rem]  items-center h-screen" id='contact'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

                {/* Columna izquierda: Texto descriptivo */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 xl:text-[54px] font-gibson font-extrabold xl:leading-[4.5rem] leading-[2.5rem] text-center">Si tenés un comercio o vendes productos, dejanos tus datos y te contactamos para adherirte.</h2>
                </div>

                {/* Columna derecha: Formulario */}
                <div className="bg-white p-8 rounded-xl shadow-xl m-4 border">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Nombre y Apellido</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {formErrors.name && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">WhatsApp</label>
                            <input
                                type="text"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                            {formErrors.whatsapp && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.whatsapp}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows="4"
                                placeholder='Cuéntanos brevemente sobre tu negocio.'
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            {formErrors.message && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                            )}
                        </div>

                        <div className="flex justify-end space-x-4">

                            <button
                                type="submit"
                                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded-md">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>

            </div>



            {/* Modal de éxito */}
            {successModalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h4 className="text-xl font-semibold mb-2">¡Formulario Enviado!</h4>
                        <p className="text-gray-600 mb-4">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                        <button
                            onClick={closeSuccessModal}
                            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded-md">
                            Cerrar
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default FormContact;
