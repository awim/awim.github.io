function toogle(id, cl){
  var elm=document.getElementById(id);
  if (elm.classList.contains(cl)) {
    elm.classList.remove(cl);
  } else {
    elm.classList.add(cl);
  }
}
