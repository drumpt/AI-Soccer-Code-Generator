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
 * @fileoverview Generating Python for environment index blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.Environment_indices');

goog.require('Blockly.Python');

Blockly.Python['env_coordinates_index'] = function(block) {
  // Constants: MY_TEAM, OP_TEAM, BALL, X, Y, TH, ACTIVE, TOUCH.
  var CONSTANTS = {
    'MY_TEAM': ['MY_TEAM', Blockly.Python.ORDER_MEMBER],
    'OP_TEAM': ['OP_TEAM', Blockly.Python.ORDER_MEMBER],
    'BALL': ['BALL', Blockly.Python.ORDER_MEMBER],
    'X': ['X', Blockly.Python.ORDER_MEMBER],
    'Y': ['Y', Blockly.Python.ORDER_MEMBER],
    'Z': ['Z', Blockly.Python.ORDER_MEMBER],
    'TH': ['TH', Blockly.Python.ORDER_MEMBER],
    'ACTIVE': ['ACTIVE', Blockly.Python.ORDER_MEMBER],
    'TOUCH': ['TOUCH', Blockly.Python.ORDER_MEMBER],
    'BALL_POSSESSION': ['BALL_POSSESSION', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};
  
Blockly.Python['env_gamestate_index'] = function(block) {
  // Constants: STATE_DEFAULT, STATE_BACKPASS, STATE_GOALKICK, STATE_CORNERKICK, STATE_PENALTYKICK.
  var CONSTANTS = {
      'STATE_DEFAULT': ['STATE_DEFAULT', Blockly.Python.ORDER_MEMBER],
      'STATE_BACKPASS': ['STATE_BACKPASS', Blockly.Python.ORDER_MEMBER],
      'STATE_GOALKICK': ['STATE_GOALKICK', Blockly.Python.ORDER_MEMBER],
      'STATE_CORNERKICK': ['STATE_CORNERKICK', Blockly.Python.ORDER_MEMBER],
      'STATE_PENALTYKICK': ['STATE_PENALTYKICK', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};

Blockly.Python['env_resetreason_index'] = function(block) {
  // Constants: NONE, GAME_START, SCORE_MYTEAM, SCORE_OPPONENT, GAME_END, DEADLOCK, GOALKICK, CORNERKICK, PENALTYKICK, HALFTIME, EPISODE_END.
  var CONSTANTS = {
      'NONE': ['NONE', Blockly.Python.ORDER_MEMBER],
      'GAME_START': ['GAME_START', Blockly.Python.ORDER_MEMBER],
      'SCORE_MYTEAM': ['SCORE_MYTEAM', Blockly.Python.ORDER_MEMBER],
      'SCORE_OPPONENT': ['SCORE_OPPONENT', Blockly.Python.ORDER_MEMBER],
      'GAME_END': ['GAME_END', Blockly.Python.ORDER_MEMBER],
      'DEADLOCK': ['DEADLOCK', Blockly.Python.ORDER_MEMBER],
      'GOALKICK': ['GOALKICK', Blockly.Python.ORDER_MEMBER],
      'CORNERKICK': ['CORNERKICK', Blockly.Python.ORDER_MEMBER],
      'PENALTYKICK': ['PENALTYKICK', Blockly.Python.ORDER_MEMBER],
      'HALFTIME': ['HALFTIME', Blockly.Python.ORDER_MEMBER],
      'EPISODE_END': ['EPISODE_END', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};