export interface CompanyResponseType {
  id: Number
  address: String,
  email: String,
  gstNo: String,
  isActive: String,
  phone: String,
  title: String,
  website: String,
  companyTaxs:[
    {
      displayTitle:String,
      percentOrAmout:String,
      value:String,
      vvtTaxType:{
        title:String
      }
    }
  ]

}