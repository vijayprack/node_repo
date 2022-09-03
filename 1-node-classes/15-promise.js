const { readFile, writeFile } = require('fs').promises

const start = async() => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile("./content/result-mind-granade.txt",
    `This is Awesome : ${first} ${second}`,
    { flag: 'a' }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  };
};

start();


// const { readFile, writeFile } = require('fs')
// const util = require('util')
// const readFilePromice = util.promisify(readFile)
// const writeFilePromice = util.promisify(writeFile)

// const start = async() => {
//   try {
//     const first = await readFilePromice("./content/first.txt", "utf-8");
//     const second = await readFilePromice("./content/second.txt", "utf-8");
//     await writeFilePromice("./content/result-mind-granade.txt",
//     `This is Awesome : ${first} ${second}`);
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   };
// };

// start();


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile((path), 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       };
//     });
//   });
// };

// const start = async() => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   };
// };

// start();

// getText("./content/first.txt")
//   .then((result) => {console.log(result)})
//   .catch((err) => {console.log(err)});