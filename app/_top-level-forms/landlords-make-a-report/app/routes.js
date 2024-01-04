//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.all('/tenancy-start-router', (req, res, next) => {

    // Get previous URL from session
    const prevUrl = req.session.prevPrevUrl;
  
    // Check if previous URL is summary page 
    const cameFromSummary = prevUrl && prevUrl.endsWith('/tenant-details');
  
    // Determine redirect
    let redirectPath;
    if (cameFromSummary) {
      redirectPath = '/summary-page';
    } else {
      redirectPath = '/tenant-details'; 
    }
  
    // Redirect
    res.redirect(redirectPath);
  
  });
  