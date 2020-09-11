import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
  inject,
  CoreBindings,
  Application
} from '@loopback/core';
import {AccountRepository} from '../repositories';
import WebSocket from 'ws';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class BinanceMonitorObserver implements LifeCycleObserver {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
    @inject('repositories.AccountRepository') private accountRepo: AccountRepository,
  ) {}


  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
    // Add your logic for start
    let account: any = this.accountRepo.loadAccount()
    console.log('This is a migrated asynchronous boot script');

    // const sample = {title: 'a todo sample', desc: 'Something to do.'};
    // Create the sample by calling TodoRepo.create()
    const result = await this.accountRepo.find({})
    console.log('Sample created as ', result);
    const wss = new WebSocket('wss://fstream.binance.com/ws/!bookTicker')

      wss.onmessage = async (event: object) => {
        account = this.accountRepo.getAccount()
        const data = JSON.parse(event.data)
        console.log('data: ', account)
      }
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
