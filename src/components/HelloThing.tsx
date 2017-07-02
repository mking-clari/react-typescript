import * as React from "react";

interface IProps {
    name: string;
}

const HelloThing = ({ name }: IProps) =>
    <h1>Hello, {name}!</h1>;

export default HelloThing;
