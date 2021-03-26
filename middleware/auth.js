// FOR PROTECTED ROUTES routes we only want signedIn users to be able to hit. 
// middleware is a function that has access to the req and res cycle and object
// When a URI-endpoint is hit, we use this MW to check if there is a JWT token in the Request header 

// 1. Bring in JWT so it can be verified
const jwt = require('jsonwebtoken');
//2. Bring in config b/c we need access to the jwtSecret 
const config = require('config');

//3. Create function and export it.
// function takes in 3 parameters (req, res,and next) 
// with MW functions, after you do what you want to do, you need to call the next() function, which says to move onto the next piece of MW.  
module.exports = function(req, res, next) {
    
    //4. Get token from the request header & set the token to the key 'x-auth-token' inside the header
    const token = req.header('x-auth-token');

    //5. Check if there is no token 
    if(!token) {
        return res.status(401).json({ msg: 'No Token, auth denied' });
    }

    //6. If there is a token. use TRY CATCH
    try {
        // 7. verify token
        // use jwt.verify method to get the payload/object
        // jwt.verify takes two parameters the (token, and the jwtSecret from CONFIG-default.json)
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // the payload/object is now in decoded 

        // 8. Set the user in the payload to the req object w/ req.user
        // Set req.user equal to decoded which is an object, call "decoded.user" on it, to get the user/userID
        req.user = decoded.user;

        //9. Call next() to move on
        next();

        //10. Catch Error
    } catch (error) {

        // If token doesn't verify, it isn't valid
        res.status(401).json({ msg: 'Token is not valid'})
    }

}