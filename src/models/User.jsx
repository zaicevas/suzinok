export default class User {
  constructor(id, isPolitician, name, subtitle, photo, partyId) {
    this.id = id;
    this.isPolitician = isPolitician;
    this.name = name;
    this.subtitle = subtitle;
    this.photo = photo;
    this.partyId = partyId;
  }
}
