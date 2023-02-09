import logo from './logo.svg';
import './App.css';
import api from './api'
import React, { useState, useEffect, useContext, } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Toast, ToastBody } from 'react-bootstrap/';
import 'react-toastify/dist/ReactToastify.css';

const MessageContext = React.createContext('')

function App() {

  const [message, setMessage] = useState('');

  const handleErrors = (err) => {
    toast(err)
  }

  return (
    <MessageContext.Provider value = {{handleErrors}}>
      <div className="App">
        <Main></Main>
        <ToastContainer autoClose={5000}/>
      </div>
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
    <div>
      {console.log(userData)}
    </div>
  )

}

export default App;
