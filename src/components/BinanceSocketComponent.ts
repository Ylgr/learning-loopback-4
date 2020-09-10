import { Component } from "@loopback/core";
// import WebSocket from 'ws';

export class BinanceSocketComponent implements Component {
  constructor() {
    this.start()
  }

  async start() {
    // const wss = new WebSocket('wss://fstream.binance.com/ws/!bookTicker')
    //
    //   wss.onmessage = async (event: any) => {
    //     const data = JSON.parse(event.data)
    //     // console.log('data: ', data)
    //   }
    console.log('asdsad')
  }
}
