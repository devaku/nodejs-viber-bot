// // var target = e.currentTarget;
// // if (
// //     target.tagName === 'input' &&
// //     target.getAttribute('type') === 'text'
// // ) {
// //     // ...
// // }

// // Event for the incrementers
// document.querySelectorAll('.item-selection').forEach((el, index) => {
//     el.addEventListener('click', function (e) {
//         let el = e.target;
//         // This is for the main choice at the VERY TOP
//         if (el.classList.contains('main-item-choice')) {
//             if (el.classList.contains('icon-minus')) {
//                 //Get the input=text associated
//                 //Get the parent node
//                 let textbox = el.parentNode.querySelector('.textbox');
//                 let computed = parseInt(textbox.value) - 1;
//                 //Check if computed is valid for the textbox
//                 if (computed >= textbox.min) {
//                     textbox.value = computed;
//                 }
//             } else if (el.classList.contains('icon-plus')) {
//                 //Get the input=text associated
//                 //Get the parent node
//                 let textbox = el.parentNode.querySelector('.textbox');
//                 let computed = parseInt(textbox.value) + 1;
//                 //Check if computed is valid for the textbox
//                 if (computed <= textbox.max) {
//                     textbox.value = computed;
//                 }
//             }
//         } else {
//             //Check if either increment or decrement
//             //Check the classes attached to the holder
//             if (el.classList.contains('icon-minus')) {
//                 //Get the input=text associated
//                 //Get the parent node
//                 let textbox = el.parentNode.querySelector('.textbox');
//                 let computed = parseInt(textbox.value) - 1;

//                 //Get the adjacent input that serves as the flag
//                 let flag = el.parentNode.querySelector('input[type=hidden]');

//                 //Go up the DOM
//                 let groupContainer = GetSpecificParentContainer(
//                     el,
//                     'item-group-container'
//                 );

//                 // Main input that counts the choices in the group
//                 let hiddenInput = groupContainer.querySelector(
//                     'input[type=hidden]'
//                 );
//                 let flagCount = CountFlagsOn(el);

//                 //Only allow addition of another flag if max is not reached
//                 if (flagCount - 1 < hiddenInput.min) {
//                     // alert('Minimum must be maintained');
//                 } else {
//                     //Check if computed is valid for the textbox
//                     if (computed >= textbox.min) {
//                         textbox.value = computed;
//                     }

//                     //Update flag
//                     if (computed > 0) {
//                         flag.value = 1;
//                     } else {
//                         flag.value = 0;
//                     }
//                 }
//             } else if (el.classList.contains('icon-plus')) {
//                 let textbox = el.parentNode.querySelector('.textbox');
//                 //Get the adjacent input that serves as the flag
//                 let flag = el.parentNode.querySelector('input[type=hidden]');

//                 //Go up the DOM
//                 let groupContainer = GetSpecificParentContainer(
//                     el,
//                     'item-group-container'
//                 );

//                 let computed = parseInt(textbox.value) + 1;

//                 // Main input that counts the choices in the group
//                 let hiddenInput = groupContainer.querySelector(
//                     'input[type=hidden]'
//                 );
//                 let flagCount = CountFlagsOn(el);
//                 //If flag is NOT ON yet for the particular choice
//                 if (flag.value != 1) {
//                     //Only allow addition of another flag if max is not reached
//                     if (flagCount + 1 > hiddenInput.max) {
//                         alert('Max choices have been reached');
//                     } else {
//                         //Check if computed is valid for the textbox
//                         if (computed <= textbox.max) {
//                             textbox.value = computed;
//                         }

//                         //Update flag
//                         if (computed > 0) {
//                             flag.value = 1;
//                         } else {
//                             flag.value = 0;
//                         }
//                     }
//                 } else {
//                     //Check if computed is valid for the textbox
//                     if (computed <= textbox.max) {
//                         textbox.value = computed;
//                     }

//                     //Update flag
//                     if (computed > 0) {
//                         flag.value = 1;
//                     } else {
//                         flag.value = 0;
//                     }
//                 }
//             }
//         }
//     });
// });

// // None modal
// // Event for Single Choices
// document.querySelectorAll('.box-option').forEach((el, index) => {
//     el.addEventListener('click', function (e) {
//         //Go up the DOM
//         let groupContainer = GetSpecificParentContainer(
//             el,
//             'item-group-container'
//         );

//         // Main input that counts the choices in the group
//         let hiddenInput = groupContainer.querySelector('input[type=hidden]');

//         let flagCount = CountFlagsOn(el);

//         // Grab the flag that marks if option was chosen
//         let flags = el.querySelectorAll('input[type=hidden]');
//         // Convert nodelist to array
//         flags = Array.from(flags);
//         console.log(flags);
//         let flag = flags.find((flagItem) => {
//             // Filter is just used to avoid the other hidden input
//             return flagItem.name.includes('flag');
//         });

//         console.log('FOUND FLAG');
//         console.log(flag);

//         let choices = groupContainer
//             .querySelector('.choice-container')
//             .querySelectorAll('.border-highlight');

//         if (choices.length >= hiddenInput.max) {
//             // Remove the highlight from previous choice
//             choices.forEach((element) => {
//                 element.classList.remove('border-highlight');
//             });

//             // Add Highlight
//             el.classList.add('border-highlight');

//             // Open modal
//             let modalId = el.querySelector('input[type=hidden]').value;

//             $('#' + modalId).modal({
//                 backdrop: 'static',
//                 keyboard: false,
//             });
//         } else {
//             el.classList.add('border-highlight');

//             // Open modal
//             let modalId = el.querySelector('input[type=hidden]').value;
//             $('#' + modalId).modal({
//                 backdrop: 'static',
//                 keyboard: false,
//             });
//         }
//     });
// });

// // MODAL
// // Event for Single Choices
// document.querySelectorAll('.modal-box-option').forEach((el, index) => {
//     el.addEventListener('click', function (e) {
//         //Go up the DOM
//         let groupContainer = GetSpecificParentContainer(
//             el,
//             'item-group-container'
//         );

//         // Main input that counts the choices in the group
//         let hiddenInput = groupContainer.querySelector('input[type=hidden]');
//         let flagCount = CountFlagsOn(el);

//         console.log(groupContainer);
//         let choices = groupContainer
//             .querySelector('.choice-container')
//             .querySelectorAll('.modal-border-highlight');

//         if (choices.length >= hiddenInput.max) {
//             // Remove the highlight from previous choice
//             choices.forEach((element) => {
//                 element.classList.remove('modal-border-highlight');
//             });

//             // Add Highlight
//             el.classList.add('modal-border-highlight');
//         } else {
//             el.classList.add('modal-border-highlight');
//         }
//     });
// });

// function CountFlagsOn(el) {
//     // Check flags afterwards
//     // Get the hidden input that has the min-max of said group
//     // Climb up the DOM until you find it
//     let groupContainer = GetSpecificParentContainer(el, 'item-group-container');

//     //Get the options inside the choice-container
//     let choiceContainer = groupContainer
//         .querySelector('.choice-container')
//         .querySelectorAll('.item-option');

//     // Get the flags from the choices
//     let flags = Array.from(choiceContainer, (el) => {
//         let flag = el.querySelectorAll('input[type=hidden]');

//         // Convert nodelist to array
//         let temp = Array.from(flag);
//         console.log('COUNT FLAGS ON');
//         console.log(temp);

//         //Find the 'flag' input
//         flag = temp.find((flagItem) => {
//             return flagItem.name.includes('flag');
//         });
//         return flag.value;
//     }).reduce(
//         (accumulator, currentValue) =>
//             currentValue >= 1 ? accumulator + 1 : accumulator,
//         0
//     );
//     return flags;
// }

// function GetSpecificParentContainer(el, classString) {
//     let groupContainer = el.parentNode;
//     while (!groupContainer.classList.contains(classString)) {
//         groupContainer = groupContainer.parentNode;
//     }
//     return groupContainer;
// }
