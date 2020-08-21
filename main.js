const orderButtons = `<div class="order"><img class="move-up" src="https://img.icons8.com/material-outlined/24/000000/collapse-arrow.png"/>
<img class="move-down" src="https://img.icons8.com/material-outlined/24/000000/expand-arrow.png"/></div>`;
const editButton = `<div class="edit">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 172 172"
                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#001b48"><path d="M137.39844,14.33333c-5.18687,0 -10.37375,1.97531 -14.33333,5.9349l-8.39844,8.39844l28.66667,28.66667l8.39844,-8.39844c7.912,-7.912 7.912,-20.7475 0,-28.66667c-3.95958,-3.95958 -9.14646,-5.9349 -14.33333,-5.9349zM103.91667,39.41667l-82.41667,82.41667v28.66667h28.66667l82.41667,-82.41667z"></path></g></g></svg>
</div>`;
const deleteButton = `<div class="delete">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M169.34609,86c0,-46.02344 -37.32266,-83.34609 -83.34609,-83.34609c-46.02344,0 -83.34609,37.32266 -83.34609,83.34609c0,46.02344 37.32266,83.34609 83.34609,83.34609c46.02344,0 83.34609,-37.32266 83.34609,-83.34609z" fill="#001b48"></path><path d="M95.74219,86l24.35547,-28.28594c2.65391,-3.09062 2.31797,-7.72656 -0.77266,-10.41406c-3.09063,-2.65391 -7.72656,-2.31797 -10.38047,0.77266l-22.94453,26.63984l-22.91094,-26.60625c-2.65391,-3.09062 -7.32344,-3.42656 -10.41406,-0.77266c-3.09062,2.65391 -3.42656,7.32344 -0.77266,10.41406l24.35547,28.25234l-24.35547,28.28594c-2.65391,3.09062 -2.31797,7.72656 0.77266,10.41406c1.37734,1.20937 3.09062,1.78047 4.80391,1.78047c2.08281,0 4.13203,-0.87344 5.57656,-2.55313l22.91094,-26.60625l22.91094,26.60625c1.44453,1.67969 3.52734,2.55313 5.57656,2.55313c1.71328,0 3.42656,-0.57109 4.80391,-1.78047c3.09063,-2.65391 3.42656,-7.32344 0.77266,-10.41406z" fill="#018ABE"></path></g></g></svg>
</div>`;

$(document).ready(() => {
    $('.plus-button svg').on('mouseenter', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgba(214, 232, 238, 0.3)',
            cursor: 'pointer'
        });
    }).on('mouseleave', () => {
        $(event.currentTarget).css({
            backgroundColor: '',
            cursor: 'auto'
        });
    });

    // show input fields for adding new color
    $('.plus-button').on('click', () => {
        $('.fields').css('display', 'grid');
    });

    $('#submit').on('mouseenter', event => {
        $(event.currentTarget).css({
            borderColor: '#001B48',
            cursor: 'pointer'
        });
    }).on('mouseleave', event => {
        $(event.currentTarget).css({
            borderColor: '',
            cursor: 'auto'
        }).on('click', () => { // add new color record
            const newRecord = '<div class="record">' +  orderButtons + '<div class="name"><span>' + $('#name').val() + '</span></div><div class="type"><span>' + $('#type').val() + '</span></div><div class="color"><span>' + $('#color').val() + '</span></div>' + editButton + deleteButton + '</div>';
            $(newRecord).insertBefore('.fields');
            $('.fields').css('display', 'none');
        })
    });

    $(document).on('mouseenter', '.move-up, .move-down', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgba(214, 232, 238, 0.3)',
            cursor: 'pointer'
        });
    }).on('mouseleave', '.move-up, .move-down', event => {
        $(event.currentTarget).css({
            backgroundColor: '',
            cursor: 'auto'
        });
    });

    // move record up
    $(document).on('click', '.move-up', event => {
        const $itemToMove = $(event.currentTarget).parent().parent();
        if ($itemToMove.prev()[0] !== $('.head')[0]) {
            $itemToMove.insertBefore($itemToMove.prev());
        };
    });

    // move record down
    $(document).on('click', '.move-down', event => {
        const $itemToMove = $(event.currentTarget).parent().parent();
        if ($itemToMove.next()[0] !== $('.fields')[0]) {
            $itemToMove.insertAfter($itemToMove.next());
        };
    });

    $(document).on('mouseenter', '.edit, .delete', event => {
        $(event.currentTarget).css('cursor', 'pointer');
    }).on('mouseleave', '.edit, .delete', event => {
        $(event.currentTarget).css('cursor', 'auto');
    });

    // edit record
    $(document).on('click', '.edit', event => {
        const nameText = $(event.currentTarget).siblings('.name').find('span').text();
        const typeText = $(event.currentTarget).siblings('.type').find('span').text();
        const colorText = $(event.currentTarget).siblings('.color').find('span').text();
        $(event.currentTarget).addClass('ok').removeClass('edit').html(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="28" height="28"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#001b48"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM71.66667,124.80033l-33.7335,-33.7335l10.13367,-10.13367l23.59983,23.59983l52.2665,-52.2665l10.13367,10.13367z"></path></g></g></svg>`);
        $(event.currentTarget).siblings('.name').html('<input class="input-field" type="text" value="' + nameText + '"/>');
        $(event.currentTarget).siblings('.type').html('<input class="input-field" type="text" value="' + typeText + '"/>');
        $(event.currentTarget).siblings('.color').html('<input class="input-field" type="text" value="' + colorText + '"/>');
        event.stopPropagation();
    });

    $(document).on('click', '.ok', event => {
        $(event.currentTarget).addClass('edit').removeClass('ok').html(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="24" height="24"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#001b48"><path d="M137.39844,14.33333c-5.18687,0 -10.37375,1.97531 -14.33333,5.9349l-8.39844,8.39844l28.66667,28.66667l8.39844,-8.39844c7.912,-7.912 7.912,-20.7475 0,-28.66667c-3.95958,-3.95958 -9.14646,-5.9349 -14.33333,-5.9349zM103.91667,39.41667l-82.41667,82.41667v28.66667h28.66667l82.41667,-82.41667z"></path></g></g></svg>`);
        const $name = $(event.currentTarget).siblings('.name');
        const $type = $(event.currentTarget).siblings('.type');
        const $color = $(event.currentTarget).siblings('.color');
        $name.html('<span>' + $name.find('input')[0].value + '</span>');
        $type.html('<span>' + $type.find('input')[0].value + '</span>');
        $color.html('<span>' + $color.find('input')[0].value + '</span>');
    });


    // remove record
    $(document).on('click', '.delete', event => {
        $(event.currentTarget).parent().remove();
    });
});