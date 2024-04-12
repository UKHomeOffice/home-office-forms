//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/evidence-answer', function(request, response) {

    var evidence = request.session.data['evidence']
    if (evidence.includes("There is evidence I cannot provide")){
        response.redirect("/there-is-evidence-i-cannot-provide")
    } else {
        response.redirect("/where-should-we-send-your-decision")
    }
})