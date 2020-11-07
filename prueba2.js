import page from './pagemodel'
import { data } from './datos';

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Busqueda sin resultados', async t => {

    await t
    .typeText(page.searchfield, data.noresults)

    await t
    .click(page.searchbutton)

    await t
    .expect(page.noresults.innerText).contains('No results were found for your search')

});

test('Busqueda con resultados y agregar a carrito', async t => {

    await t
    .typeText(page.searchfield, data.product)

    await t
    .click(page.searchbutton)

    await t
    .click(page.summerdress)
    
    await t
    .click(page.addtocart)

    await t
    .expect(page.checkout.innerText).contains('Proceed to checkout')

});