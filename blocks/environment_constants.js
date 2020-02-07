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
 * @fileoverview Environment constant blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_constants');  // Deprecated
goog.provide('Blockly.Constants.Environment_constants');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_constants.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

  // Block for environment constants that are just a number
  {
    "type": "env_constant_noindex",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["robot_size", "ROBOT_SIZE"],
          ["max_linear_velocity", "MAX_LINEAR_VELOCITY"]
        ]
      }
    ],
    "output": "Number",
    "style": "math_blocks",
    "tooltip": "%{BKY_MATH_CONSTANT_TOOLTIP}",
    "helpUrl": "%{BKY_MATH_CONSTANT_HELPURL}"
  },

  // Block for environment constants that are arrays.
  {
    "type": "env_constant_index",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["field", "FIELD"],
          ["goal", "GOAL"],
          ["penalty_area", "PENALTY_AREA"],
          ["goal_area", "GOAL_AREA"]
        ]
      },
      {
        "type": "input_value",
        "name": "NUM",
        "check": "Number"
      }
    ],
    "output": "Number",
    "style": "math_blocks",
    "helpUrl": "%{BKY_MATH_TRIG_HELPURL}",
    "extensions": ["math_op_tooltip"]
  }
]);