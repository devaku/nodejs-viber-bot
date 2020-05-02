document.querySelectorAll('.icon').forEach((el) => {
    // Separate logic for nonmodal
    // and modal
    if (el.classList.contains('icon-nonmodal')) {
        el.addEventListener('click', QuantityClickNonmodal);
    } else {
        el.addEventListener('click', QuantityClickModal);
    }
});

document.querySelectorAll('.box-option').forEach((el) => {
    // Separate logic for nonmodal
    // and modal
    if (el.classList.contains('box-option-nonmodal')) {
        el.addEventListener('click', BoxOptionNonModal);
    } else {
        el.addEventListener('click', BoxOptionModal);
    }
});

// Loops up from the given element
// and tries to find the parent container that has
// the given string
function GetSpecificParentContainer(el, classString) {
    let groupContainer = el;
    // console.log(groupContainer);
    while (!groupContainer.classList.contains(classString)) {
        groupContainer = groupContainer.parentNode;
    }
    return groupContainer;
}

function BoxOptionModal(e) {
    let target = e.target;

    // Get the boxOption
    let boxOption = GetSpecificParentContainer(target, 'box-option-modal');

    //Get the name inside the code class
    let optionName = boxOption.querySelector('code.flag-modal');
    optionName = optionName.innerText.trim();

    //Get the Group Flag
    let groupFlag = document.querySelector(`input[name='${optionName}'`);

    //Get the boxOptionFlag
    let optionFlag = boxOption.querySelector('input[type=hidden].flag-modal');

    // If a boxoption is already ticked
    // clicking again would disable it

    // Check if adding/removing boxoptions are allowed by the groupflag
    let groupFlagValue = parseInt(groupFlag.value);

    // We will only add/subtract if the groupFlag allows
    // Check if the current optionflag being turned would not go over the limit

    // If we're adding new options
    if (optionFlag.value === '0') {
        // If user is only allowed one choice
        // Then previous turned on highlight will have to turn off

        if (parseInt(groupFlag.max) === 1 && parseInt(groupFlag.min) === 1) {
            // Get the parentcontainer containing all the other box options
            let choiceContainer = GetSpecificParentContainer(
                target,
                'choice-container'
            );

            // Turn of all the other previous options
            choiceContainer
                .querySelectorAll('.flag-modal.option-flag')
                .forEach(function (tag) {
                    tag.setAttribute('value', 0);
                });

            // Remove highlights from the other previous options
            // Turn them off basically
            choiceContainer
                .querySelectorAll('div.box-option-modal.border-highlight')
                .forEach(function (tag) {
                    tag.classList.remove('border-highlight');
                });

            // Turn on optionFlag
            optionFlag.setAttribute('value', 1);

            // add highlight to box
            boxOption.classList.add('border-highlight');
        } else {
            // This if is only used if Min and Max > 1
            if (groupFlagValue + 1 > groupFlag.max) {
                alert(
                    'Maximum options reached. Remove a previous option to add this one'
                );
            } else {
                // Turn on optionFlag
                optionFlag.setAttribute('value', 1);

                //Update the group flag
                groupFlag.setAttribute('value', groupFlagValue + 1);

                // add highlight to box
                boxOption.classList.add('box-option-highlight');
            }
        }
    }
    // If we're removing options
    else {
        if (groupFlagValue - 1 < groupFlag.min) {
            alert('MINIMUM');
        } else {
            // Turn off optionFlag
            optionFlag.setAttribute('value', 0);

            // Update groupFlag
            groupFlag.setAttribute('value', groupFlagValue - 1);

            // remove highlight from box
            boxOption.classList.remove('box-option-highlight');
        }
    }

    boxOption.classList.add('border-highlight');
}

function BoxOptionNonModal(e) {
    let target = e.target;

    // Get the boxOption
    let boxOption = GetSpecificParentContainer(target, 'box-option-nonmodal');

    //Get the name inside the code class
    let optionName = boxOption.querySelector('code.flag-none-modal');
    optionName = optionName.innerText.trim();

    //Get the Group Flag
    let groupFlag = document.querySelector(`input[name='${optionName}'`);

    //Get the boxOptionFlag
    let optionFlag = boxOption.querySelector(
        'input[type=hidden].flag-none-modal'
    );

    // Get the modal ID. Used for opening modals, if there is one.
    let modalId = boxOption
        .querySelector(`input[name='choiceIndex']`)
        .value.toString();

    modalId = 'modal_' + modalId;

    //Check if modal exists
    let modalExists = document.getElementById(modalId) != null;

    // If a boxoption is already ticked
    // clicking again would disable it

    // Check if adding/removing boxoptions are allowed by the groupflag
    let groupFlagValue = parseInt(groupFlag.value);

    // We will only add/subtract if the groupFlag allows
    // Check if the current optionflag being turned would not go over the limit

    // If we're adding new options
    if (optionFlag.value === '0') {
        // If user is only allowed one choice
        // Then previous turned on highlight will have to turn off

        if (parseInt(groupFlag.max) === 1 && parseInt(groupFlag.min) === 1) {
            // Get the parentcontainer containing all the other box options
            let choiceContainer = GetSpecificParentContainer(
                target,
                'choice-container'
            );

            // Turn of all the other previous options
            choiceContainer
                .querySelectorAll('.flag-none-modal.option-flag')
                .forEach(function (tag) {
                    tag.setAttribute('value', 0);
                });

            // Remove highlights from the other previous options
            // Turn them off basically
            choiceContainer
                .querySelectorAll('div.box-option-nonmodal.border-highlight')
                .forEach(function (tag) {
                    tag.classList.remove('border-highlight');
                });

            // Turn on optionFlag
            optionFlag.setAttribute('value', 1);

            // add highlight to box
            boxOption.classList.add('border-highlight');

            console.log(modalId);
            console.log(modalExists);
            if (modalExists) {
                $('#' + modalId).modal({ backdrop: 'static', keyboard: false });
            }
        } else {
            // This if is only used if Min and Max > 1
            if (groupFlagValue + 1 > groupFlag.max) {
                alert(
                    'Maximum options reached. Remove a previous option to add this one'
                );
            } else {
                // Turn on optionFlag
                optionFlag.setAttribute('value', 1);

                //Update the group flag
                groupFlag.setAttribute('value', groupFlagValue + 1);

                // add highlight to box
                boxOption.classList.add('box-option-highlight');

                console.log(modalId);
                console.log(modalExists);
                if (modalExists) {
                    $('#' + modalId).modal({
                        backdrop: 'static',
                        keyboard: false,
                    });
                }
            }
        }
    }
    // If we're removing options
    else {
        if (groupFlagValue - 1 < groupFlag.min) {
            alert('MINIMUM');
        } else {
            // Turn off optionFlag
            optionFlag.setAttribute('value', 0);

            // Update groupFlag
            groupFlag.setAttribute('value', groupFlagValue - 1);

            // remove highlight from box
            boxOption.classList.remove('box-option-highlight');
        }
    }

    boxOption.classList.add('border-highlight');
}

function QuantityClickModal(e) {
    let target = e.target;
    //Check if allowed to have another flag turned on
    //Grab GroupFlagName
    let groupFlagName = 'flagGroup_' + target.name.split('::')[2];
    let groupFlag = document.querySelector(`input[name='${groupFlagName}']`);

    //Grab optionFlag
    let optionFlagName =
        'flag_' + target.name.split('::')[1] + '_' + target.name.split('::')[2];
    let optionFlag = document.querySelector(`input[name='${optionFlagName}']`);

    // So we can add and subtract
    let groupFlagValue = parseInt(groupFlag.value);

    //Grab the adjacent textbox and increment
    //decrement accordingly
    if (target.classList.contains('icon-plus')) {
        //We will only add/subtract if the groupFlag allows
        //Check if the current optionflag being turned would not go over the limit
        if (optionFlag.value === '0') {
            if (groupFlagValue + 1 > groupFlag.max) {
                alert(
                    'Maximum options reached. Remove a previous option to add this one'
                );
            } else {
                IncrementTextbox(target);
                //Update the flag associated with it
                UpdateOptionFlagQuantity(target, optionFlagName);

                //Update the group flag
                groupFlag.setAttribute('value', groupFlagValue + 1);
            }
        } else {
            IncrementTextbox(target);
        }
    } else {
        if (optionFlag.value === '1') {
            if (groupFlagValue - 1 < groupFlag.min) {
                alert('MINIMUM');
            } else {
                DecrementTextbox(target);
                // Update the optionflag associated with it
                // If Quantity > 0 = 0
                // Otherwise 1
                UpdateOptionFlagQuantity(target, optionFlagName);

                // If option flag has become 0, then update group flag
                if (optionFlag.value === '0') {
                    groupFlag.setAttribute('value', groupFlagValue - 1);
                }
            }
        } else {
            DecrementTextbox(target);
        }
    }
}

function QuantityClickNonmodal(e) {
    let target = e.target;
    //Check if allowed to have another flag turned on
    //Grab GroupFlagName
    let groupFlagName = 'flagGroup_' + target.name.split('::')[2];
    let groupFlag = document.querySelector(`input[name='${groupFlagName}']`);

    //Grab optionFlag
    let optionFlagName =
        'flag_' + target.name.split('::')[1] + '_' + target.name.split('::')[2];
    let optionFlag = document.querySelector(`input[name='${optionFlagName}']`);

    // So we can add and subtract
    let groupFlagValue = parseInt(groupFlag.value);

    //Grab the adjacent textbox and increment
    //decrement accordingly
    if (target.classList.contains('icon-plus')) {
        //We will only add/subtract if the groupFlag allows
        //Check if the current optionflag being turned would not go over the limit
        if (optionFlag.value === '0') {
            if (groupFlagValue + 1 > groupFlag.max) {
                alert(
                    'Maximum options reached. Remove a previous option to add this one'
                );
            } else {
                IncrementTextbox(target);
                //Update the flag associated with it
                UpdateOptionFlagQuantity(target, optionFlagName);

                //Update the group flag
                groupFlag.setAttribute('value', groupFlagValue + 1);
            }
        } else {
            IncrementTextbox(target);
        }
    } else {
        if (optionFlag.value === '1') {
            if (groupFlagValue - 1 < groupFlag.min) {
                alert('MINIMUM');
            } else {
                DecrementTextbox(target);
                // Update the optionflag associated with it
                // If Quantity > 0 = 0
                // Otherwise 1
                UpdateOptionFlagQuantity(target, optionFlagName);

                // If option flag has become 0, then update group flag
                if (optionFlag.value === '0') {
                    groupFlag.setAttribute('value', groupFlagValue - 1);
                }
            }
        } else {
            DecrementTextbox(target);
        }
    }
}

function UpdateOptionFlagQuantity(el, name) {
    let optionFlagName = document.querySelector(`input[name='${name}']`);
    let quantityTextbox = el.parentNode.querySelector('input[type=text]');

    if (quantityTextbox.value > 0) {
        optionFlagName.setAttribute('value', '1');
    } else {
        optionFlagName.setAttribute('value', '0');
    }
}

function IncrementTextbox(el) {
    let quantityTextbox = el.parentNode.querySelector('input[type=text]');
    let currentValue = parseInt(quantityTextbox.value);
    if (currentValue + 1 <= quantityTextbox.max) {
        quantityTextbox.setAttribute('value', currentValue + 1);
    }
}

function DecrementTextbox(el) {
    let quantityTextbox = el.parentNode.querySelector('input[type=text]');
    let currentValue = parseInt(quantityTextbox.value);
    if (currentValue - 1 >= quantityTextbox.min) {
        quantityTextbox.setAttribute('value', currentValue - 1);
    }
}
