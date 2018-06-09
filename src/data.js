const randomId = () => Math.random().toString(36).substring(2);
// 因为 | 这个是或位操作符，意思是先将数值转换成32位二进制整数值（如果有小数则忽略），再对二进制上每一位进行或运算，得出结果；
// 这里xxx | 0，因为0的二进制就是0000000...00一共32位（32个0），无论任何数对0进行或运算都是原来的数，因此可以用它来进行向下取整
const randomPv = (n = 10) => Math.random() * n | 0;

export const dataGenerate = () => {
    return {
        item_id: randomId(),
        bro_uvpv: `${randomPv()}/${randomPv()}`,
        stock_num: randomPv(1000),
        sold_num: randomPv()
    }
}

export const datasets = new Array(5).fill(0).map(() => dataGenerate())