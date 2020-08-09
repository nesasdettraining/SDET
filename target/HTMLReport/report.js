$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CalculateBMI.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "CalculateBMI",
  "description": "Feature to test Calculate BMI",
  "id": "calculatebmi",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Verify Title",
  "description": "",
  "id": "calculatebmi;verify-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I launch Calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "verify the page title - \"Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the page title - \"BMI Calculator\"",
  "keyword": "And "
});
formatter.match({
  "location": "CalculateBMI.i_launch_Calculator_page()"
});
formatter.result({
  "duration": 9374164400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science",
      "offset": 25
    }
  ],
  "location": "CalculateBMI.verify_the_page_title(String)"
});
formatter.result({
  "duration": 13156700,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 2777313100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMI Calculator",
      "offset": 25
    }
  ],
  "location": "CalculateBMI.verify_the_page_title(String)"
});
formatter.result({
  "duration": 8793700,
  "status": "passed"
});
formatter.after({
  "duration": 870417000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter \u003cAge\u003e, \u003cHeight\u003e, \u003cWeight\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "calculatebmi;calculate-bmi;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 36,
      "id": "calculatebmi;calculate-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 37,
      "id": "calculatebmi;calculate-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 38,
      "id": "calculatebmi;calculate-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 39,
      "id": "calculatebmi;calculate-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 40,
      "id": "calculatebmi;calculate-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 41,
      "id": "calculatebmi;calculate-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter 10, 127, 40",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMI.i_launch_BMI_Calculator()"
});
formatter.result({
  "duration": 9835210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    },
    {
      "val": "127",
      "offset": 12
    },
    {
      "val": "40",
      "offset": 17
    }
  ],
  "location": "CalculateBMI.i_enter(String,String,String)"
});
formatter.result({
  "duration": 815960900,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_can_calculate_BMI()"
});
formatter.result({
  "duration": 1335730700,
  "status": "passed"
});
formatter.after({
  "duration": 775380400,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter 30, 156, 70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMI.i_launch_BMI_Calculator()"
});
formatter.result({
  "duration": 8586426300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 8
    },
    {
      "val": "156",
      "offset": 12
    },
    {
      "val": "70",
      "offset": 17
    }
  ],
  "location": "CalculateBMI.i_enter(String,String,String)"
});
formatter.result({
  "duration": 781332600,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_can_calculate_BMI()"
});
formatter.result({
  "duration": 265713000,
  "status": "passed"
});
formatter.after({
  "duration": 748422000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter 25, 152, 55",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMI.i_launch_BMI_Calculator()"
});
formatter.result({
  "duration": 8728557500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 8
    },
    {
      "val": "152",
      "offset": 12
    },
    {
      "val": "55",
      "offset": 17
    }
  ],
  "location": "CalculateBMI.i_enter(String,String,String)"
});
formatter.result({
  "duration": 789323300,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_can_calculate_BMI()"
});
formatter.result({
  "duration": 248022100,
  "status": "passed"
});
formatter.after({
  "duration": 1201597000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter 20, 160, 45",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMI.i_launch_BMI_Calculator()"
});
formatter.result({
  "duration": 7999179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    },
    {
      "val": "160",
      "offset": 12
    },
    {
      "val": "45",
      "offset": 17
    }
  ],
  "location": "CalculateBMI.i_enter(String,String,String)"
});
formatter.result({
  "duration": 639646600,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_can_calculate_BMI()"
});
formatter.result({
  "duration": 1597374200,
  "status": "passed"
});
formatter.after({
  "duration": 768651500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculatebmi;calculate-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I launch BMI Calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter 35, 160, 70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I can calculate BMI",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMI.i_launch_BMI_Calculator()"
});
formatter.result({
  "duration": 8052800000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 8
    },
    {
      "val": "160",
      "offset": 12
    },
    {
      "val": "70",
      "offset": 17
    }
  ],
  "location": "CalculateBMI.i_enter(String,String,String)"
});
formatter.result({
  "duration": 705922800,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMI.i_can_calculate_BMI()"
});
formatter.result({
  "duration": 255099000,
  "status": "passed"
});
formatter.after({
  "duration": 838860300,
  "status": "passed"
});
});