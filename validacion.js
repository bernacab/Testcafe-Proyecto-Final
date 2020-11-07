import page from './pagemodel'
//import { data } from './data';

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Buscar un producto', async t => {

    await t
    .typeText(page.searchfield, 't shirt')

    await t
    .click(page.searchbutton)
    .expect(page.searchfield.value).eql('t shirt')

});
test('Click en sign in', async t => {

    await t
    .click(page.signinbutton)
    .expect(page.authentication.innerText).contains('Authentication')

});
test('Click en cart', async t => {

    await t
    .click(page.cart)
    .expect(page.cart.innerText).contains('Cart')

});
test('Click en women', async t => {

    await t
    .expect(page.women.innerText).contains('WOMEN')

});
test('Click en dresses', async t => {

    await t
    .expect(page.dresses.innerText).contains('DRESSES')

});
test('Click en tshirts', async t => {

    await t
    .expect(page.tshirts.innerText).contains('T-SHIRTS')

});
test('Click en popular', async t => {

    await t
    .click(page.popular)
    .expect(page.popular.innerText).contains('POPULAR')

});
test('Click en best sellers', async t => {

    await t
    .click(page.bestsell)
    .expect(page.bestsell.innerText).contains('BEST SELLERS')

});