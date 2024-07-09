export function stringToDate (date:string):LifeDate|null{
    try {
        const day:LifeDate = new LifeDate(parseInt(date.substring(8,10)),parseInt(date.substring(5,7)),parseInt(date.substring(0,4)))
        return day;
    }
    catch {
        return null;
    }
    
}

export class LifeDate{
    day:number;
    month:number;
    year:number;

    constructor(year:number,month:number,day:number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    /**
     * equals
     */
    public equals(that:LifeDate) {
        return (that.day===this.day && that.month === this.month && that.year === this.year)
    }

    /**
     * toString
     */
    public toString():string {
        return `${this.month}/${this.day}/${this.year}`
    }

}
