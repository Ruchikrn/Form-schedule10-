///======Clone method
$(document).ready(function () {
  $('body').on('click', '.add_btn_frm_field', function (e) {
    var index =
      $(e.target).closest('.cloning').find('.files_upload').length + 1;
    var cloned_el = $(e.target).closest('.files_upload').clone(true);

    $(e.target)
      .closest('.cloning')
      .last()
      .append(cloned_el)
      .find('.remove_btn_frm_field:not(:first)')
      .prop('disabled', false);

    $(e.target)
      .closest('.cloning')
      .find('.remove_btn_frm_field')
      .first()
      .prop('disabled', true);
    
    $(e.target)
      .closest('.cloning')
      .find('.files_upload')
      .last()
      .find('input')
      .val('');
  });
});

// $(document).ready(function () {
//   $('body').on('click', '.add_btn_frm_field', function () {
//     console.log('clicked');
//     var index = $('.cloning').find('.files_upload').length + 1;
//     $('.cloning').append(`
// <div class="col-md-6">
//                       <span for="">Front:</span>
//                       <input type="file" name="citizenship_front" class='form-control'>
//                     </div>
//                     <div class="col-md-6">
//                       <span for="">Back:</span>
//                       <input type="file" name="citizenship_Back" class='form-control'>
//                     </div>
//                     <button type="button"
//                       class="btn btn-info btn-sm text-nowrap add_btn_frm_field">Add
//                       Field</button>
//                       <button type="button"
//                       class="btn btn-danger btn-sm text-nowrap remove_btn_frm_field">X</button>
// `);
//     $('.cloning')
//       .find('.remove_btn_frm_field:not(:first)')
//       .prop('disabled', false);
//     $('.cloning').find('.remove_btn_frm_field').first().prop('disabled', true);
//   });
// });
$(document).ready(function () {
  //===== delete the form fieed row
  $('body').on('click', '.remove_btn_frm_field', function () {
    $(this).closest('.files_upload').remove();
    console.log('success');
  });
});