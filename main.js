$('.popup').magnificPopup({
  type: 'image',
  gallery: { enabled: true},
});



/* jshint curly:true, debug:true */
/* globals $, firebase */



// id="contact-button"をクリックするとdatabaseにお問い合わせ内容が保存される
$('#contact-button').on('click', (e) => {
  e.preventDefault();
  // 投稿者の名前
  const username = $('#user-name').val();
  // 投稿者のメールアドレス
  const usermail = $('#user-mail').val();
  // お問い合わせ内容
  const userrequest = $('#user-request').val();
  
  // 空欄がある場合に警告文を出す
  if (username === '' || usermail === '' || userrequest === '') {
    alert('文字を入力してください');
    return;
  }
  
  function Location () {
    location.href = "complete.html";
  }
  const requestData = {
    username,
    usermail,
    userrequest,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
  return firebase
    .database()
    .ref('requests')
    .push(requestData)
    .then(Location);
  });
 
