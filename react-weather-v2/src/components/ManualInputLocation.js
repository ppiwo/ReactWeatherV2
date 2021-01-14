import React from 'react'

export default function ManualInputLocation(props) {

    if (props.userLocation.lat === -1) {
        return (
            <div>
                manual input
            </div>
        )
    } else {
        return null;
    }
}
