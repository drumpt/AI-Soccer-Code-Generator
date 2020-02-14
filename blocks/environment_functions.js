/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Environment function blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_functions');  // Deprecated
goog.provide('Blockly.Constants.Environment_functions');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_functions.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
      "type": "distance",
      "message0": "distance %1 (x1 : %2 x2 : %3 y1 : %4 y2 : %5 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "degree2radian",
      "message0": "degree2radian %1 (deg : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "deg",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "radian2degree",
      "message0": "radian2degree %1 (rad : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "rad",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "predict_ball",
      "message0": "predict_ball %1 (cur_ball : %2 previous_ball : %3 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "cur_ball"
        },
        {
          "type": "input_value",
          "name": "previous_ball"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "find_closest_robot",
      "message0": "find_closest_robot %1 (cur_ball : %2 cur_posture : %3 number_of_robots : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "cur_ball"
        },
        {
          "type": "input_value",
          "name": "cur_posture"
        },
        {
          "type": "input_value",
          "name": "number_of_robots"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_goal",
      "message0": "ball_is_own_goal %1 (predicted_ball : %2 field : %3 goal_area : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "goal_area"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_penalty",
      "message0": "ball_is_own_penalty %1 (predicted_ball : %2 field : %3 penalty_area : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "penalty_area"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_field",
      "message0": "ball_is_own_field %1 (predicted_ball : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_goal",
      "message0": "ball_is_opp_goal %1 (predicted_ball : %2 field : %3 goal_area : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "goal_area"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_penalty",
      "message0": "ball_is_opp_penalty %1 (predicted_ball : %2 field : %3 penalty_area : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "penalty_area"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_field",
      "message0": "ball_is_opp_field %1 (predicted_ball : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "get_defense_kick_angle",
      "message0": "get_defense_kick_angle %1 (predicted_ball : %2 field : %3 cur_ball : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "cur_ball"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "get_attack_kick_angle",
      "message0": "get_attack_kick_angle %1 (predicted_ball : %2 field : %3 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "set_wheel_velocity",
      "message0": "set_wheel_velocity %1 (max_linear_velocity : %2 left_wheel : %3 right_wheel : %4 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        },
        {
          "type": "input_value",
          "name": "field"
        },
        {
          "type": "input_value",
          "name": "cur_ball"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "printconsole",
      "message0": "printConsole %1 (message : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "message"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)
