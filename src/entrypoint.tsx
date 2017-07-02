import * as React from "react";
import * as ReactDOM from "react-dom";

import HelloThing, { Student } from "./components/HelloThing";

const person = new Student("Matt", "Student");

ReactDOM.render(<HelloThing person={person} />, document.getElementById("content"));
