import { useState, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap'
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm';
import api from '../../api/atividade'
import TitlePage from './../../components/TitlePage';
function Atividade() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smDeleteModal, setSmDeleteModal] = useState(false);
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id: 0})
 
  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);
  const handleConfirmModal = (id) => {
    if(id !== 0 && id !== undefined ) { 
      const atividade = atividades.filter((atividade) => atividade.id === id)
      setAtividade(atividade[0])
    } else {
      setAtividade({ id: 0 })
    }
    setSmDeleteModal(!smDeleteModal)
  }
  
  const pegarTodasAtividades = async () => {
    const response = await api.get('atividade')
    return response.data
  }
  useEffect(() => {
    const getAtividades = async () =>{
      const todasAtividades = await pegarTodasAtividades()
      if (todasAtividades) setAtividades(todasAtividades)
    }
    getAtividades()
  },[])

  const addAtividade = async (ativ) => {
    const response = await api.post('atividade', ativ)
  
    setAtividades([...atividades, response.data])
    handleAtividadeModal()
    console.log(atividades)
  }
  const novaAtividade = () => {
    setAtividade({id: 0})
    handleAtividadeModal()
  }
  const atualizarAtividade= async (ativ) => {
    const response = await api.put(`atividade/${ativ.id}`, ativ)
    const {id} = response.data
    setAtividades(atividades.map((item) => item.id === id ? response.data : item))
    setAtividade({ id: 0 })
    handleAtividadeModal()
    
  }

  const cancelarAtividade = () => {
    setAtividade({ id: 0 })
    handleAtividadeModal()
  }

  const deletarAtividade = async (id) => {
    if(await api.delete(`atividade/${id}`))
      {
        const atividadesFiltradas = atividades.filter((atividade) => atividade.id !== id)
        setAtividades([...atividadesFiltradas])
      }
  }
  const pegarAtividade = (id) => {
    const atividade = atividades.filter((atividade) => atividade.id === id)
    setAtividade(atividade[0])
    handleAtividadeModal()
  }
  return (
    <>
      <TitlePage
        title={'Atividade' + (atividade.id !== 0 ? atividade.id : '')}
        novaAtividade={novaAtividade}
      >
        <Button variant="outline-secondary" size="small" onClick={novaAtividade}>
          <i className="fas fa-plus me-2"></i>
          Atividade
        </Button>
      </TitlePage>
      <AtividadeLista
        atividades={atividades}
        pegarAtividade={pegarAtividade}
        handleConfirmModal={handleConfirmModal}
      />
      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Atividade {atividade.id !== 0 ? atividade.id : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
            atualizarAtividade={atualizarAtividade}
            ativSelecionada={atividade}
            atividades={atividades}
          />
        </Modal.Body>
      </Modal>
      <Modal
        show={smDeleteModal} 
        onHide={handleConfirmModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Excluindo Atividade{' '}
            {atividade.id !== 0 ? atividade.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja Excluir a Atividade {atividade.id}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="outline-success me-2" 
            size="sm"
            onClick={() => { 
              deletarAtividade(atividade.id)
              handleConfirmModal()
            }}
          >
            <i className="far fa-thumbs-up me-2"/>
            Sim
          </Button>
          <Button 
            variant="outline-danger me-2" 
            size="sm"
            onClick={() => handleConfirmModal(0)}
          >
            <i className="far fa-thumbs-down me-2"/>
            Não
          </Button>
        </Modal.Footer>  
      </Modal>
    </>
  );
}

export default Atividade;

