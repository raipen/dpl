import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import DPL from '../util/DPL';

const DPLCanvas = ({dpl, setDpl}) => {
    const test = () => {
        setDpl(dpl=>dpl.appendNext(DPL.create(DPL.TYPE.MODIFIER, e => e * 2)));
    }


    return (
        <div>
            <button onClick={test}>test</button>
        </div>
    )

};

export default DPLCanvas;