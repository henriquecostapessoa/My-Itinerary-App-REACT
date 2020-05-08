import { FETCH_ITINERARIES } from './types';

export const fetchItineraries = (id) => dispatch =>  {

    
    fetch(`http://localhost:5000/itineraries/${id}`)
        .then(response => response.json())
        .then(itineraries =>
            dispatch({
                type: FETCH_ITINERARIES,
                payload: itineraries
            }) 
        )
};
  
