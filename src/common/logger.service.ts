/* eslint-disable no-console */
import { Logger } from '@nestjs/common';

export class LoggerService extends Logger {
  public log(message: unknown, context?: string): void {
    console.log(this.prefix(context), message);
    // super.log(message, context);
  }

  public error(message: unknown, trace?: string, context?: string): void {
    console.error(this.prefix(context), message, '\n', trace);
    // super.error(message, trace, context);
  }

  private prefix(context?: string): string {
    let prefix = new Date().toLocaleString();
    if (context) {
      prefix += ` ${context}`;
    }

    return `${prefix}]`;
  }
}
