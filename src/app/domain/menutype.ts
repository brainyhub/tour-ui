export class MenuType {
    id:string;
    permission:string;
    url:string;
    icon:string;
    title: string;
    active:Boolean;
    hasChild:Boolean;
    submenu:MenuType[];
  }