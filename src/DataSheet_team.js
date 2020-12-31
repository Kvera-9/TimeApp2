// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';
import datasheet_team_row0_image from './images/datasheet_team_row0_image.png';
import datasheet_team_row1_image from './images/datasheet_team_row1_image.png';
import datasheet_team_row2_image from './images/datasheet_team_row2_image.png';

export default class DataSheet_team extends DataSheetBase {

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
    item['name'] = "Gabriela ";
    item['image'] = datasheet_team_row0_image;
    item['description'] = "Ofrezco clases de inglés de 1 hora.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Natalia";
    item['image'] = datasheet_team_row1_image;
    item['description'] = "Ofrezco clases de Ruso de 1 hora.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Erika";
    item['image'] = datasheet_team_row2_image;
    item['description'] = "Ofrezco clases de  matemáticas de 1 hora.";
    item.key = key++;
  }

}
