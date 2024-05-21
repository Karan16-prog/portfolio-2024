const config = {
  ASCII_ART: `
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
`,

  INITIAL_DESC: [
    "<div>Type 'help' to see the list of available commands.</div>",
    // "<div>Type 'sudo secret' to see something special!</div>",
    `</div>Type 'repo' or <a href="https://github.com/Karan16-prog/portfolio-2024" target="_blank" rel="noopener noreferrer">Click Here</a> for the Github repository</div>`,
    // `<div>[tab]: Trigger completion  <span style="color:#FFA0A0">IN PROGRESS</span>`,
    `<div>[upper Key]: Displays the previous command used in the terminal  <span style="color:#FFA0A0">IN PROGRESS</span></div>`,
  ],

  HELP_LIST: [
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
  ],

  ABOUT_ME: [
    "<br>",
    `Hey there  <span style="font-size:20px">👋</span>, groovy souls!`,
    "<br>",
    `I'm Karan Singh, a web-weaving wizard who crafts websites that'll`,
    `blow your mind, just like this one!`,
    "<br>",
  ],

  PROJECTS: [
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
  ],
  CMD_LIST: [
    "help",
    "about me",
    "resume",
    "projects",
    "linkedin",
    "leetcode",
    "github",
    "clear",
    "repo",
  ],
};

export default config;
