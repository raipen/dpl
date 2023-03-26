const makeFunction = 
    ({
        rowFilter = ()=>true,
        colFilter = ()=>true,
        modify = e=>e
    }) => 
    data => 
    data.filter(rowFilter).map(e=>e.filter(colFilter).map(modify));

const dpl2Function = (dplArray) => {
    const functions = dplArray.map(dpl => makeFunction(dpl));
    
}

export default dpl2Function;