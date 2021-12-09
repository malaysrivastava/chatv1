export const add_in = (data)=> {
    return{
        type: 'ADD',
        payload: data
    }
}

export const login =(data)=> {
    return {
        type: 'SIGN_IN',
        payload: data
    }
}

export const logout =()=> {
    return {
        type: 'SIGN_OUT'
    }
}

const data='new data';
export const ADD_DATA = "ADD_DATA";
export const addData = {
      type: ADD_DATA,
      payload: data
};
export default addData;