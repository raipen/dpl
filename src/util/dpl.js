export default class DPL {
    static TYPE = {
        START: 0,
        MODIFIER: 1
    }

    static create(type, contents){
        return new DPL(type, contents);
    }

    constructor(type, contents,next=null){
        this.type = type;
        this.contents = contents;
        this.next = next;
        this.insertNext = (dpl) => this.next = dpl.setNext(this.next);
    }

    setNext(dpl){
        return new DPL(this.type, this.contents, dpl);
    }

    appendNext(dpl){
        return this.next ? this.setNext(this.next.appendNext(dpl)) : this.setNext(dpl);
    }

    prependNext(dpl){
        return this.next ? this.setNext(dpl.appendNext(this.next)) : this.setNext(dpl);
    }

    claculate(data){
        switch(this.type){
            case DPL.TYPE.MODIFIER:
                return data.map(e=>e.map(this.contents));
            case DPL.TYPE.START:
                return data.trim()
                    .split("\n")
                    ?.map(e => e.split(",")
                    .map(e => e.trim())
                    .map(e => isNaN(e) ? e : Number(e)))
        }
    }

    do(data){
        if(this.next == null) return this.claculate(data);
        return this.next.do(this.claculate(data));
    }
}
