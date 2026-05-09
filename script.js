window.addEventListener("load", onLoad);

function onLoad() {
  displayEductionDetails();
  displayWorkDetails();
  displayProjectDetails();
  displaySkills();
}



// ================= EDUCATION =================

function displayEductionDetails() {
  let eduContainerElement = document.querySelector(".edu-container");

  if (!eduContainerElement) return;

  let innerHtmladd = "";

  edus.forEach((edu) => {
    innerHtmladd += `
      <div class="edu-row">
        <div class="edu-year">${edu.edu_year}</div>

        <div class="edu-body">
          <div class="edu-degree">
            ${edu.degree}
          </div>

          <div class="edu-school">
            ${edu.institute}
          </div>
        </div>

        <div class="edu-badge">
          ${edu.status}
        </div>
      </div>
    `;
  });

  eduContainerElement.innerHTML = innerHtmladd;
}

// ================= WORK =================

function displayWorkDetails() {
  let workContainerElement = document.querySelector(".work-container");

  if (!workContainerElement) return;

  let innerHtmladd = "";

  works.forEach((work) => {
    innerHtmladd += `
      <div class="work-row">

        <div class="leftside">
          <div class="duration-work">
            ${work.duration}
          </div>

          <div class="company-name">
            ${work.company_name}
          </div>
        </div>

        <div class="rightside">

          <div class="job-title">
            ${work.job_title}
          </div>

          <div class="job-desc">
            ${work.job_desc}
          </div>

          <div class="jobs-skill">
            ${createTags(work.jobs_skilss || "", "job-skill")}
          </div>

        </div>

      </div>
    `;
  });

  workContainerElement.innerHTML = innerHtmladd;
}

// ================= HELPER FUNCTION =================

function createTags(items, className) {
  return items
    .split(",")
    .map(
      (item) => `
        <div class="${className}">
          ${item.trim()}
        </div>
      `
    )
    .join("");
}

// ================= PROJECTS =================

function displayProjectDetails() {
  let projectContainerElement =
    document.querySelector(".project-container");

  let innerHtmladd = "";

  if (!projectContainerElement) return;

  projects.forEach((project) => {
    innerHtmladd += `
      <div class="project-card">

        <div class="project-number-logo">

          <div class="project-number">
            ${project.project_number}
          </div>

          <div class="project-logo">
            <a target="_blank" href="${project.project_link}">
              <img
                class="git-logo"
                src="images/icons8-github-30.png"
                alt="GITHUB ICON"
              />
            </a>
          </div>

        </div>

        <div class="project-title">

          <h2>${project.project_title}</h2>

          <p class="project-desc">
            ${project.project_description}
          </p>

        </div>

        <div class="techskills">
          ${createTags(project.techskills || "", "tech")}
        </div>

      </div>
    `;
  });

  projectContainerElement.innerHTML = innerHtmladd;
}

// ================= SKILLS =================

function displaySkills() {
  let skillsContainer = document.querySelector(".skills-container");

  if (!skillsContainer) return;

  let html = "";

  skills.forEach((skill) => {
    html += `
      <div class="skill ${skill.className}">
        ${skill.name}
      </div>
    `;
  });

  skillsContainer.innerHTML = html;
}

history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
};

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData
    }
  );

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully 🚀");
    form.reset();
  } else {
    alert("Something went wrong ❌");
  }
});

