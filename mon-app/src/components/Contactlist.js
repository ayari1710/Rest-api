import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getcontacts} from '../action/contact';
import ContactCard from './ContactCard';
import {Spinner}from 'react-bootstrap'

const Contactlist = ({inputsearch}) => {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contactReducer.contactList);
    const load = useSelector(state => state.contactReducer.load);
    
    console.log(contacts)

    useEffect(() => {
        dispatch(getcontacts()); 
    }, [dispatch]);
    return (
<div style={{display:"flex",justifyContent:"space-around"}}>

{load?<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> : contacts.filter(el=>el.name.toLowerCase().includes(inputsearch.toLowerCase())).map((el)=><ContactCard el={el} key={el._id}></ContactCard>)  }  
</div>
  )
};
     export default Contactlist ;