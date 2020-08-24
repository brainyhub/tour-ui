export interface Menu {
    permission:string,
    url:string,
    icon:string,
    title: string,
    active:Boolean,
    submenu:Menu[]
  }