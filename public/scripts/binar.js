function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars, randomVal = true) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = (new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      )).toISOString().split("T")[0]+"T"+"01:00:00";
      const withDriver = Math.round(Math.random() * 1) === 1;

      return {
        ...car,
        availableAt,
        withDriver,
      };
    });
  };

  static async listCars(filterer) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars, false);
    } else {
      const response = await fetch("/getcars");
      const body = await response.json();
      cars = this.populateCars(body);
      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    if (filterer instanceof Function) return cars.filter(filterer);

    return cars;
  }
}
