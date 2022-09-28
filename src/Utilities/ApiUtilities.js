const Util = {
    // Used to handle all logic of cleaning up API raw response data into a single object for Redux State
    // No Constructors. Will only hold functions
    mapMembers: (data) => {
        // cleans up raw member data from either house or senate.
        // Returns Map of all members with only specific data pulled from raw.
        // Each key = Member ID, value = Member Object

        const memberMap = new Map();
        data.members.forEach(member => {
            memberMap.set(member.id, member);
        });

        return memberMap;
    }

}

export default Util;