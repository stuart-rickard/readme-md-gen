  // const generateProjects = projectsArr => {
  //   return `
  //     <section class="my-3" id="portfolio">
  //       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
  //       <div class="flex-row justify-space-between">
  //       ${projectsArr
  //         .filter(({ feature }) => feature)
  //         .map(({ name, description, languages, link }) => {
  //           return `
  //           <div class="col-12 mb-2 bg-dark text-light p-3">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.join(', ')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //         })
  //         .join('')}
  
  //       ${projectsArr
  //         .filter(({ feature }) => !feature)
  //         .map(({ name, description, languages, link }) => {
  //           return `
  //           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.join(', ')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //         })
  //         .join('')}
  //       </div>
  //     </section>
  //   `;
  // };

module.exports = templateData => {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;
  
    return `# Project Name

Description text.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Installation text.

## Usage

Usage text.

## License

See the [license](./LICENSE) file for license rights and limitations.

## Contributing

Contribution guidelines text.

## Tests

Test instructions text.

## Questions

My GitHub username is stuart-rickard; my profile is [here](https://github.com/stuart-rickard).

Additional questions?: my email address is stuart@bau-dev.com.
`
          // <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          // <nav class="flex-row">
          //   <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
      //         header.github
      //       }">GitHub</a>
      //     </nav>
      //   </div>
      // </header>
      // <main class="container my-5">
      //   ${generateAbout(about)}
      //   ${generateProjects(projects)}
    ;
  };