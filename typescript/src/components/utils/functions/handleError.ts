import * as boom from 'boom';
import { Context } from 'koa';
import { getErrorStatusCode } from '../';

export function handleError(ctx: Context, error: Error, statusCode: number = 500): void {
  console.error(error)
  let be: boom.BoomError;
  if (error instanceof Error) {
    let json: any = {
      name: error.name,
      message: error.message
    };

    be = boom.create(getErrorStatusCode(error), error.message);
    be.output.payload.details = {
      name: error.name
    };
    let errors = (<any>error).errors;
    if (errors) be.output.payload.details.errors = errors;

    ctx.status = getErrorStatusCode(error);
    ctx.body = JSON.stringify(json);
  } else {
    be = boom.wrap(error, 500);
  }
  ctx.status = be.output.statusCode;
  ctx.body = be.output.payload;
}