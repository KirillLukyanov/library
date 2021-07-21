import $ from './lib/lib';

$('button').on('click', function() {
    $(this).toggleClass('active');
});


$('div').setAttr('isPrivate', 'true');

$('div').toggleAttr('disabled');
$('div').toggleAttr('disabled');