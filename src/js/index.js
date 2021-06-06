async function updateList(){
  const res = await getReq("/get");
  console.log(res.list);
  document.getElementById("list").innerHTML = res.list;
}

async function getReq(url, data) {
  return new Promise(function (resolve, reject) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      }
    }
    xmlhttp.open('GET', url + (data ? ("?d=" + data) : ""), true);
    xmlhttp.send();
  });
}

async function postReq(url, data) {
  return new Promise(function (resolve, reject) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve();
      }
    }
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(data);
  });
}

async function addToList(data){
  await postReq("/add", JSON.stringify(data));
}
