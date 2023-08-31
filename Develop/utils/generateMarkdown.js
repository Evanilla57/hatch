// Function that returns a license badge, link, and section based on which license is passed in

const licenses = {
  'Apache': {
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0',
    section: '',
  },
  'Boost': {
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt',
    section: '',
  },
  'Eclipse': {
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: 'https://opensource.org/licenses/EPL-1.0',
    section: '',
  },
  'ISC': {
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    link: 'https://opensource.org/licenses/ISC',
    section: '',
  }
};

// If there is no license, return an empty string
function renderLicense(data) {
  let license = data.license;
  if (!license) {
    return '';
  }
  else if (licenses[license]) {
    licenseBadge = licenses[license].badge;
    licenseLink = licenses[license].link;
    licenseSection = licenses[license].section;
  }
  return licenseBadge, licenseLink, licenseSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  renderLicense(data);
  return `# ${data.title}

  ${licenseBadge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## Tests
  
  ${data.tests}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Questions
  
  Email Address: ${data.email}
  GitHub Username:  ${data.git}
  
  ## License
  
  ${data.license}
  ${licenseLink}
  ${licenseSection}
`;
}

module.exports = generateMarkdown;
