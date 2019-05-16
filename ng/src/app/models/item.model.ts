export interface Item {
    category: { type: String };
    subcategory: { type: String };
    sellerName: { type: String };
    title: { type: String };
    image: { type: String };
    productDescription: { type: String };
    price: { type: String };
    stockpile: { type: String };
    notice: { type: String };
    // date:{
    //     type:Date;
    //     default:Date.now;
    //   }
}