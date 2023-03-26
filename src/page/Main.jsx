import {useState, useEffect} from 'react';
import PreData from '../component/PreData';
import AfterData from '../component/AfterData';
import DPLCanvas from '../component/DPLCanvas';
import dpl2Function from '../util/dpl2Function';

const Main = () => {
    const [preData, setPreData] = useState("");
    const [afterData, setAfterData] = useState([]);
    const [dpl, setDpl] = useState({type: 'modifier', contents: e=>e+2, next: {type: 'modifier', contents: e=>e*2, next: {type: 'end'}}});

    useEffect(() => {
        setAfterData(dpl2Function(dpl)(preData.split("\n")?.map(e=>e.split(","))));
    }, [dpl,preData]);

    return (
        <>
            <PreData setPreData={setPreData} />
            <DPLCanvas dpl={dpl} setDpl={setDpl} />
            <AfterData afterData={afterData} />
        </>
    );
};

export default Main;