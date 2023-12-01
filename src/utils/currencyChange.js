export function getKorAmountString(numAmount, ndigitsRound = 0, strSuffix = '원') {
  if (!Number.isInteger(numAmount) || !Number.isInteger(ndigitsRound)) {
    throw new Error('숫자와 정수만 입력해야 합니다.');
  }

  if (numAmount < 1) {
    throw new Error('1 이상의 값을 입력해야 합니다.');
  }

  const majUnits = ['만', '억', '조', '경', '해', '자', '양', '구', '간', '정', '재', '극'];
  const units = [' '];

  for (const mm of majUnits) {
    units.push('십', '백', '천');
    units.push(mm);
  }

  const listAmount = Array.from(String(numAmount).padStart(ndigitsRound + 1, '0')).reverse();
  let strResult = '';
  const numLenListAmount = listAmount.length;

  for (let i = 0; i < numLenListAmount; i++) {
    const strNum = listAmount[i];

    if (
      numLenListAmount >= 9 &&
      i >= 4 &&
      i % 4 === 0 &&
      listAmount.slice(i, i + 4).join('') === '0000'
    ) {
      continue;
    }

    if (strNum === '0') {
      if (i % 4 === 0) {
        strResult = units[i] + strResult;
      }
    } else if (strNum === '1') {
      if (i % 4 === 0) {
        strResult = strNum + units[i] + strResult;
      } else {
        strResult = units[i] + strResult;
      }
    } else {
      strResult = strNum + units[i] + strResult;
    }
  }

  strResult = strResult.trim();

  if (strResult.length === 0) {
    return null;
  }

  if (!Number.isNaN(Number(strResult[0]))) {
    strResult = '1' + strResult;
  }

  return strResult + strSuffix;
}
