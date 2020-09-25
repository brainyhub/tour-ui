import { Component, OnInit } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-trip-map-view',
  templateUrl: './trip-map-view.component.html',
  styleUrls: ['./trip-map-view.component.css']
})
export class TripMapViewComponent implements OnInit {
  lat: any;
  lng: any;
  startlatitude:any;
  startlongitude:any;
  endlatitude:any;
  endtlongitude:any;
  constructor() {}

  ngOnInit(){
  }
     initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
          lat: 24.886,
          lng: -70.268,
        },
        mapTypeId: "terrain",
      }); // Define the LatLng coordinates for the polygon's path.
  
      var pathCoords = [
        {
          lat: this.startlatitude,
          lng: this.startlongitude,
        },
        {
          lat: this.endlatitude,
          lng: this.endtlongitude,
        },
      ];
      const bermudaTriangle = new google.maps.Polygon({
        paths: pathCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
      bermudaTriangle.setMap(map);
    }
  
}
