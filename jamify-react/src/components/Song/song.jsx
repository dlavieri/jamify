import React from 'react';

export default function Song (props) {
    return (
        <tr>
            <td className="">{props.index}</td>
            <td className=""><div className="song-love"></div></td>
            {props.artist ? <td className="col">{props.artist}</td> : null}
            <td className="">{props.title}</td>
            <td className=""> {props.ranking ? props.listens : props.timeLength}</td>
        </tr>
    )
}