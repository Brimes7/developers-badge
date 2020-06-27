import { runCoors } from "../../utils/cors";

async function handler( req, res ){
  const { name } = req.query;
  // Run the middleware
  runCoors( req, res )
    .then( result => {
      debugger;
      const svg = getDevTo( name );
      res.setHeader( "content-type", "image/svg+xml" );
      res.send( svg );
    } ).catch( err => {
    
    // Rest of the API logic
    res.status( 400 ).json( { message: err.message } );
  } );
  
}

const getDevTo = ( name, height = 30 ) => {
  return `
<svg width="118" height={height} viewBox="0 0 118 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="devTo">
<g clip-path="url(#clip0)">
<rect width="118" height="15" rx="2" fill="black"/>
<g id="DevTo 1">
<rect x="0.999756" y="0.829956" width="23.7156" height="13.34" rx="1" fill="white"/>
<path id="Vector" d="M2.2702 7.47149V12.6047H4.08288C6.08805 12.6047 6.9222 12.3481 7.53177 11.562C8.14134 10.7921 8.23759 10.1183 8.17342 7.07046C8.1253 4.37551 8.09322 4.15093 7.74031 3.57344C7.13074 2.57888 6.457 2.33826 4.19517 2.33826H2.2702V7.47149ZM5.97576 4.40759C6.34471 4.71238 6.36075 4.77654 6.36075 7.37524C6.36075 9.89374 6.34471 10.0542 6.00784 10.391C5.73514 10.6477 5.44639 10.7439 4.88495 10.7439L4.11496 10.76L4.06684 7.42337L4.03475 4.10281H4.82078C5.35014 4.10281 5.7191 4.19905 5.97576 4.40759V4.40759ZM9.66527 2.75533C9.34444 3.17241 9.3284 3.38095 9.3284 7.50358V11.8187L9.72944 12.2037C10.0984 12.5887 10.1946 12.6047 12.2961 12.6047H14.4616V10.8562L12.8254 10.8081L11.1732 10.76V8.35377L12.1838 8.30564L13.1783 8.25752V6.50901H11.093V4.10281H14.4616V2.33826H12.2319C10.0021 2.33826 9.9861 2.33826 9.66527 2.75533V2.75533ZM16.2262 4.61613C16.5631 5.8834 17.1085 7.95273 17.4453 9.23604C17.9587 11.2091 18.1351 11.6422 18.5682 12.0754C18.873 12.3962 19.242 12.6047 19.4826 12.6047C19.9799 12.6047 20.6215 12.1074 20.8461 11.53C21.0065 11.1129 23.2844 2.61096 23.2844 2.41846C23.2844 2.37034 22.8352 2.33826 22.2898 2.37034L21.2792 2.41846L20.3809 5.86736C19.8195 8.04898 19.4505 9.20396 19.3863 8.99542C19.258 8.59439 17.6699 2.48263 17.6699 2.40242C17.6699 2.37034 17.2047 2.33826 16.6433 2.33826H15.6166L16.2262 4.61613Z" fill="black"/>
</g>
<text id="devToText" fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="9" font-weight="bold" letter-spacing="0em"><tspan x="32.9684" y="10.4674">${ name }</tspan></text>
</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="118" height="15" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
`;
};

export default handler;
