import { GET_CONTACT,FAIL_CONTACT, GET_CONTACTS, LOAD_CONTACT } from '../actionTypes/contact'
const initialState={
contactList:[]
, error:null,
load:false,
contact:{}
}


const contactReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_CONTACT:
            return{...state,load:true};
            case FAIL_CONTACT:
                return{...state,load:false,error:payload};
            case GET_CONTACTS:
                return{...state,load:false,contactList: payload};
                case GET_CONTACT:
                    return {...state,load:false,contact:payload.oneContact};
default:
return state;
    }

}
export default contactReducer;