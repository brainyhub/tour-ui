

export const DRIVER:any={
  "table": "drivers",
  "table-label": "Add Driver",
  "editable": true,
  "delete": true,
  "row-export": true,
  "export": true,
  "search": true,
  "add": true,
  "columns": [
    {
      "label": "title",
      "id": "title",
      "nullable": "YES",
      "type": "varchar",
      "length": "255"
    },
    {
      "label": "booking_time",
      "id": "booking_time",
      "nullable": "YES",
      "type": "datetime",
      "length": ""
    }
  ]
}