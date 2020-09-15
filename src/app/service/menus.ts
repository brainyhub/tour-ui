import { Menu } from '../domain/menu';
export const VALIDMENUS: Menu[] = [
  {
    "id": "dashboard",
    "permission": "MENU_DASHBOARD",
    "icon": "icon_house_alt",
    "url": "/site/dashboard",
    "title": "Dashboard",
    "active": true,
    "hasChild": false,
    "submenu": []
  },
  {
    "id": "user",
    "permission": "MENU_VVT",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "#user",
    "title": "User Mgt",
    "active": false,
    "hasChild": true,
    "submenu": [
      { "id": "role", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/role", "title": "Role", "active": false, "submenu": [], "hasChild": false },
      { "id": "permission", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/permissions", "title": "Permission", "active": false, "submenu": [], "hasChild": false },
      { "id": "assign_role", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/assign-role", "title": "Assign Role", "active": false, "submenu": [], "hasChild": false },
      { "id": "assign_permission", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/assign-permission", "title": "Assign Permission", "active": false, "submenu": [], "hasChild": false },
      { "id": "users", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/users", "title": "Users", "active": false, "submenu": [], "hasChild": false },
      { "id": "superadmin", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/superadmin", "title": "Super Admin", "active": false, "submenu": [], "hasChild": false }
    ]
  },
  {
    "id": "trip",
    "permission": "MENU_TRIP",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/site/trip",
    "title": "Trip",
    "active": false,
    "hasChild": false,
    "submenu": []
  },
  {
    "id": "triptripManagement",
    "permission": "MENU_TRIP",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/site/tripManagement",
    "title": "Trip Management",
    "active": false,
    "hasChild": false,
    "submenu":  []
  },
  {
    "id": "invoice",
    "permission": "MENU_TRIP",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "/site/invoice",
    "title": "Invoice",
    "active": false,
    "hasChild": false,
    "submenu": []
  },
  {
    "id": "vvt",
    "permission": "MENU_VVT",
    "icon": "menu-arrow arrow_carrot-right",
    "url": "#vvt",
    "title": "Tables",
    "active": false,
    "hasChild": true,
    "submenu": [
      { "id": "client", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/client", "title": "Client", "active": false, "submenu": [], "hasChild": false },
      { "id": "company", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/company", "title": "Company", "active": false, "submenu": [], "hasChild": false },
      { "id": "package", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/package", "title": "Package", "active": false, "submenu": [], "hasChild": false },
      { "id": "tax", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/tax", "title": "Tax", "active": false, "submenu": [], "hasChild": false },
      { "id": "status", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/status", "title": "Status", "active": false, "submenu": [], "hasChild": false },
      { "id": "notification", "permission": "MENU_VVT", "icon": "menu-arrow arrow_carrot-right", "url": "/site/notifications", "title": "Notification", "active": false, "submenu": [], "hasChild": false }
    ]
  }

]