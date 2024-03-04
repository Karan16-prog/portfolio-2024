import "./style.css";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import config from "./config";

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const commandArea = document.getElementById("cmd-area") as HTMLDivElement;
  const asciiContainer = document.getElementById(
    "ascii-container"
  ) as HTMLDivElement;
  const terminal = document.getElementById("terminal") as HTMLDivElement;

  const commandStack: { stack: string[]; index: number } = {
    stack: [],
    index: -1,
  };

  // performance and analytics -- vercel
  injectSpeedInsights();
  inject();

  inputField.focus();

  const initalDesc = config.INITIAL_DESC;
  const helpData = config.HELP_LIST;
  const aboutMe = config.ABOUT_ME;
  const projects = config.PROJECTS;

  if (asciiContainer) {
    const asciiArt = config.ASCII_ART;

    asciiContainer.innerHTML = asciiArt;
    initalDesc.forEach((ele) => {
      let tempNode = document.createElement("div");
      tempNode.innerHTML = ele;
      asciiContainer.appendChild(tempNode);
    });
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!inputField.contains(event.target as Node)) {
      inputField.focus();
    }
  };

  function scrollDown(): void {
    if (terminal) {
      terminal.scrollTo({ top: terminal.scrollHeight, behavior: "smooth" });
    }
  }

  inputField.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      const command = inputField.value;
      commandStack.stack.push(command);
      commandStack.index = commandStack.stack.length - 1;
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
    } else if (e.key === "ArrowUp") {
      if (commandStack.index >= 0) {
        console.log(commandStack.stack[commandStack.index]);
        inputField.value = commandStack.stack[commandStack.index];
        commandStack.index--;
        requestAnimationFrame(() => {
          inputField.focus();
          inputField.setSelectionRange(
            inputField.value.length,
            inputField.value.length
          );
        });
      }
    }
  });

  document.addEventListener("click", handleClickOutside);
});

// if tab enters
//  1. No Text - insert 4 spaces
//  2. If Text present,
