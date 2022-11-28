const array = [
  {
    name: "Quang Âm Chi Ngoại",
    link: "https://metruyencv.com/truyen/quang-am-chi-ngoai",
    mark: "0",
  },
];
array.push({
  name: "Ngươi Thậm Chí Ngay Cả Đánh Dấu Cũng Không Có Sao?",
  link: "https://sangtacviet.pro/truyen/ciweimao/1/100318853/",
});
array.push({ name: "kiwwi", link: "ok" });
array.push({ name: "kiwwi", link: "ok" });

for (i = 0; i < array.length; i++) {
  var atag = document.createElement("a");
  atag.href = array[i].link;
  atag.textContent = array[i].name;
  var li = document.createElement("li");
  li.appendChild(atag);
  if (array[i].mark != null) {
    li.classList.add("checked");
  }
  document.getElementById("myUL").appendChild(li);
}
