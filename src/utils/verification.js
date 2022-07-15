export function checkEmail(data) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  return !reg.test(data) ? true : false
}

export function validateEmail(rule, value, callback) {
  if (value === '') {
    return callback(new Error('邮箱不能为空'))
  } else if (checkEmail(value)) {
    return callback(new Error('请输入正确的邮箱格式'))
  } else {
    callback()
  }
}
