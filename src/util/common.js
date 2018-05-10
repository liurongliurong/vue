export const bankIcon = (name) => {
  let eclass = 'icon-gongshangyinhang'
  switch (name) {
    case '中国银行':
      eclass = 'icon-zhongguoyinhang'
      break
    case '中国建设银行':
      eclass = 'icon-jiansheyinhang'
      break
    case '中国农业银行':
      eclass = 'icon-nongyeyinhang'
      break
    case '中国邮政储蓄银行':
      eclass = 'icon-zhongguoyouzhengchuxuyinhang'
      break
    case '交通银行':
      eclass = 'icon-jiaotongyinhang'
      break
  }
  return eclass
}

export const empty = () => {}

export const pluralAsync = (funs) => {
  return new Promise((resolve) => {
    let num = 0
    funs.forEach((fun) => {
      fun().then(() => {
        num++
        if (num === funs.length) {
          resolve()
        }
      })
    })
  })
}
