export default class TextArea {
   static add(symb) {
      const area = document.querySelector('textarea');
      area.value += `${symb}`;
   }

   static back() {
      const area = document.querySelector('textarea');
      area.value = area.value.substring(0, area.value.length - 1);
   }
}
