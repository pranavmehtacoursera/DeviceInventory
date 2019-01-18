export class Device{
    public deviceId:number;
    public deviceName:string;
    public deviceMake:string;
    public deviceModel:string;
    public deviceSN:string;
    public isActive:boolean;
    public isAvailable:boolean;
    public lastBorrowedDate?:string;
    public lastBorrowedBy?:string;

    constructor(rawObj){
        this.deviceId = rawObj['deviceId'];
        this.deviceName = rawObj['deviceName'];
        this.deviceMake = rawObj['deviceMake'];
        this.deviceModel = rawObj['deviceModel'];
        this.deviceSN = rawObj['deviceSN'];
        this.isActive = rawObj['isActive'];
        this.isAvailable = rawObj['isAvailable'];
        this.lastBorrowedDate = rawObj['lastBorrowedDate'] || '';
        this.lastBorrowedBy = rawObj['lastBorrowedBy'] || ''
    }
}