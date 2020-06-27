import Cors from "cors";

// Initializing the cors middleware
const cors = Cors( {
  methods: [ "GET", "HEAD" ],
} );

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware( req, res, fn ){
  debugger;
  return new Promise( ( resolve, reject ) => {
    debugger;
    fn( req, res, ( result ) => {
      if( result instanceof Error ){
        return reject( result );
      }
      
      return resolve( result );
    } );
  } );
}

async function handler( req, res ){
  debugger;
  // Run the middleware
  await runMiddleware( req, res, cors );
  
  // Rest of the API logic
  res.json( { message: "Hello Everyone!" } );
}

export default handler;
