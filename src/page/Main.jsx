import { useState, useEffect } from 'react';
import PreData from '../component/PreData';
import AfterData from '../component/AfterData';
import DPLCanvas from '../component/DPLCanvas';
import { DPL_TYPE, DPL2Function, initDPL, createDPL } from '../util/dpl';

const Main = () => {
    const [preData, setPreData] = useState("");
    const [afterData, setAfterData] = useState([]);
    const [dpl, setDpl] = useState(initDPL());
    //{ type: 'modifier', contents: e => e + 2, next: { type: 'modifier', contents: e => e * 2, next: { type: 'end' } } }

    useEffect(() => {
        if(!preData.trim()){
            setAfterData([]);
            return;
        }
        setAfterData(DPL2Function(dpl)(preData));
    }, [dpl, preData]);

    return (
        <>
            <PreData setPreData={setPreData} />
            <DPLCanvas dpl={dpl} setDpl={setDpl} />
            <AfterData afterData={afterData} />
        </>
    );
};

export default Main;