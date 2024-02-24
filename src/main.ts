import { child } from "firebase/database";
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const commandArea = document.getElementById("cmd-area") as HTMLDivElement;

  inputField.focus();

  const asciiContainer = document.getElementById(
    "ascii-container"
  ) as HTMLDivElement;

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
<pre class="ascii-font">
██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░██╗██╗██╗
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗██║██║██║
██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║██║██║██║
██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║╚═╝╚═╝╚═╝
██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝██╗██╗██╗
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░╚═╝╚═╝╚═╝
</pre>
`;

    asciiContainer.innerHTML = asciiArt;
  }

  const helpData = [
    `help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list all the available commands\n`,
    `about me&nbsp;&nbsp;&nbsp;description about Karan\n`,
    `resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displays link to view resime\n`,
    `github &nbsp;&nbsp;&nbsp;&nbsp;displays link to visit Karan's Github\n`,
    `leetcode &nbsp;        displays link to visit Karan's Leetcode profile\n`,
    `clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clean the terminal`,
  ];

  const initalDesc = [
    "Type 'help' to see the list of available commands.",
    "Type 'help' to see the list of available commands.",
    `Type 'repo' or <a href="">Click Here</a> for the Github repository`,
  ];

  const aboutMe = ["Hi! I am Karan Singh. I am a fullstack developer!", ""];

  function commandEntered() {}

  const handleClickOutside = (event: MouseEvent) => {
    if (!inputField.contains(event.target as Node)) {
      inputField.focus();
    }
  };

  inputField.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      const command = inputField.value;
      inputField.value = "";
      const cmdTemp = document.createElement("div");

      cmdTemp.innerHTML = `<div class="cmd-dir-lbl">karan_singh@portfolio ~ % <span style="color: white;">${
        "  " + command
      }</span></div>`;

      let length;

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
          console.log("About me", command);
          break;
        case "resume":
          console.log("resume", command);
          break;
        case "github":
          const childNode = document.createElement("div");
          childNode.appendChild(cmdTemp);

          const linkNode = document.createElement("div");
          linkNode.innerHTML = `<a href="https://github.com/Karan16-prog" target="_blank" rel="noopener noreferrer">Github URL</a>`;
          childNode.appendChild(linkNode);
          length = commandArea.children.length;
          commandArea.insertBefore(childNode, commandArea.children[length - 1]);
          break;
        case "leetcode":
          console.log("leetcode", command);
          break;
        case "clear":
          let lastChild = commandArea.lastElementChild; // Get the last child
          commandArea.innerHTML = "";
          if (lastChild !== null) {
            commandArea.appendChild(lastChild);
            inputField.focus();
          }

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
    }
  });

  document.addEventListener("click", handleClickOutside);
});
