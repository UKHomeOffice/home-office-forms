//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/signin', function(request, response) {

    var signin = request.session.data['signin']
    if (signin == "BRP"){
        response.redirect("/acrs/enter-your-details-to-sign-in-brp")
    } else {
        response.redirect("/acrs/enter-your-details-to-sign-in-uan")
    }
})

router.post('/who', function(request, response) {

    var who = request.session.data['who']
    if (who == "The applicant"){
        response.redirect("/acrs/over-18/what-is-your-full-name")
    } else if (req.session.data['who'] === 'Someone helping the applicant') {
        response.redirect("")
    }
})

router.all('/afm-router', function (req, res, next) {
    if ((req.session.data['birth-year'] >= 2007)) {
      return res.redirect('/acrs/under-18/who-is-responsible-for-this-child');
      next();
    } else {
      return (res.redirect('/acrs/under-18/family-you-want-to-apply-to-bring-to-the-uk-3'))
    }})

    router.all('/afm-router-2', function (req, res, next) {
        if ((req.session.data['birth-year-2'] >= 2007)) {
          return res.redirect('/acrs/over-18/who-is-responsible-for-this-child');
          next();
        } else {
          return (res.redirect('/acrs/over-18/family-you-want-to-apply-to-bring-to-the-uk-3'))
        }})