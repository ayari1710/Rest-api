import React , { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { editcontact, postContact } from '../action/contact';

const Add = () => {
  const dispatch = useDispatch();
  const handlechange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});

  }
  const handleData=()=>{
    edit?dispatch(editcontact(contactToedit._id,contact)):
    dispatch(postContact(contact));
  }
const [contact, setContact] = useState({});
    const edit = useSelector((state) => state.EditReducer.edit);
    const contactToedit  = useSelector((state) => state.contactReducer.contact );


    useEffect(() => {
      edit ?setContact(contactToedit):setContact({name:"",email:"",phone:""})
    }, [contactToedit, edit]);
    return (
        <div>





          
<label>Nom</label>
<input  name="name" value={contact.name}  onChange={handlechange}/>
       
             <label>email</label> 
             <input  name="email" value ={contact.email} onChange={handlechange}/>
             
             <label>phone</label> 
       <input name="phone" value={contact.phone} onChange={handlechange}/>
     <Link to="/">  <button onClick={handleData} >{edit? "edit":"add"}</button></Link>
        </div>
    );
};

export default Add
