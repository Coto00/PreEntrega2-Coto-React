
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Contacto = () => {
        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [email, setEmail] = useState('');
        const [telefono, setTelefono] = useState('');
        const [consulta, setConsulta] = useState('');
        const [consultaId, setConsultaId] = useState('');
        const [errors, setErrors] = useState({ nombre: false, apellido: false, email: false, telefono: false, consulta: false });
        const [isSubmitted, setIsSubmitted] = useState(false);

        const validarCampos = () => {
            const nuevosErrores = {
                nombre: nombre.trim() === '',
                apellido: apellido.trim() === '',
                email: email.trim() === '',
                telefono: telefono.trim() === '',
                consulta: consulta.trim() === '',
            };
            setErrors(nuevosErrores);
    
            return !Object.values(nuevosErrores).includes(true);
        };
    
        const generarConsulta = () => {
            if (!validarCampos()) {
                return;
            }
    
            const buyer = { nombre, apellido, email, telefono, consulta };
            const date = new Date();
            const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const consult = { buyer, date: currentDate };
    
            const db = getFirestore();
            const ordersCollection = collection(db, 'consult');
            addDoc(ordersCollection, consult).then(({ id }) => {
                setConsultaId(id);
                setIsSubmitted(true);
                clear();
            });
        };
    
        const clear = () => {
            setNombre('');
            setApellido('');
            setEmail('');
            setTelefono('');
            setConsulta('');
        };
    
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="well well-sm">
                            <section>
                                <h1 className="text-center text-uppercase py-3">Contacto</h1>
                                {isSubmitted ? (
                                    <div className="alert alert-light text-center" role="alert">
                                        Tu consulta está siendo revisada. ID de Consulta: <b>{consultaId}</b>
                                    </div>
                                ) : (
                                    <form className="form-horizontal" onSubmit={(e) => { e.preventDefault(); generarConsulta(); }}>
                                        <div className="mb-3">
                                            <label htmlFor="fname" className="form-label">
                                                <i className="bi bi-person bigicon"></i>
                                            </label>
                                            <input
                                                id="fname"
                                                type="text"
                                                placeholder="Nombre"
                                                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                            />
                                            {errors.nombre && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lname" className="form-label">
                                                <i className="bi bi-person bigicon"></i>
                                            </label>
                                            <input
                                                id="lname"
                                                type="text"
                                                placeholder="Apellido"
                                                className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                                                value={apellido}
                                                onChange={(e) => setApellido(e.target.value)}
                                            />
                                            {errors.apellido && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                <i className="bi bi-envelope bigicon"></i>
                                            </label>
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">
                                                <i className="bi bi-telephone bigicon"></i>
                                            </label>
                                            <input
                                                id="phone"
                                                type="text"
                                                placeholder="Telefono"
                                                className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                                value={telefono}
                                                onChange={(e) => setTelefono(e.target.value)}
                                            />
                                            {errors.telefono && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">
                                                <i className="bi bi-pencil-square bigicon"></i>
                                            </label>
                                            <textarea
                                                id="message"
                                                placeholder="Introduzca su consulta."
                                                rows="7"
                                                className={`form-control ${errors.consulta ? 'is-invalid' : ''}`}
                                                value={consulta}
                                                onChange={(e) => setConsulta(e.target.value)}
                                            />
                                            {errors.consulta && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-dark">Enviar</button>
                                        </div>
                                    </form>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Contacto;