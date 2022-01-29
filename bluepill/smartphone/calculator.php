<!-- Table to show calculator -->
<div class="center">

  <!-- row to have result display and clear result  -->
    <div class="result">
        <input type="text" id="result" />
    </div>

  <!-- numeric and operator button rows starts  -->
  <!-- create button and assign value to each button -->
  <div class="firstRow">
    <input type="button" class="darkGrey" value="7" onclick="displayValue('7')" />
    <input type="button" class="darkGrey" value="8" onclick="displayValue('8')" />
    <input type="button" class="darkGrey" value="9" onclick="displayValue('9')" />
  </div>
  <div class="secondRow">
    <input type="button" class="darkGrey" value="4" onclick="displayValue('4')" />
    <input type="button" class="darkGrey" value="5" onclick="displayValue('5')" />
    <input type="button" class="darkGrey" value="6" onclick="displayValue('6')" />
  </div>
  
  <!-- last row  -->
  <div class="thirdRow">
    <input type="button" class="darkGrey" value="1" onclick="displayValue('1')" />
    <input type="button" class="darkGrey" value="2" onclick="displayValue('2')" />
    <input type="button" class="darkGrey" value="3" onclick="displayValue('3')" />
    <!-- solve() will evaluate value and display to result -->
  </div>
  <div class="fourthRow">
    <input type="button" class="darkGrey"value="0" onclick="displayValue('0')" />
    <input type="button" class="darkGrey" value="." onclick="displayValue('.')" />
          <!-- clearResult() function will clear result textbox -->
    <input type="button" class="darkGrey" value="AC" onclick="clearResult()" />
  </div>
  <div class="operators">
    <input type="button" value="/" onclick="displayValue('/')" />
    <input type="button" value="*" onclick="displayValue('*')" />
    <input type="button" value="-" onclick="displayValue('-')" />
    <input type="button" value="+" onclick="displayValue('+')" />
    <input type="button" value="=" onclick="solve()" />
  </div> 

  <!-- numeric and operator button rows ends  -->
</div>