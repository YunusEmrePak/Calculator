import React, { useState } from "react";
import { Nav, Buttons } from "./Buttons";

let conc = 0;
let plusCount = 0,
  minusCount = 0,
  multiCount = 0,
  divideCount = 0,
  modCount = 0;
function App() {
  const [input, setInput] = useState("");
  function changeInput(
    updatedInput,
    end = false,
    control = false,
    clear = false,
    plus = false,
    minus = false,
    multi = false,
    divide = false,
    mod = false,
    backspace = false
  ) {
    let text = input;
    if (!end) {
      text += updatedInput;
      setInput(text);
      if (control) {
        conc += parseFloat(text, 10);
        text = "";
        setInput("");
        if (plus) {
          plusCount += 1;
        } else if (minus) {
          minusCount += 1;
        } else if (multi) {
          multiCount += 1;
        } else if (divide) {
          divideCount += 1;
        } else if (mod) {
          modCount += 1;
        }
      }
      if (clear) {
        text = "";
        setInput("");
      }
      if (backspace) {
        let len = text.length;
        setInput(text.slice(0, len - 4));
        backspace = false;
      }
    } else if (end) {
      if (plusCount != 0) {
        conc += parseFloat(text, 10);
        plusCount = 0;
      } else if (minusCount != 0) {
        conc -= parseFloat(text, 10);
        minusCount = 0;
      } else if (multiCount != 0) {
        conc *= parseFloat(text, 10);
        multiCount = 0;
      } else if (divideCount != 0) {
        conc /= parseFloat(text, 10);
        divideCount = 0;
      } else if (modCount != 0) {
        conc %= parseFloat(text, 10);
        modCount = 0;
      }
      text = "";
      setInput(conc);
      conc = 0;
      end = false;
    }
  }

  return (
    <div className="back">
      <div>
        <Nav currentInput={input} />
      </div>
      <div className="row row1 clear">
        {
          <Buttons
            value="<--"
            class="clearLast"
            changeInput={changeInput}
            backspace={true}
          />
        }
        {
          <Buttons
            value="Clear"
            class="clearElements"
            changeInput={changeInput}
            clear={true}
          />
        }
        {
          <Buttons
            value="%"
            class="mod"
            changeInput={changeInput}
            control={true}
            mod={true}
          />
        }
        {
          <Buttons
            value="/"
            class="divide"
            changeInput={changeInput}
            control={true}
            divide={true}
          />
        }
      </div>
      <div className="row row2">
        {<Buttons value="7" class="number7" changeInput={changeInput} />}
        {<Buttons value="8" class="number8" changeInput={changeInput} />}
        {<Buttons value="9" class="number9" changeInput={changeInput} />}
        {
          <Buttons
            value="*"
            class="multi"
            changeInput={changeInput}
            control={true}
            multi={true}
          />
        }
      </div>
      <div className="row row3">
        {<Buttons value="4" class="number4" changeInput={changeInput} />}
        {<Buttons value="5" class="number5" changeInput={changeInput} />}
        {<Buttons value="6" class="number6" changeInput={changeInput} />}
        {
          <Buttons
            value="-"
            class="minus"
            changeInput={changeInput}
            control={true}
            minus={true}
          />
        }
      </div>
      <div className="row row4">
        {<Buttons value="1" class="number1" changeInput={changeInput} />}
        {<Buttons value="2" class="number2" changeInput={changeInput} />}
        {<Buttons value="3" class="number3" changeInput={changeInput} />}
        {
          <Buttons
            value="+"
            class="add"
            changeInput={changeInput}
            control={true}
            plus={true}
          />
        }
      </div>
      <div className="row row5">
        {<Buttons value="0" class="number0" changeInput={changeInput} />}
        {<Buttons value="." class="dot" changeInput={changeInput} />}
        {
          <Buttons
            value="="
            class="equal"
            changeInput={changeInput}
            ender={true}
          />
        }
      </div>
    </div>
  );
}

export default App;
