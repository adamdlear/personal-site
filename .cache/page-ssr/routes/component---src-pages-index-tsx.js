"use strict";
exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/components/AboutMe.tsx":
/*!************************************!*\
  !*** ./src/components/AboutMe.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMe: () => (/* binding */ AboutMe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AboutMe = () => {
  const bio = `
        I am currently a Software Engineer at Tractor Zoom, a technology startup with a goal to improve the experience
        for those buying and selling agricultual equipment. In my free time you can catch me working on any of these
        projects:
    `;
  const currentProjects = [{
    label: "A music guessing party game",
    link: "https://github.com/adamdlear/playlist-roulette"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-base leading-relaxed text-gray-700"
  }, bio), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, currentProjects.map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index,
    className: "list-disc list-inside mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: value.link,
    className: "text-blue-600 hover:text-blue-800 underline",
    target: "_blank",
    rel: "noopener noreferrer"
  }, value.label)))));
};

/***/ }),

/***/ "./src/components/Experience.tsx":
/*!***************************************!*\
  !*** ./src/components/Experience.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceSection: () => (/* binding */ ExperienceSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ExperienceSection = ({
  experience
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 rounded border-t flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl"
  }, experience.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, experience.startMonth, " - ", experience.endMonth)), experience.position && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: ""
  }, experience.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-gray-700 list-disc list-inside mt-2"
  }, experience.description.map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index
  }, value))));
};

/***/ }),

/***/ "./src/pages/index.tsx?export=default":
/*!********************************************!*\
  !*** ./src/pages/index.tsx?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AboutMe */ "./src/components/AboutMe.tsx");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Experience */ "./src/components/Experience.tsx");



const IndexPage = () => {
  const education = [{
    location: "Drake University",
    position: null,
    startMonth: "August 2024",
    endMonth: "May 2024",
    description: ["Majors: Computer Science & Artificial Intelligence", "GPA: 3.88", "Favorite Courses: Software Engineering, Algorithm Analysis, Programming Languages"]
  }];
  const work = [{
    location: "Tractor Zoom",
    position: "Software Engineer",
    startMonth: "June 2024",
    endMonth: "Present",
    description: []
  }, {
    location: "Hy-Vee, Inc.",
    position: "Data Science Intern",
    startMonth: "June 2023",
    endMonth: "August 2023",
    description: ["Use Python and SQL to explore and transform data", "Create code for the gathering, merging, and aggregating of data", "Utilize Artificial Intelligence and other Natural Language Processing techniques to predict item labels", "Wrote unit tests for a large classication prediction model"]
  }, {
    location: "Federal Reserve Bank of Chicago",
    position: "Software Engineering Intern",
    startMonth: "June 2022",
    endMonth: "August 2022",
    description: ["Developed, tested, and deployed code for application that processes payments for 10,000+ organizations", "Collaborated with Scrum team using Agile methodologies", "Improved security and performance public-facing webpages", "Modified web applications using the Angular framework"]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "px-4 py-16 sm:px-6 md:px-8 min-h-screen flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full lg:w-1/2 flex flex-col gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AboutMe__WEBPACK_IMPORTED_MODULE_1__.AboutMe, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-2xl font-semibold"
  }, "Education"), education.map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_2__.ExperienceSection, {
    experience: value
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-2xl font-semibold"
  }, "Work Experience"), work.map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_2__.ExperienceSection, {
    experience: value
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Personal Portfolio");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map