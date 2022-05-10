export default class TextArea {
   static add(symb) {
      const area = document.querySelector('textarea');
      const start = area.selectionStart;
      area.setRangeText(symb);
      area.selectionStart = start + symb.length;
      area.selectionEnd = area.selectionStart;
      area.focus();
   }

   static back() {
      const area = document.querySelector('textarea');
      let start = area.selectionStart;
      const end = area.selectionEnd;
      if (area.selectionStart === area.selectionEnd) {
         if (start - 1 <= 0) {
            start = 0;
         } else {
            start -= 1;
         }
      }
      area.setRangeText('', start, end);
      area.selectionStart = start;
      area.selectionEnd = area.selectionStart;
      area.focus();
   }

   static delete() {
      const area = document.querySelector('textarea');
      const start = area.selectionStart;
      let end = area.selectionEnd;
      if (area.selectionStart === area.selectionEnd) {
         end += 1;
      }
      area.setRangeText('', start, end);
      area.selectionStart = start;
      area.selectionEnd = area.selectionStart;
   }

   static enter() {
      const area = document.querySelector('textarea');
      area.focus();
   }
}
