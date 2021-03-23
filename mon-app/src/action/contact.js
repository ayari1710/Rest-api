import axios from 'axios'
import {GET_CONTACTS,LOAD_CONTACT,FAIL_CONTACT,GET_CONTACT}from '../actionTypes/contact'


export const getcontacts =() =>async(dispatch)=>{
    dispatch({type:LOAD_CONTACT});
    try {
        let result=await axios.get('/api/contacts');
        dispatch({type:GET_CONTACTS,payload:result.data.ListeOfcontact});
    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error}) ;
    }

};

export const postContact=(newuser)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts',newuser);
        dispatch(getcontacts());

    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error.responce});
    }
};
export const deletcontact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch(getcontacts());

    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error.responce});
    }
};
export const editcontact=(_id,newcontact)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${_id}`,newcontact);
        dispatch(getcontacts());

    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error.responce});
    }
};
export const getcontact =(id) =>async(dispatch)=>{
    dispatch({type:LOAD_CONTACT});
    try {
        let result=await axios.get(`/api/contacts/${id}`);
        dispatch({type:GET_CONTACT,payload:result.data});
    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error}) ;
    }

};