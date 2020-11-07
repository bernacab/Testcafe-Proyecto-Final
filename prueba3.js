import {Selector} from 'testcafe';
import page from './pagemodel'
import { data } from './datos';

fixture('Pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Crear cuenta', async t => {

    await t
    .click(page.signinbutton)
        
    await t
    .typeText(page.emailcreation, 'berna@cabrera.com')
    
    await t
    .click(page.newaccount)
    
    await t
    .click(page.mrcheck)
    .expect(page.mrcheck.checked).ok()
    .typeText(page.firstname, data.firstname)
    .typeText(page.lastname, data.lastname)
    .typeText(page.password, data,password)
    .click(page.day, data.day)
    .click(page.month, data.month)
    .click(page.year, data.year)
    .click(page.newsletterchkbx)
    .expect(page.newsletterchkbx.checked).ok()
    .click(page.specialofferchkbx)
    .expect(page.specialofferchkbx.checked).ok()
    .typeText(page.firstname_address, data.firstname)
    .typeText(page.lastname_address, data.lastname)
    .typeText(page.company_address, data.company)
    .typeText(page.addressline1, data.addressline1)
    .typeText(page.addressline2, data.addressline2)
    .typeText(page.city, data.city)
    .click(page.state, data.state)
    .typeText(page.zipcode, data.zipcode)
    .click(page.country, data.country)
    .typeText(page.addinfo, data.addinfo)
    .typeText(page.phone, data.phone)
    .typeText(page.mobile, data.mobilephone)
    .typeText(page.alias, data.alias)
    .click(page.registeraccount)
});