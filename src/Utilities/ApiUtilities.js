class ApiUtilities {
    // Used to handle all logic of cleaning up API raw response data into a single object for Redux State
    // No Constructors. Will only hold functions
    mapMembers(data) {
        // Returns Map of all members with only specific data pulled from raw.
        // Each key = Member ID, value = Member Object

        const memberMap = new Map();
        data.members.forEach(member => {
            memberMap.set(member.id, this.cleanUpMember(member));
        });

        return memberMap;
    }

    cleanUpMember(member) {
        //Clean up Member Data.
        //Returns Object containing only member data needed in specified format
        return {
            "id": member.id,
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