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

    // Block for environment constants that are just a number
  {
    "type": "env_variables",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["id", "ID"],
          ["idx", "IDX"],
          ["idx_opp", "IDX_OPP"],
          ["attack_angle", "ATTACK_ANGLE"],
          ["defense_angle", "DEFENSE_ANGLE"],
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
          ["cur_posture_opp", "CUR_POSTURE_OPP"]
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
