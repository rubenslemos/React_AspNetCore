import {useHistory, useParams} from 'react-router-dom'
import TitlePage from '../../components/TitlePage';
import { Button } from 'react-bootstrap';

export default function ClienteForm() {

  let history = useHistory()
  let {id} = useParams()

  return (
    <>
      <TitlePage title={"Cliente Detalhes " + (id !== undefined ? id : '')}>
      <Button variant='outline-info' onClick={()=> history.push('/clientes/lista')}>
          <i className="fas fa-reply me-2"/>
          Voltar
        </Button>
      </TitlePage>
      <div></div>  
    </>
  )
}
