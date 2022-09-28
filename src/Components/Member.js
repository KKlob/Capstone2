import React from 'react';
import uuid from 'react-uuid';

function Member({ data }) {

    return (
        <div className="member">
            {Object.keys(data).map((key) => {
                if (key !== "socials") {
                    return <p key={uuid()}>{key}: {data[key]}</p>
                }
            })}
        </div>
    )
}

export default Member;