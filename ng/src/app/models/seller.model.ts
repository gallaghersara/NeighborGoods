export class Seller {
    category: { type: String };
    subcategory: { type: String };
    sellerName: {
        fn: String;
        ln: String
    };
    gender: { type: Boolean };
    image: { type: String };
    Description: { type: String };
    address: { type: String };
    phone: { type: String };
    email: { type: String };
    links: {
        facebook: String;
        website: String;
        instegram: String;
    }
}
