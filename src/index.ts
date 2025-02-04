export class People {
	name: string;

	constructor(name: string);
	constructor(firstName: string, lastName: string);
	constructor(...args: string[]) {
		this.name = args.join(' ');
	}
}
