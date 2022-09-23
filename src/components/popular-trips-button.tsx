import React from "react"

interface PopularTripsButtonProps {
    source: string,
    tripName: string
}

export function PopularTripsButton({ source, tripName }: PopularTripsButtonProps) {
    return (
        <div className='group131'>
            <img
                alt=""
                src={source}
                className='rectangle12301'
            />
            <span className='text39'>
                <span>{tripName}</span>
            </span>
        </div>
    )
}