import React from 'react';

export default function Song (props) {

    const loveSong = (e) => {
        e.stopPropagation();
        e.target.classList.toggle("__loved-active");
    }

    return (
        <tr>
            <td>{props.index}</td>
            <td><div onClick={loveSong} className="song-love"></div></td>
            {props.artist ? <td className="col">{props.artist}</td> : null}
            <td>{props.title}</td>
            <td> {props.ranking ? props.listens : props.timeLength}</td>
        </tr>
    )
}