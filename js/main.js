var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");

var websites = [];

if (localStorage.getItem("websites") != null) {
  websites = JSON.parse(localStorage.getItem("websites"));
  displayWebsites();
}

function displayWebsites() {
  var temp = " ";
  for (var i = 0; i < websites.length; i++) {
    temp += 
   ` <tr>
    <td>`+ (i+1) +`</td>
    <td>`+websites[i].name +`</td>
    <td><a target="_blank"  class="btn visit-btn" href="`+websites[i].url +`"><i class="fa-solid fa-eye pe-2"></i>Visit </a></td>
    <td><button onclick="removeWebsite(`+i+`)" class="btn delete-btn"><i class="fa-solid fa-trash pe-2"></i>Delete </button></td>
</tr>`
  }
  document.getElementById("tableContent").innerHTML = temp;
}

function addWebsite() {
if(validateBookmark()){
  var website = {
    name: siteNameInput.value,
    url: siteURLInput.value,
  };
  websites.push(website);
  updateLocalStorage();
  clearForm();
  displayWebsites();
} 
}

function removeWebsite(index) {
    websites.splice(index , 1)
    updateLocalStorage(); 
    displayWebsites()  
}

function clearForm() {
    siteNameInput.value = ""
    siteURLInput.value = ""
}

function updateLocalStorage(){
    localStorage.setItem("websites", JSON.stringify(websites));
}






function validateBookmark() {
  let websiteName = document.getElementById('siteName').value;
  let url = document.getElementById('siteURL').value;

 
  if (websiteName.charAt(websiteName.length - 1) === ' ') {
      websiteName = websiteName.slice(0, -1); 
  }

  
  if (websiteName === '') {
    window.alert("Enter valid website name")
      return false;
  }


  const urlRegex = /^(http|https)?:\/\/[^\s/$.?#].[^\s]*$/i; 
  if (!url.match(urlRegex)) {
      alert('Please enter a valid URL.');
      return false;
  }

  return true;
}
