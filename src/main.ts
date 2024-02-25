import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const commandArea = document.getElementById("cmd-area") as HTMLDivElement;
  const asciiContainer = document.getElementById(
    "ascii-container"
  ) as HTMLDivElement;

  inputField.focus();

  const initalDesc = [
    "<div>Type 'help' to see the list of available commands.</div>",
    // "<div>Type 'sudo secret' to see something special!</div>",
    `</div>Type 'repo' or <a href="https://github.com/Karan16-prog/portfolio-2024" target="_blank" rel="noopener noreferrer">Click Here</a> for the Github repository</div>`,
    `<div>[tab]: Trigger completion`,
    `<div>[Upper Key]: Displays the previous command used in the terminal  <span style="color:red">IN PROGRESS</span></div>`,
  ];

  if (asciiContainer) {
    const asciiArt = `
<pre class="ascii-font">
██╗░░██╗░█████╗░██████╗░░█████╗░███╗░░██╗██╗░██████╗
██║░██╔╝██╔══██╗██╔══██╗██╔══██╗████╗░██║╚█║██╔════╝
█████═╝░███████║██████╔╝███████║██╔██╗██║░╚╝╚█████╗░
██╔═██╗░██╔══██║██╔══██╗██╔══██║██║╚████║░░░░╚═══██╗
██║░╚██╗██║░░██║██║░░██║██║░░██║██║░╚███║░░░██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═════╝░
</pre>
<pre class="ascii-font" style="margin-bottom:20px">
██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░██╗██╗██╗
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗██║██║██║
██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║██║██║██║
██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║╚═╝╚═╝╚═╝
██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝██╗██╗██╗
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░╚═╝╚═╝╚═╝
</pre>
`;

    asciiContainer.innerHTML = asciiArt;
    initalDesc.forEach((ele) => {
      let tempNode = document.createElement("div");
      tempNode.innerHTML = ele;
      asciiContainer.appendChild(tempNode);
    });
  }

  const helpData = [
    "<br>",
    `help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list all the available commands\n`,
    "<br>",
    `about me&nbsp;&nbsp;&nbsp;description about Karan\n`,
    "<br>",
    `resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displays link to view resume\n`,
    "<br>",
    `github &nbsp;&nbsp;&nbsp;&nbsp;displays link to visit Karan's Github\n`,
    "<br>",
    `leetcode &nbsp; displays link to visit Karan's Leetcode profile\n`,
    "<br>",
    `linkedin &nbsp; check out my linkedin. I have never posted anything :P`,
    "<br>",
    `clear  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clean the terminal`,
    "<br>",
    `projects &nbsp; Description of all my projects with links`,
    "<br>",
    `repo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Links to github repo of this project`,
    "<br>",
  ];

  const aboutMe = [
    "<br>",
    "Hi! I am Karan Singh",
    "<br>",
    "I'm a software engineer, who builds engaging websites like this one\n",
    "<br>",
    "After graduating with a Bachelor's in Engineering, I started learning",
    "<br>",
    "web development and became interested in the Javascript ecosystem",
    "<br>",
    "Apart from coding, I love to read fantasy books, watch movies",
    "<br>",
    "and play role playing video games! (Elden Ring is my favourite)",
    "<br>",
    "Contact me - Email: karan.s1606@gmail.com, Phone No: +91-8291673037",
    "<br>",
  ];

  const projects = [
    "<br>",
    "1. Article Saver with Built in Parser",
    `<a href="https://github.com/Karan16-prog/clipper" target="_blank" rel="noopener noreferrer"> Repo Link </a>, <a href="https://clipper-nine.vercel.app/" target="_blank" rel="noopener noreferrer"> Hosted Link </a>`,
    "A fullstack application used to save articles and access it from any device.",
    "It parses and scrapes the article's metadata and saves them in a card format",
    "with their title, image and domain. Built using Next, Prisma ORM, Postgresql",
    "Next Auth & Typescript.",
    "P.S Don't open in mobile",
    "<br>",
    "<br>",
    "2. Github Viewer",
    `<a href="https://github.com/Karan16-prog/github-profile-viewer" target="_blank" rel="noopener noreferrer"> Repo Link </a>, <a href="https://github-profile-viewer-five.vercel.app/" target="_blank" rel="noopener noreferrer"> Hosted Link </a>`,
    "A frontend application used to checkout Github User Profiles and",
    "lists all their public repos in a tabular format.",
    "P.S Don't open in mobile. I got bored and never added responsiveness",
    "<br>",
    "<br>",
    "3. Terminal Based Porfolio",
    `<a href="https://github.com/Karan16-prog/portfolio-2024" target="_blank" rel="noopener noreferrer"> Repo Link </a>`,
    "A vanilla typescript app that looks like a terminal",
    "and also happens to be my portfolio!",
    "<br>",
    "<br>",
    "4. Basic Notes App",
    `<a href="https://github.com/Karan16-prog/NoteApp" target="_blank" rel="noopener noreferrer"> Repo Link </a>, <a href="https://note-app-mu-neon.vercel.app/" target="_blank" rel="noopener noreferrer"> Hosted Link </a>`,
    "Your basic notes app! Hey we all have to start from somewhere!",
    "Built with React. Uses localstorage to save notes. Has a dark mode and search filter. ",
    "<br>",
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (!inputField.contains(event.target as Node)) {
      inputField.focus();
    }
  };

  function scrollDown(): void {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  inputField.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      const command = inputField.value;
      inputField.value = "";
      const cmdTemp = document.createElement("div");

      cmdTemp.innerHTML = `<div class="cmd-dir-lbl">karan_singh@portfolio ~ % <span style="color: white; margin-left: 4px !important;">${
        "  " + command
      }</span></div>`;

      let length = commandArea.children.length;

      switch (command) {
        case "help":
          const helpText = document.createElement("div");

          helpText.setAttribute(
            "style",
            "display: flex; flex-direction:column"
          );

          helpText.appendChild(cmdTemp);
          helpData.forEach((ele) => {
            let newNode = document.createElement("div");
            newNode.setAttribute("style", "width: 100%");
            newNode.innerHTML = ele;
            helpText.appendChild(newNode);
          });
          // helpText.innerHTML = `<div>${helpData[0]}</div>`;

          Array.from(helpText.children).forEach((ele) =>
            console.log(ele.textContent)
          );

          length = commandArea.children.length;
          commandArea.insertBefore(helpText, commandArea.children[length - 1]);
          break;
        case "about me":
          // console.log("About me", command);
          let aboutMeDiv = document.createElement("div");
          aboutMeDiv.setAttribute(
            "style",
            "display: flex; flex-direction:column"
          );
          aboutMe.forEach((ele) => {
            let tempNode = document.createElement("div");
            tempNode.innerHTML = `<div>${ele}<div>`;
            aboutMeDiv.appendChild(tempNode);
          });

          commandArea.insertBefore(
            aboutMeDiv,
            commandArea.children[length - 1]
          );
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;
        case "resume":
          console.log("resume", command);

          let viewResume = document.createElement("div");
          viewResume.innerHTML = `<a href="https://docs.google.com/document/d/1ANA7ZWwDttDJokOGmKocEJr_jvdqX8teVKHrvR5LvJI/edit#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">View Resume</a>`;
          commandArea.insertBefore(
            viewResume,
            commandArea.children[length - 1]
          );
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;
        case "github":
          const childNode = document.createElement("div");
          // childNode.appendChild(cmdTemp);

          const linkNode = document.createElement("div");
          linkNode.innerHTML = `<a href="https://github.com/Karan16-prog" target="_blank" rel="noopener noreferrer">Github URL</a>`;
          childNode.appendChild(linkNode);
          length = commandArea.children.length;

          commandArea.insertBefore(childNode, commandArea.children[length - 1]);
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;
        case "leetcode":
          const leetcodeDiv = document.createElement("div");
          // leetcodeDiv.appendChild(cmdTemp);
          const leetcodeLinkNode = document.createElement("div");
          leetcodeLinkNode.innerHTML = `<a href="https://leetcode.com/Karan16-prog/" target="_blank" rel="noopener noreferrer">Leetcode URL</a>`;
          leetcodeDiv.appendChild(leetcodeLinkNode);
          length = commandArea.children.length;

          commandArea.insertBefore(
            leetcodeDiv,
            commandArea.children[length - 1]
          );
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;

        case "repo":
          const repoDiv = document.createElement("div");
          // repoDiv.appendChild(cmdTemp);
          const repoLinkNode = document.createElement("div");
          repoLinkNode.innerHTML = `<a href="https://github.com/Karan16-prog/portfolio-2024" target="_blank" rel="noopener noreferrer">Repo URL</a>`;
          repoDiv.appendChild(repoLinkNode);
          length = commandArea.children.length;
          commandArea.insertBefore(repoDiv, commandArea.children[length - 1]);
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;
        case "linkedin":
          const linkedInDiv = document.createElement("div");
          // linkedInDiv.appendChild(cmdTemp);
          const linkedInLinkNode = document.createElement("div");
          linkedInLinkNode.innerHTML = `<a href="https://www.linkedin.com/in/karan-singh-08a1a3126/" target="_blank" rel="noopener noreferrer">linkedIn URL</a>`;
          linkedInDiv.appendChild(linkedInLinkNode);
          length = commandArea.children.length;
          commandArea.insertBefore(
            linkedInDiv,
            commandArea.children[length - 1]
          );
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          break;
        case "clear":
          let lastChild = commandArea.lastElementChild; // Get the last child
          commandArea.innerHTML = "";
          if (lastChild !== null) {
            commandArea.appendChild(lastChild);
            inputField.focus();
          }

          break;
        case "projects":
          let projectChild = document.createElement("div");
          projectChild.setAttribute(
            "style",
            "display: flex; flex-direction:column"
          );
          projects.forEach((ele) => {
            let tempNode = document.createElement("div");
            tempNode.innerHTML = `<div>${ele}</div>`;
            projectChild.appendChild(tempNode);
            commandArea.insertBefore(
              projectChild,
              commandArea.children[length - 1]
            );
            commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
          });
          break;
        default:
          length = commandArea.children.length;
          const notFound = `zsh: command not found: ${command}`;
          let node = document.createElement("div");
          node.innerText = notFound;
          commandArea.insertBefore(node, commandArea.children[length - 1]);
          commandArea.insertBefore(cmdTemp, commandArea.children[length - 1]);
        // console.log("default", command);
      }

      scrollDown();
    }
  });

  document.addEventListener("click", handleClickOutside);
});
