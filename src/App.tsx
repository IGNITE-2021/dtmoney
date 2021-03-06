import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');
export function App() {

   /** Criando o modal com react-modal */
   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

   function handleOpenNewTransactionModal(){
       setIsNewTransactionModalOpen(true);
   }

   function handleCloseNewTransactionModal(){
       setIsNewTransactionModalOpen(false);
   }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
     />

      <GlobalStyle />
    </>
  );
}
