export default class FuncKeys {
   static caps(board, isC, isS) {
      if (isC && !isS) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caps');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else if (isC && isS) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.shiftCaps');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else if (!isC && isS) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caseUp');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caseDown');
                  newEl.classList.remove('hidden');
               }
            });
         });
      }
   }

   static shift(board, isS, isCaps) {
      if (isS && !isCaps) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caseUp');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else if (isS && isCaps) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.shiftCaps');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else if (!isS && isCaps) {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caps');
                  newEl.classList.remove('hidden');
               }
            });
         });
      } else {
         board.forEach((key) => {
            const allSpan = key.querySelectorAll('span');
            allSpan.forEach((el) => {
               if (!el.classList.contains('hidden')) {
                  el.classList.add('hidden');
                  const newEl = el.parentElement.querySelector('.caseDown');
                  newEl.classList.remove('hidden');
               }
            });
         });
      }
   }
}
