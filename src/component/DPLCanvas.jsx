import { useState, useRef } from 'react';
import { Stage, Layer, Rect, Group, Text } from 'react-konva';
import DPL from '../util/DPL';
import innerFunctions from '../util/innerFunctions';

const DPLCanvas = ({dpl, setDpl}) => {

    const [selectdDpl, setSelectdDpl] = useState(null);
    const menuRef = useRef(null);

    const rectInfo = [];
    const dplQueue = [{...dpl,x:10,y:10}];
    while(dplQueue.length){
        const curDpl = dplQueue.shift();
        rectInfo.push({
            insertNext: curDpl.insertNext,
            x: curDpl.x,
            y: curDpl.y,
            fill: curDpl.type === DPL.TYPE.START ? 'green' : curDpl.type === DPL.TYPE.MODIFIER ? 'blue' : 'red',
            text: curDpl.type === DPL.TYPE.START ? 'START' : curDpl.type === DPL.TYPE.MODIFIER ? 'MODIFIER' : 'END'
        });
        if(curDpl.next){
            dplQueue.push({...curDpl.next,x:curDpl.x,y:curDpl.y+110});
        }
    }

    const addDpl = (insertNext,innerFUnction) => ()=> {
        insertNext(DPL.create(DPL.TYPE.MODIFIER, innerFUnction(Number(menuRef.current.getElementsByTagName("input")[0].value))));
        console.log(dpl);
        setDpl(dpl);
        setSelectdDpl(null);
    }

    return (
        <div>
            <Stage width={window.innerWidth-50} height={rectInfo.length*110}>
                <Layer>
                    {rectInfo.map((e, i) => (
                        <Group key={i}>
                            <Rect
                                x={e.x}
                                y={e.y}
                                width={100}
                                height={100}
                                fill={e.fill}
                            />
                            <Text
                                x={e.x}
                                y={e.y}
                                width={100}
                                height={100}
                                fill="white"
                                text={e.text}
                                align="center"
                                verticalAlign="middle"
                            />
                            <Rect
                                x={e.x}
                                y={e.y+80}
                                width={50}
                                height={20}
                                fill="skyblue"
                                onClick={_=>{
                                    setSelectdDpl(_=>e.insertNext);
                                }}
                            />
                        </Group>
                    ))}
                </Layer>
            </Stage>
            {selectdDpl && 
            <div ref={menuRef}>
                {Object.keys(innerFunctions).map((e,i) => (
                    <button key={i} onClick={addDpl(selectdDpl,innerFunctions[e])}>{e}</button>
                ))}
                <input type="text" />
            </div>
            }
        </div>
    )

};

export default DPLCanvas;