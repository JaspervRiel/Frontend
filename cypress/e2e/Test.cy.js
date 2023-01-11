describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/comment')
    cy.contains('Comment')
    cy.get('input[id="commentText"]').type("testtest")
    cy.get('button[id="buttonClick"]').click()
  })
})