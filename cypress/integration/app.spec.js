describe('Arnold Clark Code Challenge e2e Tests', () => {
  before(function() {
    cy.server();
    cy.route('data').as('getData');
    cy.visit('http://localhost:4200');
    cy.wait(['@getData']);
  });

  it('Application has the correct title!', () => {
    cy.title().should('include', 'Arnold Clark Test');
  });

  it('Application has the correct h1 tag!', () => {
    cy.get('h1').contains('UK Charging Stations');
  });

  it('Check if the Zoom Buttons Exists', () => {
    cy.get('.zoomIn').contains('ZOOM IN');
    cy.get('.zoomOut').contains('ZOOM OUT');
  });

  it('Geo Location should only be submittable with valid inputs', () => {
    cy
      .get('#search')
      .should('have.attr', 'disabled')
      .get('input[name=lng]')
      .type(50)
      .get('input[name=lat]')
      .type(50)
      .get('#search')
      .should('not.have.attr', 'disabled')
      .get('input[name=lat]')
      .type(200)
      .get('#search')
      .should('have.attr', 'disabled')
      .get('#geo-error')
      .contains('Please Enter Valid Coordinates');
  });

  it('Check filter functionality works', () => {
    cy.get('agm-marker-cluster')
      .get('agm-marker-cluster').find('agm-marker').as('marker-count')
      .get('select')
      .select('Type 2 Combo (IEC62196) DC')
      .wait(3000)
      .get('agm-marker-cluster').find('agm-marker')
      .should('not', '@marker-count');
  });
});
