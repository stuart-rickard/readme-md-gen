let tableOfContents = {
  installation: `- [Installation](#installation)
`,
  usage: `- [Usage](#usage)
`,
  license: `- [License](#license)
`,
  contributing: `- [Contributing](#contributing)
`,
  tests: `- [Tests](#tests)
`,
  questions: `- [Questions](#questions)
`
};

const updateToc = userResponses => {
  if (!userResponses.installation) { tableOfContents.installation = '' };
  if (!userResponses.usage) { tableOfContents.usage = '' };
  if (!userResponses.licenseType) { tableOfContents.license = '' };
  if (!userResponses.contributing) { tableOfContents.contributing = '' };
  if (!userResponses.testing) { tableOfContents.tests = '' };
  if (!(userResponses.githubUsername || userResponses.email || userResponses.questions)) { tableOfContents.questions = '' };
}

const projectDescriptionCreate = projectDescriptionResponse => {
  if (!projectDescriptionResponse) {
    return '';
  } else {
    return `${projectDescriptionResponse}
    
`
  }
};

const licenseBadgeCreate = licenseType => {
  switch (licenseType) {
    case 'Do Not Show License':
      tableOfContents.license = '';
      return '';
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
    case 'Other License':
      return '';
  }
};

const installationSectionCreate = installationResponse => {
  if (!installationResponse) {
    return '';
  } else {
    return `## Installation

${installationResponse}
    
`
  }
};

const usageSectionCreate = usageResponse => {
  if (!usageResponse) {
    return '';
  } else {
    return `## Usage

${usageResponse}
    
`;
  }
};

const licenseSectionCreate = licenseResponse => {
  if (!licenseResponse || ( licenseResponse == 'Do Not Show License' )) {
    return '';
  } else {
    if ( licenseResponse ==  'Other License') {
      return `## License

This project is licensed.

`;
    } else {
      return `## License
  
This project is licensed using ${licenseResponse}

`;
    }
  }
};

const licenseLinkCreate = linkResponse => {
  if (!linkResponse) {
    return '';
  } else {
    return `See the [license](${linkResponse}) file for license rights and limitations.

`;
  } 
};

const contributingSectionCreate = contribResponse => {
  if (!contribResponse) {
    return '';
  } else {
    return `## Contributing

${contribResponse}
    
`;
  }
};

const testingSectionCreate = testingResponse => {
  if (!testingResponse) {
    return '';
  } else {
    return `## Tests

${testingResponse}
    
`;
  }
};

const questionsSectionCreate = userResponses => {
  const handleGitHubUsername = userName => `My GitHub username is ${userName}; my profile is [here](https://github.com/${userName}).

`;
  const handleEmailAddress = email => `Additional questions?: my email address is ${email}.

`;

  const handleQuestionsText = questionsText => `${questionsText}

`;

  if (!(userResponses.githubUsername || userResponses.email || userResponses.questions)) {
    return '';
  } else {
    return `## Questions
        
${handleGitHubUsername(userResponses.githubUsername)}${handleEmailAddress(userResponses.email)}${handleQuestionsText(userResponses.questions)}`
  }
}

module.exports = userResponses => {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;
  updateToc(userResponses);
  return `# ${userResponses.projectName}

${projectDescriptionCreate(userResponses.projectDescription)}
${licenseBadgeCreate(userResponses.licenseType)}
## Table of Contents

${tableOfContents.installation}${tableOfContents.usage}${tableOfContents.license}${tableOfContents.contributing}${tableOfContents.tests}${tableOfContents.questions}
${installationSectionCreate(userResponses.installation)}${usageSectionCreate(userResponses.usage)}${licenseSectionCreate(userResponses.licenseType)}${licenseLinkCreate(userResponses.licenseFileLocation)}${contributingSectionCreate(userResponses.contributing)}${testingSectionCreate(userResponses.testing)}${questionsSectionCreate(userResponses)}`;
};
