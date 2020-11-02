//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
class InternalRepository extends Error {
  constructor(message: string) {
    super(message); // 'Error' breaks prototype chain here
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

export default InternalRepository;
