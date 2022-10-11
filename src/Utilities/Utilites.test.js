import Util from "./Utilities";

const data = {
    members: [{
        "id": "B001230",
        "title": "Senator, 1st Class",
        "short_title": "Sen.",
        "api_uri": "https://api.propublica.org/congress/v1/members/B001230.json",
        "first_name": "Tammy",
        "middle_name": null,
        "last_name": "Baldwin",
        "suffix": null,
        "date_of_birth": "1962-02-11",
        "gender": "F",
        "party": "D",
        "leadership_role": "Senate Democratic Caucus Secretary",
        "twitter_account": "SenatorBaldwin",
        "facebook_account": "senatortammybaldwin",
        "youtube_account": "witammybaldwin",
        "govtrack_id": "400013",
        "cspan_id": "57884",
        "votesmart_id": "3470",
        "icpsr_id": "29940",
        "crp_id": "N00004367",
        "google_entity_id": "/m/024v02",
        "fec_candidate_id": "H8WI00018",
        "url": "https://www.baldwin.senate.gov",
        "rss_url": null,
        "contact_form": "https://www.baldwin.senate.gov/feedback",
        "in_office": true,
        "cook_pvi": null,
        "dw_nominate": -0.493,
        "ideal_point": null,
        "seniority": "9",
        "next_election": "2024",
        "total_votes": 866,
        "missed_votes": 1,
        "total_present": 0,
        "last_updated": "2022-09-28 07:45:18 -0400",
        "ocd_id": "ocd-division/country:us/state:wi",
        "office": "709 Hart Senate Office Building",
        "phone": "202-224-5653",
        "fax": null,
        "state": "WI",
        "senate_class": "1",
        "state_rank": "junior",
        "lis_id": "S354",
        "missed_votes_pct": 0.12,
        "votes_with_party_pct": 98.96,
        "votes_against_party_pct": 1.04
    }]
}

const expectedData = {
    "id": "B001230",
    "name": "Tammy Baldwin",
    "party": "D",
    "dob": "1962-02-11",
    "state": "WI",
    "socials": {
        "twitter": "twitter.com/SenatorBaldwin",
        "facebook": "facebook.com/senatortammybaldwin",
        "youtube": "youtube.com/witammybaldwin"
    },
    "site": "https://www.baldwin.senate.gov",
    "votes_with_party": "98.96 %",
    "api_member_url": "https://api.propublica.org/congress/v1/members/B001230.json"
}

it("mapMembers returns a map of data.members w/ id as key", function () {

    expect(Util.mapMembers(data).has("B001230")).toBeTruthy();
});

it("Formats Member Data according to specs", function () {
    expect(Util.mapMembers(data).get("B001230")).toEqual(expectedData);
});