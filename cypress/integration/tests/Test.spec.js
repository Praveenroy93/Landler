import HomePage from '../pages/HomePage';

describe('Full Test Suite', () => {
  beforeEach(() => {
    HomePage.visitHomePage();

  });

  it('should verify various elements and functionalities', () => {
    // Verify the "Landler" logo is visible and clickable
    HomePage.getLogo().should('be.visible').click();
  })

  it('Verify tabs are clickable', () => {

    ['Dashboard', 'PlotList', 'Investments', 'Claims'].forEach((tabName) => {
      HomePage.getTabs(tabName).click();
      cy.url().should('include', `/${tabName.toLowerCase()}`); 
    });
    })

    it('Verify project name is displaying correctly', () => {

    HomePage.getProjectName().should('have.text', 'Hofgut Neuhuasen');
    })

    it('Verify project size and Land Type is displaying correctly', () => {
    
    HomePage.getProjectSize().should('have.text', '300.3 ha');
    
    HomePage.getLandTypeIcons().should('be.visible');
    })

    it('Ensure Edit Project button is working', () => {

    HomePage.getEditProjectBtn().click();
    cy.url().should('include', '/edit-project');
    })

    it('Verify My Plots are displaying correct', () => {
    // 
    ['Auerland', 'Waldeck1', 'Waldeck2'].forEach((plotName) => {
      HomePage.getPlot(plotName).should('be.visible');
    

    HomePage.getAddDataBtn('Auerland').click();
    cy.url().should('include', '/add-data'); 

    ['Waldeck1', 'Waldeck2'].forEach((plotName) => {
      HomePage.getDataCompleteStatus(plotName).should('have.text', '100%');
    });
    });

    it('Confirm Send to Sponsor button works as intended', () => {

    HomePage.getSendToSponsorBtn().click();
    cy.url().should('include', '/send-to-sponsor'); 
    });
    })
})

