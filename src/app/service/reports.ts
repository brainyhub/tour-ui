import {Report} from '../domain/report';
export const REPORTS: Report[] = [
  {
    "name": "DRIVER_REPORTS",
    "label": "Drivers",
    "icon": "",
    "url": "http://localhost:8080/tour/adminService/allRoles",
    "title": "Title here",
    submenu:[{"name": "RULE_DRIVER_UPDATE","label": "Menu","icon": "","url": "#","title": "Title here", submenu:[] }]

  },
  {
    "name": "USER_REPORTS",
    "label": "User",
    "icon": "",
    "url": "http://localhost:8080/tour/adminService/permissions",
    "title": "Title here",
    submenu:[{"name": "RULE_DRIVER_UPDATE","label": "Menu","icon": "","url": "#","title": "Title here", submenu:[] }]
  },
  {
    "name": "NEW_BOOKING_REPORTS",
    "label": "Booking",
    "url": "http://localhost:8080/tour/api/ver01/tripservice/trip",
    "icon": "",
    "title": "Title here",
    submenu:[{"name": "RULE_DRIVER_UPDATE","label": "Menu","icon": "","url": "#","title": "Title here", submenu:[] }]
  }
]