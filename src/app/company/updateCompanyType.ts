export interface UpdateCompanyType{
  address: String,
  companyTaxs:[
    {
      displayTitle:String,
      percentOrAmout:String,
      value:String,
      vvtTaxType:{
        title:String
      }
    }
  ],
  email: String,
  gstNo: String,
  id: Number,
  isActive: String,
  phone: String,
  title: String,
  website: String,
}