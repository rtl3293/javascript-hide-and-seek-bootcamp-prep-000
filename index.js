function getFirstSelector(selector) {
  var lis = document.querySelectorAll(selector)
  return lis[0]
}

function nestedTarget() {
  var lis = document.querySelector('#nested')
  var target = lis.querySelector('.target')
  return target
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++){
    var rank = rankedLists[i].innerHTML
    rankedLists[i].innerHTML = (parseInt(rank) + n)
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div div div div')
  for (var node of nodes) {
    return node
  }
}
