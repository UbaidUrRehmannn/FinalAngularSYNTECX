import { Component, OnInit } from '@angular/core';
// import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat = 33.6844;
  lng = 73.0479;
  constructor() {}

  ngOnInit(): void {}
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    });
  }
x='ddkckcs'

  markerDragEnd(m: marker, $event: any) {
    console.log('dragEnd', 'M Marker: ', m);
    console.log('Mouse Event: ',$event)
  }

  markers: marker[] = [
    {
      lat: 33.6844,
      lng: 73.0479,
      label: 'A',
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
    },
  ];
}
interface marker {
  lat: number;
  lng: number;
  label?: any;
  draggable: boolean;
}
