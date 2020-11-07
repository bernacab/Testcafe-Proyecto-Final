import page from './pagemodel'
import { data } from './datos';

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Recuperar password', async t => {

    await t
    .click(page.signinbutton)

    await t
    .click(page.forgot)

    await t
    .typeText(page.mailfield, data.retrievemail)
    .click(page.retrieve)
    .expect(page.successmessage.innerText).contains('A confirmation email has been sent to your address')

});
test('Recuperar password fallido', async t => {

    await t
    .click(page.signinbutton)

    await t
    .click(page.forgot)

    await t
    .typeText(page.mailfield, data.invalidmail)
    .click(page.retrieve)
    .expect(page.failuremessage.innerText).contains('There is 1 error')

});

test('Error al crear cuenta con un correo existente', async t => {

    await t
    .click(page.signinbutton)

    await t
    .typeText(page.email_input, data.retrievemail)
    .click(page.newaccount)
    .expect(page.alert.innerText).contains('An account using this email address has already been registered.')

});