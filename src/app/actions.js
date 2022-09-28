import axios from "axios";
import { UPDATE_STATE } from "./actionTypes";

export function getDataFromAPI() {
    return async function (dispatch) {
        let res = await axios({
            method: 'get',
            url: 'https://api.propublica.org/congress/v1/117/senate/members.json',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': 'X2sUp9nhWKMZH8Npl0Li2qUS16O1ASy71nI2BTbZ' }
        });
        dispatch({ ...update(), payload: res.data });
    }
}

export function update() {
    return {
        type: UPDATE_STATE
    };
}