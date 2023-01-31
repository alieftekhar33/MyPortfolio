/* -------------------- ////// Menu Bar Open & close & blur ////// --------------------- */

const Blurbg = document.querySelector('.Blurbg');
const ProjectMenu = document.getElementById('ProjectMenu');

function openmenu() {
  ProjectMenu.style.display = 'block';
  Blurbg.classList.add('blurx');
}

function closemenu() {
  ProjectMenu.style.display = 'none';
  Blurbg.classList.remove('blurx');
}

ProjectMenu.addEventListener('click', openmenu);
ProjectMenu.addEventListener('click', closemenu);

/* --------------------------- ///////// Cards //////// ----------------------------- */

const modalContainer = document.querySelector('#Popupwin');

const projects = [
  {
    id: 'First-part',
    image: 'tonic.png',
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem.",
    descriptionExtra:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo:
      'A daily selection of privately personalized reads; accounts or sign-ups required.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'Second-part',
    image: 'multi-post.png',
    name: 'Multipsot',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem.",
    descriptionExtra:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'Third-part',
    image: 'tonic2.png',
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem.",
    descriptionExtra:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'Fourth-part',
    image: 'multi-post2.png',
    name: 'Multi-Post',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem.",
    descriptionExtra:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
];

/* ---------------------------- //// Popup Window Project //// ------------------------------- */

function Popupwin(project) {
  const modalContent = `
  <div class= "Container-Pop">
    <div class= "PagePopupWindow">
      <div>
        <i class="fa-solid fa-xmark" id="popupClose"></i>
        <h3>${project.name}</h3>
        <ul class="listpro">
          <li><a href="#">CANOPY</a></li>
          <li><div class="dot"></div></li>
          <li><a href="#">Back End Dev</li>
          <li><div class="dot"></div></li>
          <li><a href="#">2015</li>
        </ul>
      </div>
      <img src="./img/${project.image}" alt="Image" class="Image-animation"/>
      <div class="two-part">
        <div class="Popup-left">
          <p class="para Popup-Detail-Mob">
            ${project.description}
          </p>
          <p class="para Popup-Detail-Dsktp">
            ${project.descriptionExtra}
          </p>
        </div>
        <div class="Popup-Right">
          <ul class="programlan">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul class="programlan Dsktp-lan">
            <li>Github</li>
            <li>Ruby</li>
            <li>BootStrap</li>
          </ul>
          <div class="Line-popup"></div>
            <button class="Button-Web Buttons-Popup">
              <div>
                ${project.liveLink} <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </button>
            <button class="Button-Web Buttons-Popup">
              <div>
                ${project.sourceLink} <i class="fa-brands fa-square-github"></i></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return modalContent;
}

/* ---------------------------- /////// project-work ////// ------------------------------- */

function loadProjectCards(projects = []) {
  let projectContents = '';

  projects.forEach((project) => {
    projectContents += `
    <div class= "Mainp" id= "portfolio">
    <img src="./img/${project.image}" alt="Tonic" class="Image-animation"/>
    <div class="Project-card">
      <h3>${project.name}</h3>
      <ul class="listpro">
        <li><a href="#">CANOPY</a></li>
        <li><div class="dot"></div></li>
        <li>Back End Dev</li>
        <li><div class="dot"></div></li>
        <li>2015</li>
      </ul>
      <p class="para">
        ${project.workInfo}
      </p>
      <ul class="programlan">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <button class="Button-Web button-mg" project-id="${project.id}" id="see-project-button">See Project</button>
    </div>
  </div>
    `;
  });

  return projectContents;
}

/* ------------------------- /////// Popup-window open & close ////// ---------------------- */

function closePopUp() {
  modalContainer.style.display = 'none';
}

function openPopUp(project) {
  const modalTemplate = Popupwin(project);
  modalContainer.innerHTML = modalTemplate;
  modalContainer.style.display = 'block';

  const popUpCloseButton = document.querySelector('#popupClose');

  popUpCloseButton.addEventListener('click', closePopUp);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#detailid');
  modalContainer.style.display = 'none';

  portfolioSection.innerHTML = loadProjectCards(projects);

  const proButtons = document.querySelectorAll('#see-project-button');

  Array.from(proButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('project-id');
      const projectObj = projects.find((project) => project.id === projectID);

      openPopUp(projectObj);
    });
  });
});

/* ---------------------------------/////Form validation Project////------------------------- */

const CForm = document.getElementById('CForm');
const Femail = document.getElementById('Femail');
const CError = document.getElementById('CError');
const emailFormValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
CForm.addEventListener('submit', (event) => {
  CError.innerHTML = '';
  if (emailFormValidation(Femail.value)) {
    CError.innerHTML = '';
  } else {
    event.preventDefault();
    CError.innerHTML = 'Please Add your Email in lowercase!';
  }
});

/* --------------------- //////// Local storage project //////// -------------------------- */

const localData = document.querySelectorAll('.form-input');
const localStoreData = {
  name: '',
  message: '',
  Femail: '',
};
localData.forEach((input) => {
  input.addEventListener('input', () => {
    localStoreData[input.name] = input.value;
    localStoreData[input.message] = input.value;
    localStoreData[input.Femail] = input.value;
    localStorage.setItem('information', JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  localData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
