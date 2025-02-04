import { expect, test } from '@jest/globals';
import { People } from '.';

test('a test', () => {
	const john = new People('John', 'Wick');
	expect(john.name).toEqual('John Wick');
});
