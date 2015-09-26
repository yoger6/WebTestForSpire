var itemsHolder = $('#Provider');
var target = $('#Receiver');

function loadCrazyImages(filter) {
    var itemsClone = itemsHolder.clone();
    var filters;

    if (filter == 'all') {
        filters = itemsClone.find('li');
    } else {
        filters = itemsClone.find('li[data-type=' + filter + ']');
    }
    target.empty();
    target.append(filters);
}

function applyFilter(e) {
    var nearestActive = $(this).closest('#Filters').find('li');
    nearestActive.removeClass('active')
    $(this).addClass('active');
    e.preventDefault();
    loadCrazyImages($(this).attr('data-value'));

}

$('#Filters li').click(applyFilter);
$(document).ready(loadCrazyImages('all'));