function getFirstElement<T>(array: T[]): T {
  return array[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(['a', 'b', 'c']));
console.log(getFirstElement<boolean>([true, false, true]));
