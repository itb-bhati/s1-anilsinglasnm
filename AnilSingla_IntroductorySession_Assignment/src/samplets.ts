const sum1 = (a: number, b: number): number => {
    return a+b;
};

const obj1: {[key: string] : string} = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
}

var { 'key3': newKey } = obj1;