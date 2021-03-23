import {ADD_CONTACT,EDIT_CONTACT} from'../actionTypes/edit'

 const initialState={
     edit:false ,
 };
 const EditReducer = ( state=initialState,{type})=>{
    switch (type) {
        case ADD_CONTACT :
             return {...state,edit:false};
            
        case EDIT_CONTACT:
             return {...state, edit:true};
    
        default:
           return state ;
    };
 };
 export default EditReducer ;