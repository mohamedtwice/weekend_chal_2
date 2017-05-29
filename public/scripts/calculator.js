$(document).ready(function() {

  // add button
  $('#addButton').on('click', function() {
    console.log('Add Button Working');
    console.log($('#value1').val());
    console.log($('#value2').val());

    var additionObject = {
      x: $('#value1').val(),
      y: $('#value2').val(),
      type: "add"
    }; // end objectToSend
    console.log('sending:', additionObject);

    // use AJAX to send Object to server
    $.ajax({
      type: 'POST',
      url: '/Addition',
      data: additionObject,
      success: function(response) {
        console.log('back from post:', response);
        // when back from server update display
        $('#answer').val(response.resultAdd);
        $('#answer').append(response.resultAdd);
      } // end success
    }); //end ajax
  }); // end add

  // subtract button
  $('#subtractButton').on('click', function() {
    console.log('Subtract Button Working');
    console.log($('#value1').val());
    console.log($('#value2').val());

    var objectToSend = {
      x: $('#value1').val(),
      y: $('#value2').val(),
      type: "subtract"
    }; // end objectToSend
    console.log('sending:', objectToSend);
  }); // end subtract

  // multiply button
  $('#multiplyButton').on('click', function() {
    console.log('Multiply Button Working');
    console.log($('#value1').val());
    console.log($('#value2').val());

    var objectToSend = {
      x: $('#value1').val(),
      y: $('#value2').val(),
      type: "multiply"
    }; // end objectToSend
    console.log('sending:', objectToSend);
  }); //end multiply

  //divide button
  $('#divideButton').on('click', function() {
    console.log('Divide Button Working');

    console.log($('#value1').val());
    console.log($('#value2').val());

    var objectToSend = {
      x: $('#value1').val(),
      y: $('#value2').val(),
      type: "divide"
    }; // end objectToSend
    console.log('sending:', objectToSend);
  }); //end divide

  // clear button
  $('#clearButton').on('click', function() {
    console.log('Clear Button Working');
    $('#value1').val('');
    $('#value2').val('');
  }); //end clear
}); // document load
