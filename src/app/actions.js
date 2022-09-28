import axios from "axios";
import { UPDATE_STATE } from "./actionTypes";
import Util from '../Utilities/ApiUtilities';

export function getDataFromAPI() {
    return async function (dispatch) {
        const senateReq = axios({
            method: 'get',
            url: 'https://api.propublica.org/congress/v1/117/senate/members.json',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': 'X2sUp9nhWKMZH8Npl0Li2qUS16O1ASy71nI2BTbZ' }
        });
        const houseReq = axios({
            method: 'get',
            url: 'https://api.propublica.org/congress/v1/117/house/members.json',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': 'X2sUp9nhWKMZH8Npl0Li2qUS16O1ASy71nI2BTbZ' }
        })

        axios.all([senateReq, houseReq]).then(axios.spread((...responses) => {
            const senateResp = responses[0].data.results[0];
            const houseResp = responses[1].data.results[0];

            const senateMembers = Util.mapMembers(senateResp);
            const houseMembers = Util.mapMembers(houseResp);

            dispatch({
                ...update(), payload: {
                    mainDisplay: "Senate",
                    senateMembers,
                    houseMembers,
                    selectedMember: "",
                    memberInfoCache: new Map()
                }
            });

        })).catch(errors => {
            console.log(errors);
        });
    }
}

export function update() {
    return {
        type: UPDATE_STATE
    };
}

