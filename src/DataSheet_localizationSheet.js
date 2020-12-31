// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "slogantop_text_12307";
    item['en'] = "It’s nice to meet you";
    
    item = {};
    this.items.push(item);
    item['key'] = "slogantop_textcopy_323518";
    item['en'] = "Banco del tiempo";
    
    item = {};
    this.items.push(item);
    item['key'] = "werethirsty_text_422311";
    item['en'] = "¿Alguna vez te habías planteado el hecho de que tu tiempo puede ser una moneda de cambio?\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "teammember_text_1015414";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "teammember_textcopy_404214";
    item['en'] = "Description";
    
    item = {};
    this.items.push(item);
    item['key'] = "contactus_header_35473";
    item['en'] = "Contacta con el banco del tiempo";
    
    item = {};
    this.items.push(item);
    item['key'] = "contactus_sendbutton_558898";
    item['en'] = "Enviar\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "contactus_emailfield_625829";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "sociallinks_credits_869374";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "sociallinks_copyright_1021741";
    item['en'] = "2020 TimeApp";
    
    item = {};
    this.items.push(item);
    item['key'] = "whatwedo_text_813963";
    item['en'] = "-El valor del tiempo!";
    
    item = {};
    this.items.push(item);
    item['key'] = "whatwedo_textcopy_755616";
    item['en'] = "El tiempo es un valor al que muy a menudo no le damos la importancia que debería. Y es que éste es uno de los recursos más valiosos de los que disponemos, ya que una vez gastado no se puede volver a recuperar.\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "howwedoit_text_381730";
    item['en'] = "-El intercambio de habilidades y conocimientos.\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "howwedoit_textcopy_850462";
    item['en'] = "\nCada uno de nosotros tenemos una esencia que nos hace únicos. Siempre podemos aprender algo nuevo de los demás; nuestra sociedad se ha construido gracias a la cooperación y la transferencia de conocimientos. A partir de esta aplicación queremos poner en práctica esta filosofía y facilitar la vida de la gente.\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourteam_textblock_1002658";
    item['en'] = "¡Ultimas propuestas!";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourmission_textblock_401318";
    item['en'] = "Nuestra misión:";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourpassion_textblock_209810";
    item['en'] = "Conoce nuestras categorías ";
    
    item = {};
    this.items.push(item);
    item['key'] = "menu_text_935101";
    item['en'] = "Inicio";
    
    item = {};
    this.items.push(item);
    item['key'] = "menu_textcopy4_586959";
    item['en'] = "Inicia sesión ";
    
    item = {};
    this.items.push(item);
    item['key'] = "menu_textcopy2_954691";
    item['en'] = "Busca una propuesta";
    
    item = {};
    this.items.push(item);
    item['key'] = "menu_textcopy3_778404";
    item['en'] = "Contáctanos ";
    
    item = {};
    this.items.push(item);
    item['key'] = "aboutourpassion_textcopy_240135";
    item['en'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum. Vestibulum cursus, ipsum vel placerat tincidunt, felis orci porttitor orci, non ullamcorper arcu leo in enim.";
    
    item = {};
    this.items.push(item);
    item['key'] = "aboutourpassion_textcopy2_68912";
    item['en'] = "Morbi mattis tortor lectus, vitae interdum enim consequat sit amet. Quisque in arcu libero. Praesent eu elit arcu.\n\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "map_text_895751";
    item['en'] = "Encuentra a la gente mas cercana!";
    
    item = {};
    this.items.push(item);
    item['key'] = "login1_button_1004251";
    item['en'] = "Login";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
