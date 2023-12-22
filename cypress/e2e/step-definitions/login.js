import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor'

Given('I am at Google page', function(){
    cy.visit('https://www.google.com')
})

Then('search testing text', function(){
    cy.get('[title="Search"]').type('testing')
    cy.get('[type="submit"]').click({force:true})
})

