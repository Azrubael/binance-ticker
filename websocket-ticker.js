const Binance = require( 'node-binance-api' );
const binance = new Binance();
global.ticker = {};

// Show contents of BNBUSDT ticker object once per second
setInterval( () => {
    if ( !global.ticker.ETHUSDT ) return;
    console.log( global.ticker.ETHUSDT );
    console.log( `Ethereum ETHUSDT ask: ${global.ticker.ETHUSDT.bestAsk} bid: ${global.ticker.ETHUSDT.bestBid}` );
}, 5000 );

// Show contents of BTCUSDT ticker object once per second
setInterval( () => {
    if ( !global.ticker.BTCUSDT ) return;
    console.log( global.ticker.BTCUSDT );
    console.log( `Bitcoin BTCUSDT ask: ${global.ticker.BTCUSDT.bestAsk} bid: ${global.ticker.BTCUSDT.bestBid}` );
}, 5000 );

// Get 24h price change statistics for all symbols
binance.websockets.prevDay( false, function ( error, obj ) {
    global.ticker[obj.symbol] = obj;
} );
