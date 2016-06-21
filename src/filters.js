"use strict"

/**
 * 通过字典值，获得字典名称
 *  @param {string} value 字典值
 */
exports.getDictName = (value) => {
  if (value) {
    return value;
  } else {
    return '';
  }
}
