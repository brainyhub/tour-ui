import {Menu} from '../domain/menu';
export const VALIDMENUS: Menu[] = [
  {
    "permission": "MENU_DASHBOARD",
    "icon": "icon_house_alt",
    "url": "/dashboard",
    "title": "Dashboard",
    "active":true,
    "submenu":[]
  },
  {
    "permission": "MENU_VVT",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/vvtables",
    "title": "User Mgt",
    "active":false,
    "submenu":[
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Role","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Permission","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Assign Role","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Assign Permission","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Users","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Suspend User","active":false,"submenu":[]}
    ]
  },
  {
    "permission": "MENU_TRIP",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/trip",
    "title": "Trip",
    "active":false,
    "submenu":[]
  },
  {
    "permission": "MENU_VVT",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/vvtables",
    "title": "Tables",
    "active":false,
    "submenu":[
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Client","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Company","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Package","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Tax","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Status","active":false,"submenu":[]},
      {"permission": "MENU_VVT","icon": "menu-arrow arrow_carrot-right","url": "/vvtables","title": "Notification","active":false,"submenu":[]}
    ]
  }
  
]