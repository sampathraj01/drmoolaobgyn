const baseUrl = process.env.NODE_ENV === "production" 
? 'https://drmollaobgyn.com' 
: 'http://localhost:3000';

export default baseUrl;