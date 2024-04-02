class ValidationError extends Error {
  constructor(message = "Invalid format of data") {
    super(message);
    this.name = "ValidationError";
  }
}
export default ValidationError;
