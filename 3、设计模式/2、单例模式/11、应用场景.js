/**
 * 用一个数组来存储数据，给每一个数据标记一个访问时间戳
 * 每次插入新数据的时候，先把数组中存在的数据项的时间戳自增，并将新数据项的时间戳置为0并插入到数组中
 * 每次访问数组中的数据项的时候，将被访问的数据项的时间戳置为0
 * 当数组空间已满时，将时间戳最大的数据项淘汰
 */

class LRUCache {
  // capacity:容量
  constructor(capacity) {
    this.capacity = capacity;
    this.members = [];
  }
  put(key, value) {
    // 记录最久没有使用的数据
    let oldestAge = -1;
    let oldestIndex = -1;
    // 记录是否存在相同key的数据，如果存在则覆盖
    let found = false;
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.age > oldestAge) {
        oldestAge = member.age;
        oldestIndex = i;
      }
      if (member.key == key) {
        found = true;
        this.members[i] = { key, value, aga: 0 };
      } else {
        member.age++;
      }
    }
    if (!found) {
      if (this.members.length >= this.capacity) {
        this.members.splice(oldestIndex, 1);
      }
      this.members.push({ key, value, age: 0 });
    }
  }
  get(key) {
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.key == key) {
        member.age = 0;
        return member.value;
      }
    }
    return -1;
  }
}

let cache = new LRUCache(3);
cache.put('1', '1');
console.log('cache :>> ', cache);
cache.put('2', '2');
console.log('cache :>> ', cache);
cache.put('3', '3');
console.log('cache :>> ', cache);

cache.put('4', '4');
console.log('cache :>> ', cache);
