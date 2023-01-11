describe('empty spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/UploadImg');
    cy.fixture('bongo.jpg').then(fileContent =>{
      cy.get('input[type="file"').attachFile({
        fileContent : fileContent.toString(),
        fileName:"bongo.jpg",
        mimeType:"image/png"
      })
    })
    cy.get('#buttonClick').click();
    /* ==== End Cypress Studio ==== */
  })
})