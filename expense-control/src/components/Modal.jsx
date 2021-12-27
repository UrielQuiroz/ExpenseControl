import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';


const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    const [ categoria, setCategoria ] = useState('');
    
    const cerrarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarBtn} 
                     alt="cerrar modal"
                     onClick={cerrarModal} />
            </div>

            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre del Gasto</label>
                    <input type="text"
                            id='nombre'
                            placeholder='Añade el Nombre del Gasto'
                            value={nombre}
                            onChange={ e => setNombre(e.target.value)} />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number"
                            id='cantidad'
                            placeholder='Añade la cantidad del Gasto: ej. 300'
                            value={cantidad}
                            onChange={ e => setCantidad(Number(e.target.value))} />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria"
                            value={categoria}
                            onChange={ e => setCategoria(e.target.value) } >
                        <option value="">-- SELECCIONE --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos en General</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>
                    </select>
                </div>

                <input type="submit"
                        value="Añadir Gasto" />
            </form>

        </div>
    )
}

export default Modal


