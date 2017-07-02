import * as React from "react";

export interface IPerson {
    firstName: string;
    lastName: string;
}

export class Student {
    private fullName: string;

    constructor(
        public firstName: string,
        public lastName: string,
    ) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

const greeter = (person: IPerson) =>
    `Hello, ${person.firstName} ${person.lastName}~`;

interface IProps {
    person: IPerson;
}

const HelloThing = ({ person }: IProps) =>
    <h1>{greeter(person)}</h1>;

export default HelloThing;
