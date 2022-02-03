import {useState} from 'react'
import TitlePage from './../../components/TitlePage';
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: 32568951,
    situacao: "Ativo"
  },  
  {
    id: 2,
    nome: "Apple",
    responsavel: "Spacer",
    contato: 22343214,
    situacao: "Ativo"
  },  
  {
    id: 3,
    nome: "Motorola",
    responsavel: "Paul Jr",
    contato: 75842569,
    situacao: "Em Análise"
  },  
  {
    id: 4,
    nome: "Samsung",
    responsavel: "Takanada",
    contato: 74859612,
    situacao: "Ativo"
  },  
  {
    id: 5,
    nome: "Logitech",
    responsavel: "Tamagoshi",
    contato: 32589745,
    situacao: "Desativado"
  }
]
export default function ClienteLista() {

  const [termoBusca, setTermoBusca] = useState('')
  const history = useHistory()
  
  const novoCliente = () => {
    history.push('/clientes/detalhe')
  } 
  
  const handleInputChange = (e) => {
    setTermoBusca(e.target.value)
    console.log(termoBusca)
  }

  const clientesFiltrados = clientes.filter((cliente) => {
    return (
      Object.values(cliente)
            .join(' ')
            .toLocaleLowerCase()
            .includes(
              termoBusca.toLocaleLowerCase()
            )
    )
  })


  return (
    <>
      <TitlePage title="Cliente Lista">
        <Button variant='outline-info' onClick={novoCliente}>
          <i className="fas fa-plus me-2"/>
          Novo Cliente
        </Button>
      </TitlePage>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text><i className="fas fa-search me-2"></i>Buscar</InputGroup.Text>
        <FormControl
          onChange={handleInputChange}
          placeholder='Buscar por nome do cliente'
        />
      </InputGroup>
      <table className="table border table-hover text-info">
        <thead className="table-primary text-info">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col" className="d-flex justify-content-around">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <th>{cliente.id}</th>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div className="d-flex justify-content-center ms-3">
                  <button className="btn btn-sm btn-outline-info me-2" onClick={() => history.push(`/clientes/detalhe/${cliente.id}`)}><i className="fas fa-pen me-1"></i>Editar</button> 
                  <button className="btn btn-sm btn-outline-danger"><i className="fas fa-trash me-1"></i>Desativar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
