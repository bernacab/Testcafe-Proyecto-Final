import {Selector} from 'testcafe';

class Page{
    constructor() {

        //Elementos pagina principal
        this.searchfield = Selector('#search_query_top');
        this.searchbutton = Selector('#searchbox > button');
        this.signinbutton = Selector('a').withText('Sign in');
        this.cart = Selector('a').withText('Cart');
        this.women = Selector('#block_top_menu > ul > li:nth-child(1) > a');
        this.dresses = Selector('#block_top_menu > ul > li:nth-child(2) > a');
        this.tshirts = Selector('#block_top_menu > ul > li:nth-child(3) > a');
        this.popular = Selector('a').withText('POPULAR');
        this.bestsell = Selector('a').withText('BEST SELLERS');

        //Elementos Sign in para crear nueva cuenta
        this.emailcreation = Selector('#email_create');
        this.newaccount = Selector('#SubmitCreate');
        this.alert = Selector('#create_account_error');

        //Elementos sign in para una cuenta existente
        this.authentication = Selector('#columns > div.breadcrumb.clearfix > span.navigation_page');
        this.emailregistered = Selector('#email');
        this.passwordregistered = Selector('#passwd');
        this.existingaccount = Selector('#SubmitLogin > span');
        this.forgot = Selector('a').withText('Forgot your password?');

        //Forgot password
        this.mailfield = Selector('#email');
        this.retrieve = Selector('#form_forgotpassword > fieldset > p > button > span');
        this.successmessage = Selector('#center_column > div > p');
        this.failuremessage = Selector('#center_column > div > div > p');

        //Resultados
        this.noresults = Selector('#center_column > p');
        this.summerdress = Selector('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.first-item-of-tablet-line.last-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img');

        //Add to cart
        this.addtocart = Selector('#add_to_cart > button > span');
        this.checkout = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span');

        //Información para crear cuenta nueva
        this.mrcheck = Selector('#id_gender1');
        this.firstname = Selector('#customer_firstname');
        this.lastname = Selector('#customer_lastname');
        this.email_form = Selector('#email');
        this.password = Selector('#passwd');
        this.day = Selector('#days');
        this.month = Selector('#months');
        this.year = Selector('#years');
        this.newsletterchkbx = Selector('#newsletter');
        this.specialofferchkbx = Selector('#optin')
        this.firstname_address = Selector('#firstname');
        this.lastname_address = Selector('#lastname');
        this.company_address = Selector('#company');
        this.addressline1 = Selector('#address1');
        this.addressline2 = Selector('#address2');
        this.city = Selector('#city');
        this.state = Selector('#id_state');
        this.zipcode = Selector('#postcode');
        this.country = Selector('#id_country');
        this.addinfo = Selector('#other');
        this.phone = Selector('#phone');
        this.mobile = Selector('#phone_mobile');
        this.alias = Selector('#alias');
        this.registeraccount = Selector('#submitAccount > span');        
        
    }
}

export default new Page();