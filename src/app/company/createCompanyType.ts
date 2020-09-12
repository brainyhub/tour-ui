export interface CreateCompanyType{  
    address: String,
    companyTaxs:[
      {
        displayTitle:String,
        percentOrAmout:String,
        value:String,
        vvtTaxType:{
          title: String,
        }
      }
    ],
    email: String,
    gstNo: String,
    isActive: String,
    phone: String,
    title: String,
    website: String
  }