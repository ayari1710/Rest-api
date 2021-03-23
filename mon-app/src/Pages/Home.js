import React from 'react'
import {useDispatch}from 'react-redux'
import Contactlist from '../components/Contactlist'
import {addcontact} from '../action/edit'
import { Link } from 'react-router-dom'
import {  getcontacts } from '../action/contact'
import './home.css'
const Home = () => {
    const dispatch = useDispatch()
    return (
        <div className="home">
            <Link  to="/add">
            <button className="button1"  onClick={()=>dispatch(addcontact())}>Ajouter les contacts </button>
            </Link>
           <Link to="/contacts">
            <button className="button2" >Mes contats</button>
            </Link>
 
   </div>
    )
}

export default Home
