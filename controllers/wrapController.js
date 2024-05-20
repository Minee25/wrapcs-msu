const wrapBoxEl = document.querySelector(".wrap-box");

for (let i = 0; i < wrapList.length; i++) {

  wrapBoxEl.innerHTML += `
  <div class="card-item">
    <div class="card-header">
      <div class="card-background">
        <img src="assets/img/bg-wrap/${wrapList[i].bgUrl}" alt="">
      </div>
      <div class="card-logo">
        <div class="card-logo-2">
          <img src="assets/img/logo-wrap/${wrapList[i].logoUrl}" alt="">
        </div>
      </div>
    </div>

    <div class="card-body"> 
      <div class="card-title">
        <h3>${wrapList[i].title}</h3>
      </div>
      <div class="card-description">
        <p>${wrapList[i].description}</p>
      </div>
      <div class="card-link">
        <a href="${wrapList[i].link}" target="_blank">
          
          ${ 
            wrapList[i].link.includes("facebook") && wrapList[i].link.includes("groups") ? `<i class="fa-solid fa-user-group"></i>` :
            wrapList[i].link.includes("facebook") ? `<i class="fa-brands fa-facebook"></i>` :
            wrapList[i].link.includes("discord") ? `<i class="fa-brands fa-discord"></i>` :
            null
          }
           วาร์ป
        </a>
      </div>
    </div>
  </div>`
};

wrapBoxEl.innerHTML += `
  <div class="card-item">
    <div class="card-header"> 
      <div class="card-background">
        <img src="assets/img/empty.jpg" alt="">
      </div>
      <div class="card-logo">
        <div class="card-logo-2">
          <img src="assets/img/empty.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="card-body"> 
      <div class="card-title">
        <h3 style="color: #ff2020;">หากใส่ข้อมูลไม่ครบสามารถแจ้งได้ที่</h3>
      </div>
      <div class="card-description">
        <a href="https://www.facebook.com/profile.php?id=100013052448629" target="_blank">
          <i class="fa-brands fa-facebook"></i>&nbsp;Thaksin
        </a>
        <a href="https://www.instagram.com/oxkqz._25" target="_blank">
          <i class="fa-brands fa-square-instagram"></i>&nbsp;oxkqz.25
        </a>
      </div> 
    </div>
  </div>
`;