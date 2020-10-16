/**
 * Automovile base entity.
 */
interface auto {
  id: string;
  brand: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  passengers: number;
  gears: string;
  status: string
}

class Automovile {
  id: string;
  brand: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  passengers: number;
  gears: string;
  status: string;
  constructor(props:auto) {
    this.id = props.id, 
    this.brand = props.brand,
    this.model = props.model,
    this.year = props.year,
    this.miles = props.miles,
    this.color = props.color,
    this.passengers = props.passengers,
    this.gears = props.gears,
    this.status = props.status
  }
}
export default Automovile
