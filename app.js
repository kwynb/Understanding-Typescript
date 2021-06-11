var Skills;
(function (Skills) {
    Skills[Skills["HTML5"] = 0] = "HTML5";
    Skills[Skills["CSS"] = 1] = "CSS";
    Skills[Skills["JS"] = 2] = "JS";
    Skills[Skills["TS"] = 3] = "TS";
    Skills[Skills["PYTHON"] = 4] = "PYTHON";
    Skills[Skills["JAVA"] = 5] = "JAVA";
})(Skills || (Skills = {}));
;
var person = {
    name: "Kwynett Bragado",
    age: 22,
    role: "Developer",
    interest: ["Web Development", "Machine Learning", "Quantum Technology", "App Development"],
    skills: Skills.JAVA
};
console.log(person.skills);
