const dpl2Function = (dpl) => {
    switch(dpl.type){
        case 'modifier':
            return data => dpl2Function(dpl.next)(data.map(e=>e.map(dpl.contents)));
        case 'end':
            return data => data;
    }
}

export default dpl2Function;