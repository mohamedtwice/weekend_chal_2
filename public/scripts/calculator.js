$(document).ready(function() {

    var result = [];
    var x;
    var y;
    var z;

    $('#Button0').on('click', function() {
      $('#input').empty();
      console.log(this.value);
      console.log('button0');
      result.push(0);
      $('#input').html(result);
    }); //end Button0
    $('#Button1').on('click', function() {
      $('#input').empty();
      console.log(this.value);
      console.log('button1');
      result.push(1);
      $('#input').html(result);
    }); //end Button1
    $('#Button2').on('click', function() {
      $('#input').empty();
      console.log(this.value);
      console.log('button2');
      result.push(2);
      $('#input').html(result);
    }); //end Button2
    $('#Button3').on('click', function() {
      $('#input').empty();
      console.log(this.value);
      console.log('button3');
      result.push(3);
      $('#input').html(result);
    }); //end Button3
    $('#Button4').on('click', function() {
      console.log(this.value);
      console.log('button4');
      result.push(4);
      $('#input').html(result);
    }); //end Button4
    $('#Button5').on('click', function() {
      console.log(this.value);
      console.log('button5');
      result.push(5);
      $('#input').html(result);
    }); //end Button5
    $('#Button6').on('click', function() {
      console.log(this.value);
      console.log('button6');
      result.push(6);
      $('#input').html(result);
    }); //end Button6
    $('#Button7').on('click', function() {
      console.log(this.value);
      console.log('button7');
      result.push(7);
      $('#input').html(result);
    }); //end Button7
    $('#Button8').on('click', function() {
      console.log(this.value);
      console.log('button8');
      result.push(8);
      $('#input').html(result);
    }); //end Button8
    $('#Button9').on('click', function() {
      console.log(this.value);
      console.log('button9');
      result.push(9);
      $('#input').html(result);
    }); //end Button9
    $('#clearButton').on('click', function() {
      console.log('clear button');
      result.splice(0);
      $('#input').empty();
    }); //end clearButton

    $('#addButton').on('click', function() {
      $('#input').empty();
      result.push('+');
      $('#input').html(result);
      console.log(result);
    });

    $('#subtractButton').on('click', function() {
      $('#input').empty();
      result.push('-');
      $('#input').html(result);
      console.log(result);
    });

    $('#multiplyButton').on('click', function() {
      $('#input').empty();
      result.push('x');
      $('#input').html(result);
      console.log(result);
    });

    $('#divideButton').on('click', function() {
      $('#input').empty();
      result.push('/');
      $('#input').html(result);
      console.log(result);
    });

    $('#equalsButton').on('click', function() {
      console.log('Equal Button Working');

      result.forEach(function(element, index, array) {

        if (isNaN(parseInt(element))) {
          x = result.splice(0, index).join("");
          y = result.splice(1).join("");
          console.log(x);
          console.log(y);

          if (element == "+") {
            z = "add";

            var additionObject = {
              x: x,
              y: y,
              type: "add"
            };
            $.ajax({
              type: 'POST',
              url: '/Addition',
              data: additionObject,
              success: function(response) {
                console.log('back from post:', response);
                // when back from server update display
                $('#input').val(response.resultAdd);
                $('#input').empty();
                $('#input').append(response.resultAdd);
              } // end success
            }); //end ajax
          }

          if (element == "-") {
            z = "subtract";

            var subtractionObject = {
              x: x,
              y: y,
              type: "subtract"
            }; // end objectToSend

            // use AJAX to send Object to server
            $.ajax({
              type: 'POST',
              url: '/Subtraction',
              data: subtractionObject,
              success: function(response) {
                console.log('back from post:', response);
                // when back from server update display
                $('#input').val(response.resultSubtraction);
                $('#input').empty();
                $('#input').append(response.resultSubtraction);
              } // end success
            }); //end ajax
          }

          if (element == "x") {
            z = "multiply";

            var multiplicationObject = {
              x: x,
              y: y,
              type: "multiply"
            }; // end objectToSend

            // use AJAX to send Object to server
            $.ajax({
              type: 'POST',
              url: '/Multiplication',
              data: multiplicationObject,
              success: function(response) {
                console.log('back from post:', response);
                // when back from server update display
                $('#input').val(response.resultMultiplication);
                $('#input').empty();
                $('#input').append(response.resultMultiplication);
              } // end success
            }); //end ajax
          }

          if (element == "/") {
            z = "divide";

            var divisionObject = {
              x: x,
              y: y,
              type: "divide"
            }; // end objectToSend

            // use AJAX to send Object to server
            $.ajax({
              type: 'POST',
              url: '/Division',
              data: divisionObject,
              success: function(response) {
                console.log('back from post:', response);
                // when back from server update display
                $('#input').val(response.resultDivision);
                $('#input').empty();
                $('#input').append(response.resultDivision);
              } // end success
            }); //end ajax
          }

          $('#input').html(z);
          result.splice(0);
        }
      });
    });


  } // end calculation
);
