const initailState={
    data:'lorem ipsum',
}
const loggedReducer=(state=initailState,action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default loggedReducer