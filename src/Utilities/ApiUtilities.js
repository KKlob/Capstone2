class ApiUtilities {
    // Used to handle all logic of cleaning up API raw response data into a single object for Redux State
    // No Constructors. Will only hold functions

    //function to sort state members into house/senate arrays
    //Returns x
    sortStateMembers(stateMembers) {
        let R = stateMembers.R ? stateMembers.R : {};
        let D = stateMembers.D ? stateMembers.D : {};
        let I = stateMembers.I ? stateMembers.I : {};

        const sortedMembers = { "Senate": [], "House": [] }

        for (let members of [R, D, I]) {
            if (Object.keys(members).length > 0) {
                for (let member of Object.values(members)) {
                    if (member.chamber === "Senate") sortedMembers.Senate.push(member);
                    if (member.chamber === "House") sortedMembers.House.push(member);
                }
            }
        }

        return sortedMembers;
    }

    //function to count state members - Returns int
    countStateMembers(state) {
        let R = state.R ? Object.keys(state.R).length : 0;
        let D = state.D ? Object.keys(state.D).length : 0;
        let I = state.ID ? Object.keys(state.ID).length : 0;
        return R + D + I;
    }

    // function to organize member array into db state setup ({"states": {State: {Party: {Id: MemberObj}}}})
    constructBaseState(senData, houseData) {
        let states = {}

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

        senData.members.forEach(member => {
            member.chamber = senData.chamber;
            let cleanMem = cleanUpMember(member);
            addMemberToStates(cleanMem);
        })

        houseData.members.forEach(member => {
            member.chamber = houseData.chamber;
            let cleanMem = cleanUpMember(member);
            addMemberToStates(cleanMem);
        })


        return { states, currMember: "" }

    }

    cleanUpSecondary(data) {
        // Pulls additional data from secondary api call
        // returns object with necessary key/values
        function calcYearsServed(array) {
            let firstCongress = array[array.length - 1];
            let date = new Date();
            let cYear = date.getFullYear();
            let startYear = Number(firstCongress.start_date.slice(0, 4));
            return (cYear - startYear);
        }

        const obj = {
            "id": data.id,
            "photo": "",
            "bills_sponsored": data.roles[0].bills_sponsored,
            "bills_cosponsored": data.roles[0].bills_cosponsored,
            "years_served": calcYearsServed(data.roles)
        }

        return obj;
    }

}

const Util = new ApiUtilities();

export default Util;