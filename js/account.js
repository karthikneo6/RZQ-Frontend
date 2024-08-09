// my account js 
let closeModal = document.getElementById('close-modal');
let filterModal = document.querySelector('.filter-modal');
let outsideFilter = document.getElementById('outside-filter');

let addressCloseModal = document.getElementById('address-close-modal');
let addressModal = document.querySelector('.address-modal');
let closeModalDelete = document.getElementById('close-modal-delete');
let deleteModal = document.querySelector('.delete-modal');

// console.log(closeModal);
closeModal.addEventListener('click', function () {
    // Add the 'close-modal' class
    filterModal.classList.add('close-modal');
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        filterModal.classList.remove('close-modal');
    }, 1000); // 1000 milliseconds = 1 second
    console.log(filterModal);
});

addressCloseModal.addEventListener('click', function () {
    // Add the 'close-modal' class
    addressModal.classList.add('close-modal-address');
    console.log(addressModal);
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        addressModal.classList.remove('close-modal-address');
    }, 1000); // 1000 milliseconds = 1 second
    // console.log(addressModal);
});

closeModalDelete.addEventListener('click', function () {
    // Add the 'close-modal' class
    deleteModal.classList.add('close-modal-delete');
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        deleteModal.classList.remove('close-modal-delete');
    }, 1000); // 1000 milliseconds = 1 second
    // console.log(addressModal);
});

// outsideFilter.addEventListener('click', function () {
//     filterModal.classList.add('close-outside-modal');
//     // Set a timeout to remove the 'close-modal' class after a delay
//     setTimeout(function () {
//         filterModal.classList.remove('close-outside-modal');
//     }, 1000); // 1000 milliseconds = 1 second
//     console.log(filterModal);
// });
