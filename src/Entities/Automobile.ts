import { automobile } from "../../types";

/**
 * Automovile base entity.
 */
class Automobile implements automobile {
  id;
  brand;
  model;
  year;
  miles;
  color;
  passengers;
  gears;
  status;
  rentPrice;
  constructor(props: automobile) {
    this.id = props.id,
    this.brand = props.brand,
    this.model = props.model,
    this.year = props.year,
    this.miles = props.miles,
    this.color = props.color,
    this.passengers = props.passengers,
    this.gears = props.gears,
    this.status = props.status;
    this.rentPrice = props.rentPrice;
  }
}
export default Automobile;
