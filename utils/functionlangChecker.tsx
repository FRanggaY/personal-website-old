import {notFound} from "next/navigation"

const dataLang = ["en_US", "in_ID"]

export function checkValidLangParam(params: string) {
  // check have '-'
  // check have 5 character
  // check index of 2 is '-'
  // check all value is lower
  
  const isValid = /^([a-z]{2})-([a-z]{2})$/.test(params);
  if (!isValid) {
    notFound();
  }
  return isValid;
}
  
export function changeLangValue(params: string){
  // sub 2 char first, give '_', 2 char last
  const langValue:string = params.substring(0, 2) + '_' + params.substring(3, 5).toUpperCase()
  return langValue
}
  
export function langExists(langValue:string, data:any=dataLang){
  const isValid = data.includes(langValue);
  if(!isValid) {
    notFound();
  }
  return isValid;
}
  
export function packValueChecker(params: string){
  checkValidLangParam(params)
  
  const newValueLang = changeLangValue(params)
    
  langExists(newValueLang)
  return newValueLang
}