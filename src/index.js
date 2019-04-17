export default (url) => {
  let params = {}, search;
  if (typeof url != 'undefined') {
    let temp = url.split('?');
    if (temp.length != 2) return params;
    search = temp[1];
  } else if (location.search) {
    search = location.search.substr(1);
  } else {
    return params;
  }
  let parts = search.substr(0).split('&');
  for (let i = 0, c = parts.length; i < c; i++) {
    let nv = parts[i].split('=');
    if (!nv[0]) continue;
    params[nv[0]] = (nv[1]) ? decodeURIComponent(nv[1]) : true;
  }
  return params;
};
