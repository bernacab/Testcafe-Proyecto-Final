import {Selector} from 'testcafe';
import page from './pagemodel'
import { data } from './datos';

fixture('Pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Automation01: Crear cuenta', async t => {

    await t
    .click(page.signinbutton)
        
    await t
    .typeText(page.emailcreation, data.email)
    console.log(data.email)
    
    await t
    .click(page.newaccount)
    .expect(page.newinfo.innerText).contains('YOUR PERSONAL INFORMATION')

    
    await t
    .click(page.mrcheck)
    .expect(page.mrcheck.checked).ok()

    await t
    .typeText(page.firstname, data.firstname)

    await t
    .typeText(page.lastname, data.lastname)

    await t
    .typeText(page.password, data.password)

    await t
    .click(page.day)
    .click(page.selectday)
    .click(page.month)
    .click(page.selectmonth)
    .click(page.year)
    .click(page.selectyear)

    await t
    .click(page.newsletterchkbx)
    .expect(page.newsletterchkbx.checked).ok()
    .click(page.specialofferchkbx)
    .expect(page.specialofferchkbx.checked).ok()

    await t
    .typeText(page.company_address, data.company)

    await t
    .typeText(page.addressline1, data.addressline1)

    await t
    .typeText(page.addressline2, data.addressline2)

    await t
    .typeText(page.city, data.city)

    await t
    .click(page.state)
    .click(page.selectstate)

    await t
    .typeText(page.zipcode, data.zipcode)

    await t
    .click(page.country)
    .click(page.selectcountry)

    await t
    .typeText(page.addinfo, data.addinfo)

    await t
    .typeText(page.homephone, data.homephone)

    await t
    .typeText(page.mobile, data.mobilephone)

    await t
    .click(page.registeraccount)
    .expect(page.myaccount.innerText).contains('MY ACCOUNT')
    .takeScreenshot()
});