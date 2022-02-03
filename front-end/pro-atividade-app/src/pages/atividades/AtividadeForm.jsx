import {useState, useEffect} from 'react';

const atividadeInicial = {
  "id": 0 ,
  "titulo": '',
  "descricao": '',
  "prioridade":0
}
export default function AtividadeForm (props) {
  const [atividade, setAtividade] = useState(atividadeAtual())

  useEffect(() => {
    if(props.ativSelecionada.id !== 0)
    setAtividade(props.ativSelecionada)
  },[props.ativSelecionada])

  const InputTextHandler = (e) => {
    const {name, value} = e.target
    setAtividade({...atividade, [name]: value})
  }

  const handleSubmit= (e) => {
    e.preventDefault()

    if(props.ativSelecionada.id !== 0)  
      props.atualizarAtividade(atividade) 
    else 
      props.addAtividade(atividade)
    
    setAtividade(atividadeInicial)
  }

  const handleCancelar = (e) => {
    e.preventDefault()

    props.cancelarAtividade()

    setAtividade(atividadeInicial)
  }
  function atividadeAtual(){
    if (props.ativSelecionada.id !== undefined){
      return props.ativSelecionada
    }
    else{
      return atividadeInicial
    }
  }


  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}> 
        <div className="col-md-8">
          <label className="form-label">Titulo</label>
          <input 
            type="text" 
            name="titulo" 
            value={atividade.titulo === undefined ? atividade.titulo='' : atividade.titulo} 
            onChange={InputTextHandler} 
            id="titulo" 
            className="form-control"
          />
        </div>        
        <div className="col-md-4">
          <label className="form-label">Prioridade</label>
          <select 
            name="prioridade" 
            value={atividade.prioridade}
            onChange={InputTextHandler} 
            id="prioridade" 
            className="form-select" 
          >
            <option value="Indefinido">Selecionar...</option>
            <option value="Baixa">Baixa</option>
            <option value="Normal">Normal</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea 
            type="text" 
            name="descricao" 
            value={atividade.descricao === undefined ? atividade.descricao='' : atividade.descricao} 
            onChange={InputTextHandler} 
            id="descricao" 
            className="form-control"
          />
          <hr/>
        </div>
        <div className=" d-flex justify-content-end mt-0">
          {
            atividade.id === 0 ?
            <button 
              className="btn btn-sm btn-outline-success" 
              type="submit"
            >
              <i className="fas fa-plus me-2"></i>
              Salvar
            </button>
            :
            <>
              <button 
                className="btn btn-sm btn-outline-success" 
                type="submit"
              >
                <i className="fas fa-plus me-2"></i>
                Salvar
              </button>
              <button 
                className="ms-2 btn btn-sm btn-outline-warning" 
                onClick={handleCancelar}
              >
                <i className="fas fa-minus me-2"></i>
                Cancelar
              </button>
            </>
          }
        </div>
      </form>
    </>
  );
}
