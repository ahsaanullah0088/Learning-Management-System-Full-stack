class ErrorHandler extends Error {
    statusCode: Number;
  constructor(message:any, statusCode:Number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default  ErrorHandler

//constructor means its get values 
// super means it will call parent class Error
// captureStackTrace is used to create a .stack property on the error instance
