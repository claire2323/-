// 1. 网站解析
function formatURL(url){
  const parseurl = new URL(url)
  const protocol = parseurl.protocol; // 协议 https
  const hostname = parseurl.hostname; // 域名 www.zouyebang.com
  const port = parseurl.port; // 端口号 80
  const pathname = parseurl.pathname === '/' ? '/' : parseurl.pathname; //路径 /official/pages/csr
  const search = parseurl.search === '' ? '' : parseurl; // 查询字符串 ?from=interview&name=zyb
  const hash = parseurl.hash === '' ? '' : parseurl.hash; // 片段标识符 #video
  // console.log(protocol, hostname, port, pathname, search, hash)
  return `${protocol}//${hostname},${port},${pathname},${search},${hash}`
}

const inputUrl = "https://www.zouyebang.com:80/official/pages/csr?from=interview&name=zyb#video";
console.log(formatURL(inputUrl));

// 2. 颜色转换 输入一个HEX格式颜色 #FFF->(255,255,255)
function changeHEX(color){
  color = color.replace('#','').toLowerCase();
  if(color.length===3){
    color = color.split('').map(function(char){
      return char+char
    }).join('');
  }
  const r = parseInt(color.substring(0,2),16);
  const b = parseInt(color.substring(2,4),16);
  const g = parseInt(color.substring(4,6),16);
  return `rgb(${r},${b},${g})`
}

// 示例使用
const hexColor = "#FF0000";
console.log(changeHEX(hexColor)); 

const hexColorShort = "#F00";
console.log(changeHEX(hexColorShort)); 

// 3. dom节点查找
function commonParentNode(oNode1, oNode2) {
  if (oNode1.contains(oNode2)) {
    return oNode1;
  }
  else {
    // 使用递归
    return commonParentNode(oNode1.parentNode, oNode2);
  }
}
