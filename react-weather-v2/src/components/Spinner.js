import React from 'react'
import ManualInputLocation from './ManualInputLocation'

export default function GetLocation(props) {

    let isLocationKnown = (userLocation) => {
        if (props.userLocation.lat === -1) {
            return <div>loading location...</div>
        } else {
            return null;
        }
    }

    return (
        <div>
            { isLocationKnown(props.userLocation) }
            <ManualInputLocation userLocation={props.userLocation} />
        </div>
    )
}
