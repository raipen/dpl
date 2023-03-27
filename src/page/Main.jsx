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
    );
    
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