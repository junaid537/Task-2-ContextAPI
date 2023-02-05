import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className='btn-home' >
                <img className="pic" src={props.data.avatar_url} alt="not there" />
                <div className='child11'>
                    <div><strong>{props.data.name}</strong></div>
                    <div>followers_url:{props.data.followers_url}</div>
                    <div>subscriptions_url:{props.data.subscriptions_url}</div>
                    <div>repos_url:{props.data.repos_url}</div>
                    <div>events_url:{props.data.events_url}</div>
                </div>
            </div>

        </>
    )
}

