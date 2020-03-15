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
 * @fileoverview Environment index blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_indices');  // Deprecated
goog.provide('Blockly.Constants.Environment_indices');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_indices.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

  // Block for coordinates constants in robot soccer:
  // MY_TEAM = 0
  // OP_TEAM = 1
  // BALL = 2
  // X = 0
  // Y = 1
  // TH = 2
  // ACTIVE = 3
  // TOUCH = 4
  {
    "type": "env_coordinates_index",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["MY_TEAM", "MY_TEAM"],
          ["OP_TEAM", "OP_TEAM"],
          ["BALL", "BALL"],
          ["X", "X"],
          ["Y", "Y"],
          ["Z", "Z"],
          ["TH", "TH"],
          ["ACTIVE", "ACTIVE"],
          ["TOUCH", "TOUCH"],
          ["BALL_POSSESSION", "BALL_POSSESSION"]
        ]
      }
    ],
    "output": "Number",
    "colour": "#DEB887",
    "tooltip": "",
    "helpUrl": ""
  },  

  // Block for game_state constants in robot soccer:
  // STATE_DEFAULT = 0
  // STATE_BACKPASS = 1
  // STATE_GOALKICK = 2
  // STATE_CORNERKICK = 3
  // STATE_PENALTYKICK = 4
  {
    "type": "env_gamestate_index",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["STATE_DEFAULT", "STATE_DEFAULT"],
          ["STATE_BACKPASS", "STATE_BACKPASS"],
          ["STATE_GOALKICK", "STATE_GOALKICK"],
          ["STATE_CORNERKICK", "STATE_CORNERKICK"],
          ["STATE_PENALTYKICK", "STATE_PENALTYKICK"]
        ]
      }
    ],
    "output": "Number",
    "colour": "#DEB887",
    "tooltip": "",
    "helpUrl": ""
  },

  // Block for reset_reason constants in robot soccer:
  // NONE = 0
  // GAME_START = 1
  // SCORE_MYTEAM = 2
  // SCORE_OPPONENT = 3
  // GAME_END = 4
  // DEADLOCK = 5
  // GOALKICK = 6
  // CORNERKICK = 7
  // PENALTYKICK = 8
  // HALFTIME = 9
  // EPISODE_END = 10
  {
    "type": "env_resetreason_index",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CONSTANT",
        "options": [
          ["NONE", "NONE"],
          ["GAME_START", "GAME_START"],
          ["SCORE_MYTEAM", "SCORE_MYTEAM"],
          ["SCORE_OPPONENT", "SCORE_OPPONENT"],
          ["GAME_END", "GAME_END"],
          ["DEADLOCK", "DEADLOCK"],
          ["GOALKICK", "GOALKICK"],
          ["CORNERKICK", "CORNERKICK"],
          ["PENALTYKICK", "PENALTYKICK"],
          ["HALFTIME", "HALFTIME"],
          ["EPISODE_END", "EPISODE_END"]
        ]
      }
    ],
    "output": "Number",
    "colour": "#DEB887",
    "tooltip": "",
    "helpUrl": ""
  }
]);