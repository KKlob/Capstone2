const axios = require("axios");

async function getDataFromPP() {
    const PRO_API_KEY = 'X2sUp9nhWKMZH8Npl0Li2qUS16O1ASy71nI2BTbZ'

    const senateReq = axios({
        method: 'get',
        url: 'https://api.propublica.org/congress/v1/117/senate/members.json',
        headers: { 'Content-Type': 'application/json', 'X-Api-Key': PRO_API_KEY }
    });
    const houseReq = axios({
        method: 'get',
        url: 'https://api.propublica.org/congress/v1/117/house/members.json',
        headers: { 'Content-Type': 'application/json', 'X-Api-Key': PRO_API_KEY }
    });

    return axios.all([senateReq, houseReq]).then(axios.spread((...responses) => {
        const senateResp = responses[0].data.results[0];
        const houseResp = responses[1].data.results[0];

        return { senateData: senateResp, houseData: houseResp }
    }));
}

function cleanUpData(rawData) {
    let states = {}

    const { senateData, houseData } = rawData;

    function cleanUpMember(member) {
        return {
            "id": member.id,
            "chamber": member.chamber,
            "name": `${member.first_name} ${member.last_name}`,
            "party": member.party,
            "dob": member.date_of_birth,
            "state": member.state,
            "socials": {
                "twitter": `twitter.com/${member.twitter_account}`,
                "facebook": `facebook.com/${member.facebook_account}`,
                "youtube": `youtube.com/${member.youtube_account}`
            },
            "site": member.url,
            "votes_with_party": `${member.votes_with_party_pct} %`,
            "api_member_url": member.api_uri
        }
    }

    //adds member to state, returns state
    function addMemberToStates(member) {
        let addSwitch = true;
        while (addSwitch) {
            if (states[member.state]) {
                if (states[member.state][member.party]) {
                    states[member.state][member.party][member.id] = member;
                    addSwitch = false;
                } else {
                    states[member.state][member.party] = {};
                }
            } else {
                states[member.state] = {}
            }
        }
    }

    senateData.members.forEach(member => {
        member.chamber = senateData.chamber;
        let cleanMem = cleanUpMember(member);
        addMemberToStates(cleanMem);
    })

    houseData.members.forEach(member => {
        member.chamber = houseData.chamber;
        let cleanMem = cleanUpMember(member);
        addMemberToStates(cleanMem);
    })

    return { states, currMember: null, memberData: {} }
}

function initializeData(sequelize) {
    getDataFromPP().then(data => {
        let cleanData = cleanUpData(data);
        console.log(cleanData);
        sequelize.authenticate().then(() => {
            console.log('Connection established to db');
        }).catch(error => console.error(error));
    });
}

module.exports = { initializeData }