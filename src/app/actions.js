import axios from "axios";
import { UPDATE_STATE } from "./actionTypes";
import Util from '../Utilities/ApiUtilities';
import { PRO_API_KEY, CON_API_KEY } from '../secrets';

export function getDataFromAPI() {
    return async function (dispatch) {
        const senateReq = axios({
            method: 'get',
            url: 'https://api.propublica.org/congress/v1/117/senate/members.json',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': PRO_API_KEY }
        });
        const houseReq = axios({
            method: 'get',
            url: 'https://api.propublica.org/congress/v1/117/house/members.json',
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': PRO_API_KEY }
        })

        axios.all([senateReq, houseReq]).then(axios.spread((...responses) => {
            const senateResp = responses[0].data.results[0];
            const houseResp = responses[1].data.results[0];

            const senateMembers = Util.mapMembers(senateResp);
            const houseMembers = Util.mapMembers(houseResp);

            dispatch({
                ...update({
                    mainDisplay: "Senate",
                    senateMembers,
                    houseMembers,
                    selectedMember: "",
                    memberInfoCache: new Map()
                })
            });

        })).catch(errors => {
            console.log(errors);
        });
    }
}

export function update(payload) {
    return {
        type: UPDATE_STATE,
        payload
    };
}

export function AddInfoToMember(api_url) {
    return async function (dispatch) {
        const addInfoRequest = axios({
            method: 'get',
            url: `${api_url}`,
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': CON_API_KEY }
        }).then(() => {
            console.log(addInfoRequest);
        }).catch(errors => {
            console.log(errors);
        });

        axios.all()
    }
}

