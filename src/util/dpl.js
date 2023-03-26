export const DPL_TYPE = {
    START: 'start',
    MODIFIER: 'modifier',
    END: 'end'
}

export const createDPL = (type, contents) => ({
    type,
    contents,
    createNext: function({type,contents}){
        this.next = createDPL(type,contents)
    }
})

export const initDPL = () => {
    const dpl = createDPL(DPL_TYPE.START);
    dpl.createNext({type:DPL_TYPE.END});
    return dpl;
}

export const DPL2Function = (dpl) => {
    switch(dpl.type){
        case 'modifier':
            return data => DPL2Function(dpl.next)(data.map(e=>e.map(dpl.contents)));
        case 'end':
            return data => data;
        case 'start':
            return data => DPL2Function(dpl.next)(
                data.trim()
                .split("\n")
                ?.map(e => e.split(",")
                .map(e => e.trim())
                .map(e => isNaN(e) ? e : Number(e)))
            );
    }
}