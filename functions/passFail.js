const getResult = (percentage) => {
  if(percentage >= 80){
    return 'Distinction';
  }
  else if(percentage >= 60 && percentage < 80) {
    return 'First Division';
  }
  else {
    return 'Fail'
  }
}

module.exports = getResult;
