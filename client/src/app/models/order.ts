export class Order {
    id!: String;
    customers_name: String;
    item: String;
    quantity: Number;
    status: String;
    createdAt!: Date;

    constructor(){
        this.customers_name = "";
        this.item = "";
        this.quantity = 0;
        this.status = "";
    }
}
