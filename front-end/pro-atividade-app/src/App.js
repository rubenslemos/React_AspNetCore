import './App.css';
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom';
import Cliente from "./pages/clientes/Cliente";
import ClienteForm from "./pages/clientes/ClienteForm";
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound'

export default function App() {
  
  return (
    <>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/atividades/lista' component={Atividade} />
        <Route path='/clientes/lista' component={Cliente} />
        <Route path='/clientes/detalhe/:id?' component={ClienteForm} />
        <Route component={PageNotFound}/>
      </Switch>
    </>
  );
}

