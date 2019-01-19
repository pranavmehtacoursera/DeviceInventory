export enum TransactionType{
    CHECKOUT,CHECKIN
}
export class Transaction{
    public trans_type:TransactionType;
    public trans_date:string;
    public trans_deviceId:string;
    public trans_deviceName:string;
    public trans_borrower:string;
    public trans_witness:string;
    constructor(rawObj){
        this.trans_type = rawObj['trans_type'];
        this.trans_date = rawObj['trans_date'];
        this.trans_deviceId = rawObj['trans_deviceId'];
        this.trans_deviceName = rawObj['trans_deviceName'];
        this.trans_borrower = rawObj['trans_borrower'];
        this.trans_witness = rawObj['trans_witness'];
    }
}