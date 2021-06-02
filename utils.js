const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const stateCodes = [`AK`, `AL`, `AR`, `AS`, `AZ`, `CA`, `CO`, `CT`, `DC`, `DE`, `FL`, `GA`, `GU`, `HI`, `IA`, `ID`, `IL`, `IN`, `KS`, `KY`, `LA`, `MA`, `MD`, `ME`, `MI`, `MN`, `MO`, `MP`, `MS`, `MT`, `NC`, `ND`, `NE`, `NH`, `NJ`, `NM`, `NV`, `NY`, `OH`, `OK`, `OR`, `PA`, `PR`, `RI`, `SC`, `SD`, `TN`, `TX`, `UM`, `UT`, `VA`, `VI`, `VT`, `WA`, `WI`, `WV`, `WY`]


module.exports = { csrfProtection, asyncHandler , stateCodes};
