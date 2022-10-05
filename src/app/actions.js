import axios from "axios";
import { UPDATE_STATE, ADD_INFO_TO_MEMBER } from "./actionTypes";
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

        //Create third API request to Congress.gov API for image urls only - Add into base state when Congress.gov CORS issue resolved

        axios.all([senateReq, houseReq]).then(axios.spread((...responses) => {
            const senateResp = responses[0].data.results[0];
            const houseResp = responses[1].data.results[0];

            let baseState = Util.constructBaseState(senateResp, houseResp);

            console.log(baseState);

            dispatch({
                ...update(baseState)
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

export function updateMember(payload) {
    return {
        type: ADD_INFO_TO_MEMBER,
        payload
    };
}

export function AddInfoToMember(api_url) {
    return async function (dispatch) {
        console.log("Sending secondary api request");
        // const imgRequest = axios({
        //     method: 'get',
        //     url: `https://api.congress.gov/v3/member/${id}`,
        //     headers: { 'Content-Type': 'application/json', 'X-Api-Key': CON_API_KEY }
        // });

        const addInfoRequest = axios({
            method: 'get',
            url: api_url,
            headers: { 'Content-Type': 'application/json', 'X-Api-Key': PRO_API_KEY }
        });

        axios.all([addInfoRequest]).then(axios.spread((...responses) => {
            // const imgResp = responses[0].data;
            const addInfoResp = responses[0].data.results[0];

            // console.log(imgResp);
            dispatch(updateMember(Util.cleanUpSecondary(addInfoResp)));

        })).catch(error => {
            console.log(error);
        });
    }
}

