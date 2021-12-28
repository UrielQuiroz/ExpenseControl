import { useState, useEffect } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers';
import iconNuevoGasto from './img/nuevo-gasto.svg';
import { object } from 'prop-types';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ presupuestoValido, setPresupuestoValido ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ animarModal, setAnimarModal ] = useState(false);

  const [ gastos, setGastos ] = useState([]);

  const [ gastoEditar, setGastoEditar ] = useState({});

  useEffect( () => {
    if( Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto();
    }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true);
    
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
    
  }
  
  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);

    setTimeout(() => {
        setModal(false);
    }, 500);

  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
        gastos={gastos}
      />

      {presupuestoValido && (
        <>
            <main>
                <ListadoGastos
                    gastos={gastos}
                    setGastoEditar={setGastoEditar} />
            </main>
            <div className="nuevo-gasto">
                <img 
                    src={iconNuevoGasto} 
                    alt="icono nuevo gasto"
                    onClick={handleNuevoGasto} />
            </div>
        </>
      )}

      {modal && <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto} /> }

    </div>
  );
}

export default App;
