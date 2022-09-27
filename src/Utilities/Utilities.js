class ApiUtilities {
    // Used to handle all logic of cleaning up API raw response data into a single object for Redux State
    // No Constructors. Will only hold functions

    constructCleanState() {
        // handles construction of single object that will be passed to Redux State for application
        // Returns an Object - Outlined in "Redux State Structure" of readme.md
        const baseState = {
            "congress": "117",
            "mainDisplay": "Senate",
            "senateMembers": "(Map of Member Objects with keys = Member ID)",
            "houseMembers": "(Map of Member Objects with keys = Member ID)",
            "memberInfo": { // Holds secondary member info gathered from secondary API calls - Collected after user selects a member for more info
                "senate": {
                    "rep": "(Map of Member Objects with keys = Member ID)",
                    "dem": "(Map of Member Objects with keys = Member ID)",
                    "ind": "(Map of Member Objects with keys = Member ID)"
                },
                "house": {
                    "rep": "(Map of Member Objects with keys = Member ID)",
                    "dem": "(Map of Member Objects with keys = Member ID)",
                    "ind": "(Map of Member Objects with keys = Member ID)"
                }
            }
        };

        return state;
    }
}

export default ApiUtilities;