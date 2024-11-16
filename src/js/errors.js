export class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [100, "Invalid input data"],
        [200, "User not found"],
        [300, "Permission denied"],
        [400, "Operation timeout"],
        [404, "Fatal error"]
      ])
    }
  
    translate(code) {
      return this.errors.get(code) || "Unknown error"
    }
  }