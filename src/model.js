import {Model as ModuleModel} from '@mcf/core';

const {attr,BaseModel} = ModuleModel
export const namespace = "demo"

export default class demo extends BaseModel {
  static modelName = namespace
  static fields={}
  static options={
    // idAttribute: 'serverId',
  }
}


  // console.log(Schedule.fields)
Object.assign(demo.fields,BaseModel.fields,{
    name:attr(),
    title:attr(),
})
