
class HomePage {
    // Method to visit the home page
    visitHomePage() {
      cy.visit('https://www.landler.io/');
    }
  
    // Method to get the "Landler" logo element
    getLogo() {
      return cy.get('div.navbar_logo.w-embed'); 
    }
  
    // Method to get a specific navigation tab element by name
    getTabs(tabName) {
      return cy.get(`#${tabName}`); 
    }
  
    // Method to get the project name element
    getProjectName() {
      return cy.get('.project-name');
    }
  
    // Method to get the project size element
    getProjectSize() {
      return cy.get('.project-size'); 
    }
  
    // Method to get the land type icons elements
    getLandTypeIcons() {
      return cy.get('.land-type-icon');
    }
  
    // Method to get the "Edit Project" button element
    getEditProjectBtn() {
      return cy.get('#editProjectButton'); 
    }
  
    // Method to get a specific plot element by name
    getPlot(plotName) {
      return cy.get(`.plot-${plotName}`); 
    }
  
    // Method to get the "Add Data" button element for a specific plot
    getAddDataBtn(plotName) {
      return cy.get(`#addDataButton-${plotName}`); 
    }
  
    // Method to get the data complete status element for a specific plot
    getDataCompleteStatus(plotName) {
      return cy.get(`.data-complete-status-${plotName}`); 
    }
  
    // Method to get the "Send to Sponsor" button element
    getSendToSponsorBtn() {
      return cy.get('#sendToSponsorButton'); 
    }
  }
  
  export default new HomePage();
  