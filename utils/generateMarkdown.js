// function to generate markdown for README

function generateMarkdown(data) {
 
 if (data.license === "GNU AGPLv3"){
   var licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
   var licenseNotice = "[GNU AFFERO GENERAL PUBLIC LICENSE Version 3](https://www.gnu.org/licenses/agpl-3.0)";
 } else if (data.license === "Mozilla Public License 2.0") {
  var licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  var licenseNotice = "[Mozilla Public License 2.0](https://spdx.org/licenses/MPL-2.0.html)";
 } else if (data.license === "Apache License 2.0") {
  var licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  var licenseNotice = "[Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)";
 } else if (data.license === "MIT License") {
  var licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  var licenseNotice ="[The MIT License](https://opensource.org/licenses/MIT)";
 } else if (data.license === "Boost Software License 1.0") {
  var licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  var licenseNotice = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)"
 };


  return `
  # ${data.title}

  ${licenseBadge}
  
  ## Description:

  ${data.description}

  ## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:
  
  ${data.installation}

  ## Usage:
  
  ${data.usage}

  ## License:
  
  **Notice:**
  This application is covered under: ${licenseNotice}

  ## Contributing:
  
  ${data.contributing}

  ## Tests:
  
  ${data.tests}

  ## Questions:
  
  Questions can be directed to: ${data.email} \n
  For other work please visit: [GitHub](https://github.com/${data.github}) \n
  ![github repo link](https://img.shields.io/badge/${data.title}-${data.github}-yellowgreen) \n
`;
}

// README Sections: 
// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

module.exports = generateMarkdown;


