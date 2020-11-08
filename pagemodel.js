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
        this.newinfo = Selector('#account-creation_form > div:nth-child(1) > h3');

        //Elementos sign in para una cuenta existente
        this.authentication = Selector('#columns > div.breadcrumb.clearfix > span.navigation_page');
        this.emailregistered = Selector('#email');
        this.passwordregistered = Selector('#passwd');
        this.submit = Selector('#SubmitLogin > span');
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
        this.selectday = Selector('#days > option:nth-child(23)')
        this.month = Selector('#months');
        this.selectmonth = Selector('#months > option:nth-child(7)');
        this.year = Selector('#years');
        this.selectyear = Selector('#years > option:nth-child(22)');
        this.newsletterchkbx = Selector('#newsletter');
        this.specialofferchkbx = Selector('#optin');
        this.company_address = Selector('#company');
        this.addressline1 = Selector('#address1');
        this.addressline2 = Selector('#address2');
        this.city = Selector('#city');
        this.state = Selector('#id_state');
        this.selectstate = Selector('#id_state > option:nth-child(6)');
        this.zipcode = Selector('#postcode');
        this.country = Selector('#id_country');
        this.selectcountry = Selector('#id_country > option:nth-child(2)');
        this.addinfo = Selector('#other');
        this.homephone = Selector('#phone');
        this.mobile = Selector('#phone_mobile');
        this.registeraccount = Selector('#submitAccount > span');
        this.myaccount = Selector('#center_column > h1');       

        //Cerrar sesión
        this.signout = Selector('a').withText('Sign out');

        //Editar informacion de contacto
        this.personal = Selector('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span');
        this.currentpassword = Selector('#old_passwd');
        this.newpassword = Selector('#passwd');
        this.confirmationpwd = Selector('#confirmation');
        this.save = Selector('#center_column > div > form > fieldset > div:nth-child(11) > button > span');
        this.update = Selector('#center_column > div > p');
        
    }
}

export default new Page();