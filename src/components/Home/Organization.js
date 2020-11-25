import React from 'react';

const Organization = ({data}) => {
    return (
        <div className="organization">
            <div>
                <p className="organization__title">{data.name}</p>
                <p className="organization__mission">{data.mission}</p>
            </div>
            <p className="organization__stuffs">{data.stuffs}</p>
        </div>
    )
}

export default Organization;