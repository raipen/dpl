import { useState, useEffect } from 'react';
import PreData from '../component/PreData';
import AfterData from '../component/AfterData';
import DPLCanvas from '../component/DPLCanvas';
import DPL from '../util/DPL';

const Main = () => {
    const [preData, setPreData] = useState("");
    const [afterData, setAfterData] = useState([]);
    const [dpl, setDpl] = useState(
        DPL
        .create(DPL.TYPE.START)
        .appendNext(DPL.create(DPL.TYPE.MODIFIER, e => e + 2))
        .appendNext(DPL.create(DPL.TYPE.MODIFIER, e => e * 5))
    );
    //{ type: 'modifier', contents: e => e + 2, next: { type: 'modifier', contents: e => e * 2, next: { type: 'end' } } }

    useEffect(() => {
        if(!preData.trim()){
            setAfterData([]);
            return;
        }
        setAfterData(dpl.do(preData));
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