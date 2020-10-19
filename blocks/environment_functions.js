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
      "message0": "%1 distance between (x1 : %2 y1 : %4) and (x2 : %3 y2 : %5 )",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "degree2radian",
      "message0": "%1 degree2radian (deg : %2 )",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "radian2degree",
      "message0": "%1 radian2degree (rad : %2 )",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "predict_ball",
      "message0": "%1 predicted ball posture after %2 step(s)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "prediction_step",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "find_closest_robot",
      "message0": "number of closest robot to the ball",
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_goal",
      "message0": "%1 %2 is own goal area",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_penalty",
      "message0": "%1 %2 is own penalty area",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_field",
      "message0": "%1 %2 is own field",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_goal",
      "message0": "%1 %2 is opponent's goal area",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_penalty",
      "message0": "%1 %2 is opponent's penalty area",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_field",
      "message0": "%1 %2 is opponent's field",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_gk_zone",
      "message0": "ball is gk zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d1_zone",
      "message0": "ball is d1 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d2_zone",
      "message0": "ball is d2 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f1_zone",
      "message0": "ball is f1 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f2_zone",
      "message0": "ball is f2 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_default",
      "message0": "game state is default",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_goalkick",
      "message0": "game state is goalkick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_cornerkick",
      "message0": "game state is cornerkick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_kickoff",
      "message0": "game state is kickoff",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_penaltykick",
      "message0": "game state is penaltykick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_closest_to_ball",
      "message0": "%1 %2 is closest to the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_close_to_ball",
      "message0": "%1 %2 is close to the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "has_ball_possession",
      "message0": "%1 %2 has ball possession",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_gk_in_goalcenter",
      "message0": "GK is in goalcenter",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "robot_in_front_of_ball",
      "message0": "%1 %2 is in front of the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "printconsole",
      "message0": "%1 printConsole (message : %2 )",
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
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)
