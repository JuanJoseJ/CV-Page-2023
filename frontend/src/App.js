import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './api'
import React, { useState, useEffect, useContext, } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Toast, ToastBody } from 'react-bootstrap/';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutCV } from './components/layouts';

const MessageContext = React.createContext('')

function App() {

  const handleErrors = (err) => {
    toast(err)
  }

  return (
    <MessageContext.Provider value = {{handleErrors}}>
      <Main></Main>
      <ToastContainer autoClose={5000}/>
    </MessageContext.Provider>
  );
}

function Main() {

  const { handleErrors } = useContext(MessageContext);

  const [userData, setUserData] = useState({})

  useEffect(() => {
    async function getInitData(){
      try {
        const data = await api.getData();
        setUserData(data)
      } catch (error) {
        handleErrors(error)
      }
      
    }
    getInitData()
  }, [])

  return(
    <LayoutCV></LayoutCV>
  )

}

export default App;
