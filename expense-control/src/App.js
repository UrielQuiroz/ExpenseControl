import { useState } from 'react'
import Header from './components/Header';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ presupuestoValido, setPresupuestoValido ] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido} />
    </div>
  );
}

export default App;
