import React from 'react';

export default function Atividade (prop) {
  function prioridadeLabel(param) {
    switch(param) {
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Indefinido'
    }
  }  
  function prioridadeStyle(param, icon) {
    switch(param) {
      case '1':
        return icon ? 'smile' : 'success'
      case '2':
        return icon ? 'meh' : 'primary'
      case '3':
        return icon ? 'frown-open' : 'danger'
      default:
        return icon ? 'circle' : 'warning'
    }
  } 
  return ( 
    <>
    <div className={"card mb-3 shadow-sm border-2 border-" + prioridadeStyle(prop.ativ.prioridade)}>
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <h5 className="card-title">
          <span className="badge rounded-pill bg-secondary me-2">{prop.ativ.id}</span>
          <span className="me-2"> - </span>{prop.ativ.titulo}
        </h5>
        <h6>
          <span className='text-back'>
            Prioridade:
            <span className={'text-'+ prioridadeStyle(prop.ativ.prioridade)}>
            <i className={' ms-1 me-1 far fa-' + prioridadeStyle(prop.ativ.prioridade, true)}></i> 
            {prioridadeLabel(prop.ativ.prioridade)}</span>
          </span>
        </h6>
      </div> 
      <p className="card-text ms-3 mt-3 mb-3">{prop.ativ.descricao}</p>
      <div className="d-flex justify-content-end pt-2 m-0 border-top">    
        <button 
          className="btn btn-sm btn-outline-primary btn-lg me-2" 
          onClick={() => prop.pegarAtividade(prop.ativ.id)}>
            <i className="fas fa-pen me-2"></i>
            Editar
        </button>
        <button 
          className="btn btn-sm btn-outline-danger btn-lg" 
          onClick={() => prop.deletarAtividade(prop.ativ.id)}
        > 
          <i className="fas fa-trash me-2"></i>
          Deletar
        </button>
      </div>
    </div>
  </div>
    </>
  )
}