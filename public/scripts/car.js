class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card-result">
        <img src=${this.image} class="card-result-img">
        <p class="card-result-title">${this.type}</p>
        <p class="card-result-rent">Rp ${this.rentPerDay.toLocaleString(
          "en-US"
        )} / hari</p>
        <p>${this.description}</p>
        <div class="card-result-item">
          <i class="bi bi-people"></i>${this.capacity} orang
        </div>
        <div class="card-result-item">
          <i class="bi bi-gear"></i>${this.transmission}
        </div>
        <div class="card-result-item">
          <i class="bi bi-calendar4"></i>Tahun ${this.year}
        </div>
        <button class="btn btn-success btn-block card-result-button">
          Pilih Mobil
        </button>
      </div>
    `;
  }
}
