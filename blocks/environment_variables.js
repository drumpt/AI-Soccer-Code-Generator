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
 * @fileoverview Environment variable blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_variables');  // Deprecated
goog.provide('Blockly.Constants.Environment_variables');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_variables.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

  // DEEP LEARNING
  {
    "type": "reward_types",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["reward_binary", "REWARD_BINARY"],
          ["reward_continuous", "REWARD_CONTINUOUS"],
          ["reward_sparse", "REWARD_SPARSE"],
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "state_types",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["state_polar", "POLAR"],
          ["state_relative", "RELATIVE"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "action_types",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["action_position", "POSITION"],
          ["action_velocity", "VELOCITY"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "action_sets",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["6_actions", "SMALL"],
          ["20_actions", "LARGE"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // RULE-BASED

  // Block for robot coordinates
  {
    "type": "robot_variables",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["robot_x_coordinate", "ROBOT_X_COORDINATE"],
          ["robot_y_coordinate", "ROBOT_Y_COORDINATE"],
          ["robot_orientation", "ROBOT_ORIENTATION"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // Block for robot coordinates
  {
    "type": "ball_variables",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["ball_x_coordinate", "BALL_X_COORDINATE"],
          ["ball_y_coordinate", "BALL_Y_COORDINATE"],
          ["ball_z_coordinate", "BALL_Z_COORDINATE"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // Block for robot coordinates
  {
    "type": "opponent_variables",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["opponent_x_coordinate", "OPPONENT_X_COORDINATE"],
          ["opponent_y_coordinate", "OPPONENT_Y_COORDINATE"],
          ["opponent_orientation", "OPPONENT_ORIENTATION"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

    // Block for environment constants that are just a number
  {
    "type": "env_variables",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["robot_id", "ID"],
          ["idx", "IDX"],
          ["idx_opp", "IDX_OPP"],
          ["attack_angle", "ATTACK_ANGLE"],
          ["defense_angle", "DEFENSE_ANGLE"]
          // ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // Block for environment variables that are arrays.
  {
    "type": "env_variables_1d",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["prev_ball", "PREV_BALL"],
          ["cur_ball", "CUR_BALL"],
          ["predicted_ball", "PREDICTED_BALL"]
        ]
      },
      {
        "type": "input_value",
        "name": "NUM",
        "check": "Number"
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "robot_to_variables",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["robot_to_goal", "ROBOT_TO_GOAL"],
          ["robot_to_target", "ROBOT_TO_TARGET"],
          ["robot_to_ball", "ROBOT_TO_BALL"],
          ["robot_to_robot", "ROBOT_TO_ROBOT"]
        ]
      },
      {
        "type": "input_value",
        "name": "NUM",
        "check": "Number"
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "target_variables",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["target", "TARGET"]
        ]
      },
      {
        "type": "input_value",
        "name": "NUM",
        "check": "Number"
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // Block for environment variables that are 2-d arrays.
  {
    "type": "env_variables_2d",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["cur_posture", "CUR_POSTURE"],
          ["cur_posture_opp", "CUR_POSTURE_OPP"],
          ["prev_posture", "PREV_POSTURE"],
          ["prev_posture_opp", "PREV_POSTURE_OPP"]
        ]
      },
      {
        "type": "input_value",
        "name": "NUM1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "NUM2",
        "check": "Number"
      }
    ],
    "output": "Number",
    "style": "environment_variables_blocks",
    "tooltip": "",
    "helpUrl": ""
  }
]);
