describe('calculator protractor test', function() {

    beforeEach(function(){
        browser.manage().timeouts().implicitlyWait(30000);
        browser.get('http://juliemr.github.io/protractor-demo/');
        // browser.window.manage.maximize;
    });
    it ('verify the title of the page', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it ('should add one and two', function() {
        
        
        element(by.model('first')).sendKeys(5);

        // expect(element(by.model('operator'))).toBe(true, "operator is not selected in dropdown");

        // element(by.model('operator')).click();
        element.all(by.options('value for (key, value) in operators')).get(4).click();
        // expect(element(by.options('value for (key, value) in operators'))).toBe(true, "operator is not selected in dropdown");
    
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('3');
    });
});