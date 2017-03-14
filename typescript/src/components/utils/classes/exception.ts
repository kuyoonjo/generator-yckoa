import { BoomError } from 'boom';

export class Exception extends Error {
  boomError: BoomError
  constructor(boomError: BoomError) {
    super(boomError.message)
  }
}