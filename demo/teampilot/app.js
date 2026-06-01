const signupForm = document.querySelector("#signupForm");
const workspaceTitle = document.querySelector("#workspaceTitle");
const workspaceStatus = document.querySelector("#workspaceStatus");
const projectName = document.querySelector("#projectName");
const createProject = document.querySelector("#createProject");
const taskList = document.querySelector("#taskList");
const moreMenu = document.querySelector("#moreMenu");
const inviteMenu = document.querySelector("#inviteMenu");
const inviteButton = document.querySelector("#inviteButton");
const invitedRow = document.querySelector("#invitedRow");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const name = formData.get("workspaceName") || "New workspace";
  workspaceTitle.textContent = name;
  workspaceStatus.textContent = "Workspace created. Next step is not obvious on purpose.";
  showToast("Workspace created");
});

createProject.addEventListener("click", () => {
  const name = projectName.value.trim() || "Untitled project";
  taskList.innerHTML = `
    <li><span class="dot"></span>${name}: Draft launch checklist</li>
    <li><span class="dot muted"></span>${name}: Assign project owner</li>
  `;
  showToast("Project created");
});

moreMenu.addEventListener("click", () => {
  const isOpen = inviteMenu.classList.toggle("open");
  moreMenu.setAttribute("aria-expanded", String(isOpen));
});

inviteButton.addEventListener("click", () => {
  invitedRow.hidden = false;
  showToast("Ren Park invited");
});
