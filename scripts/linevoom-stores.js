// 暫時只測試尚未解析成功的店家；其餘已確認店家先註解，避免每次 audit 重跑全部。
// 全部 57 間名單仍保留在 git history，待 4 間 PENDING 修正完成後再恢復。
module.exports = [
  ['台南市', 'FUNBOX 台南遠百', 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU'],
  ['屏東縣', 'funbox屏東太平洋', 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8'],
  ['台東縣', 'Funbox 台東秀泰店', 'https://linevoom.line.me/user/_dWiMasxT4CrK1ogY11eoxXAVvwO-U9Fchsvba6o'],
  ['台北市', 'Funbox 三越南西店', 'https://linevoom.line.me/user/_dXRCeNI62-wxECClrgjwMfi8HnY2ow5Onw6aC1A']
].map(([region, name, url]) => ({ region, name, url }));
