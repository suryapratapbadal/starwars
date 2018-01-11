/**
 * Created by vipulkumarsharma on 25/07/17.
 */



const user = (state = {}, action) => {
    const { type, users, start , userData, peopleData} = action;

    switch(type){
        case 'LIST_OF_PEOPLE':
            return {...state, "people" : peopleData};
        default:
            return state;
    }
};

export default user;