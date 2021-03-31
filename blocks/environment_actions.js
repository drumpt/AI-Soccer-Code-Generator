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

goog.provide('Blockly.Blocks.Environment_actions');  // Deprecated
goog.provide('Blockly.Constants.Environment_actions');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_actions.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    
    // DEEP LEARNING
  
    {
      "type": "train",
      "message0": "train",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "play",
      "message0": "play",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    // RULE-BASED

    {
      "type": "stop",
      "message0": "stop",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "go_forward",
      "message0": "go_forward",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "go_backward",
      "message0": "go_backward",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "turn_right",
      "message0": "turn_right",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "turn_left",
      "message0": "turn_left",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "kick",
      "message0": "kick",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "manual_control",
      "message0": "%1 manual_control (left_wheel : %2 right_wheel : %3 kick_speed : %4 kick_angle : %5 jump_speed : %6 dribble : %7 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "left_wheel",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "right_wheel",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "kick_speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "kick_angle",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "jump_speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "dribble_mode",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "jump",
      "message0": "jump",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "go_to",
      "message0": "%1 go to (x : %2 y : %3)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "turn_to",
      "message0": "%1 turn to (x : %2 y : %3)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "shoot_to",
      "message0": "%1 shoot to (x : %2 y : %3)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "defend_ball",
      "message0": "gk save ball",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_gk_save_possible",
      "message0": "is gk save possible",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "pass_to",
      "message0": "%1 pass to (x : %2 y : %3)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "pass_to_robot",
      "message0": "%1 pass to robot : %2",
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
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "cross_to",
      "message0": "%1 cross to (x : %2 y : %3 z : %4)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "z",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_cross_to_possible",
      "message0": "%1 is cross to (x : %2 y : %3 z : %4) posible",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "z",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "cross_to_robot",
      "message0": "%1 cross to robot : %2",
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
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_cross_to_robot_possible",
      "message0": "%1 is cross to robot : %2 possible",
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
      "style": "environment_actions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
]);  // END JSON EXTRACT (Do not delete this comment.)
