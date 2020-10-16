/**
 * Automovile base entity.
 */

interface Automovile {
  id: string;
  brand: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  passengers: 2 | 5;
  gears: 'auto' | 'manual';
  status: 'on-service' | 'repairs' | 'available';
}

class Automovile implements Automovile {
  constructor(props: Automovile) {
    this.brand = props.brand;
    this.model = props.model;
    this.year = props.year;
    this.miles = props.miles;
    this.color = props.color;
    this.passengers = props.passengers;
    this.gears = props.gears;
    this.status = props.status;
  }
}
export default Automovile;
