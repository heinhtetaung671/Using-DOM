let elButton = document.getElementById('moreAboutMe');
let elInfoArea = document.getElementById('infoArea');

elButton.addEventListener('click', () => showMoreAboutMe())

function showMoreAboutMe( ){
   let me = {
      name: 'Hein Htet Aung',
      age: 17,
      education: 'Preparing GED',
      hobby: 'Codding',
      futurePlan: 'I want to study in the United States.'
   }

   let nameEle = document.createElement('h4');
   let ageEle = document.createElement('h4');
   let educationEle = document.createElement('h4');
   let hobbyEle = document.createElement('h4');
   let futurePlanEle = document.createElement('h4');

   nameEle.textContent = me.name;
   ageEle.textContent = me.age;
   educationEle.textContent = me.education;
   hobbyEle.textContent = me.hobby;
   futurePlanEle.textContent = me.futurePlan;

   elInfoArea.appendChild(nameEle)
   elInfoArea.appendChild(ageEle)
   elInfoArea.appendChild(educationEle)
   elInfoArea.appendChild(hobbyEle)
   elInfoArea.appendChild(futurePlanEle)

}