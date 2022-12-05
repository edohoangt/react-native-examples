export class Place {
  constructor(title, imageURI, location, id) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = id;
  }
}
