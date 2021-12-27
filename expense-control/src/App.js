import { useState } from 'react'
import Header from './components/Header';
import iconNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ presupuestoValido, setPresupuestoValido ] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />

      {presupuesto && (
        <div className="nuevo-gasto">
          <img src={iconNuevoGasto} alt="icono nuevo gasto" />
        </div>
      )}
    </div>
  );
}

export default App;
