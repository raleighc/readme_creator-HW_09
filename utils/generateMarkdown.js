// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${data.description}
  ## ${data.tableOfContents}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.contributing}
  ## ${data.tests}
  ## ${data.questions}
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


