/**
 * Created by vipulkumarsharma on 28/07/17.
 */


export const getPeopleList = (url) => {
    return async(dispatch, getState) => {
        console.log(url);
        const u = url || 'https://swapi.co/api/people'
        fetch(u, {
            method: 'GET',
            mode: 'cors',
        }).then((response) => response.json())
            .then((responseJson) => {
                let currentState = getState();
                const {people} = currentState.user;
                let results = responseJson.results;
                if(people) {
                    results = people.concat(results);
                }
                dispatch({
                    type: 'LIST_OF_PEOPLE',
                    "peopleData" : results
                })
                if(responseJson.next) {
                    dispatch(getPeopleList(responseJson.next));
                }
                
            })
            .catch((error) => {
                console.error(error);
            });
    }
}