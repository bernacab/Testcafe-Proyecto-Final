import page from './pagemodel'
import { data } from './datos';

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Automation03 : Recuperar password', async t => {

    await t
    .click(page.signinbutton)

    await t
    .click(page.forgot)

    await t
    .typeText(page.mailfield, data.retrievemail)
    .click(page.retrieve)
    .expect(page.successmessage.innerText).contains('A confirmation email has been sent to your address')
    .takeScreenshot()

});
test('Automation04 : Recuperar password fallido', async t => {

    await t
    .click(page.signinbutton)

    await t
    .click(page.forgot)

    await t
    .typeText(page.mailfield, data.invalidmail)
    .click(page.retrieve)
    .expect(page.failuremessage.innerText).contains('There is 1 error')
    .takeScreenshot()

});

test('Automation05 : Error al crear cuenta con un correo existente', async t => {

    await t
    .click(page.signinbutton)

    await t
    .typeText(page.emailcreation, data.retrievemail)
    .click(page.newaccount)
    .expect(page.alert.innerText).contains('An account using this email address has already been registered.')
    .takeScreenshot()

});

test('Automation08 : Cerrar sesion', async t => {

    await t
    .click(page.signinbutton)

    await t
    .typeText(page.emailregistered, 'b.l@cabrera.com')
    .typeText(page.passwordregistered, data.password)
    .click(page.submit)

    await t
    .click(page.signout)
    .expect(page.signout.visible).notOk()
    .takeScreenshot()

});

test('Automation02 : Actualizar password', async t => {

    await t
    .click(page.signinbutton)

    await t
    .typeText(page.emailregistered, 'b.l@cabrera.com')
    .typeText(page.passwordregistered, data.password)
    .click(page.submit)

    await t
    .click(page.personal)

    await t
    .typeText(page.currentpassword, data.password)
    .typeText(page.newpassword, data.password)
    .typeText(page.confirmationpwd, data.password)
    .click(page.save)

    await t
    .expect(page.update.innerText).contains('Your personal information has been successfully updated')
    .takeScreenshot()

});