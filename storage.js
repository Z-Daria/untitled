import { itemToEdit, orderButtons, editButton, deleteButton } from './main.js';
export let recordsArray = localStorage.getItem('records')
? JSON.parse(localStorage.getItem('records'))
: [];

export const recordMaker = function(record) {
    const newRecord = '<div class="record">' +  orderButtons + '<div class="name"><span>' + record.name + '</span></div><div class="type"><span>' + record.type + '</span></div><div class="color"><span>' + record.color + '</span></div>' + editButton + deleteButton + '</div>';
    $(newRecord).insertBefore('.fields');
};

export function findIndex(array, query) {
    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        if (obj.name == query.name && obj.type == query.type && obj.color == query.color) {
            return i;
        }
    }
    return -1;
};

export function changePositionUp(array, selector) {
    const name = selector.find('.name span')[0].textContent;
    const type = selector.find('.type span')[0].textContent;
    const color = selector.find('.color span')[0].textContent;
    const obj = { name: name, type: type, color: color};
    const index = findIndex(array, obj);
    console.log(index);
    let temp = array[index - 1];
    array[index - 1] = array[index];
    array[index] = temp;
    console.log(array);
};

export function changePositionDown(array, selector) {
    const name = selector.find('.name span').text();
    const type = selector.find('.type span').text();
    const color = selector.find('.color span').text();
    const obj = { name: name, type: type, color: color};
    const index = findIndex(array, obj);
    let temp = array[index + 1];
    array[index + 1] = array[index];
    array[index] = temp;
    console.log(array);
};

export function editRecord(array, selector) {
    const name = selector.children('.name').find('input').val();
    const type = selector.children('.type').find('input').val();
    const color = selector.children('.color').find('input').val();
    const obj = { name: name, type: type, color: color };
    array[itemToEdit] = obj;
};


export const removeFromStorage = function(record) {
    let index = findIndex(recordsArray, record);
    recordsArray.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(recordsArray));
};

