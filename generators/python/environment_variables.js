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
 * @fileoverview Generating Python for environment variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.Environment_variables');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('math,random,Number');

Blockly.Python['robot_variables'] = function(block) {
  // Variables: id, idx, idx_opp, attack_angle, defense_angle.
  var CONSTANTS = {
    'ROBOT_X_COORDINATE': ['cur_posture[robot_id][X]', Blockly.Python.ORDER_MEMBER],    // name : generated code
    'ROBOT_Y_COORDINATE': ['cur_posture[robot_id][Y]', Blockly.Python.ORDER_MEMBER],
    'ROBOT_ORIENTATION': ['cur_posture[robot_id][TH]', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};

Blockly.Python['env_variables'] = function(block) {
  // Variables: id, idx, idx_opp, attack_angle, defense_angle.
  var CONSTANTS = {
    'ID': ['robot_id', Blockly.Python.ORDER_MEMBER],    // name : generated code
    'IDX': ['idx', Blockly.Python.ORDER_MEMBER],
    'IDX_OPP': ['idx_opp', Blockly.Python.ORDER_MEMBER],
    'ATTACK_ANGLE': ['attack_angle', Blockly.Python.ORDER_MEMBER],
    'DEFENSE_ANGLE': ['defense_angle', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};

Blockly.Python['env_variables_1d'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
  switch (operator) {
    case 'PREV_BALL':
      code = 'prev_ball[' + arg + ']';
      break;
    case 'CUR_BALL':
      code = 'cur_ball[' + arg + ']';
      break;
    case 'PREDICTED_BALL':
      code = 'predicted_ball[' + arg + ']';
      break;
    case 'TARGET':
      code = 'target[' + arg + ']';
      break;
    case 'ROBOT_TO_GOAL':
      code = 'robot_to_goal[' + arg + ']';
      break;
    case 'ROBOT_TO_TARGET':
      code = 'robot_to_target[' + arg + ']';
      break;
    case 'ROBOT_TO_BALL':
      code = 'robot_to_ball[' + arg + ']';
      break;
  }
  if (arg.length === 0) {
    code = code.replace("[", "").replace("]", "");
  }
  if (code) {
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};

Blockly.Python['env_variables_2d'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg1;
  var arg2;
  arg1 = Blockly.Python.valueToCode(block, 'NUM1', Blockly.Python.ORDER_NONE);
  arg2 = Blockly.Python.valueToCode(block, 'NUM2', Blockly.Python.ORDER_NONE);
  switch (operator) {
    case 'CUR_POSTURE':
      code = 'cur_posture[' + arg1 + ']' + '[' + arg2 + ']';
      break;
    case 'CUR_POSTURE_OPP':
      code = 'cur_posture_opp[' + arg1 + ']' + '[' + arg2 + ']';
      break;
    case 'PREV_POSTURE':
      code = 'prev_posture[' + arg1 + ']' + '[' + arg2 + ']';
      break;
    case 'PREV_POSTURE_OPP':
      code = 'prev_posture_opp[' + arg1 + ']' + '[' + arg2 + ']';
      break;
  }
  if (arg1.length === 0) {
    if (code.startsWith("cur_posture")) code = "cur_posture"
    else if (code.startsWith("cur_posture_opp")) code = "cur_posture_opp"
    else if (code.startsWith("prev_posture")) code = "prev_posture"
    else if (code.startsWith("prev_posture_opp")) code = "prev_posture_opp"
  }
  else if (arg2.length === 0) {
    if (code.startsWith("cur_posture")) code = 'cur_posture[' + arg1 + ']'
    else if (code.startsWith("cur_posture_opp")) code = 'cur_posture_opp[' + arg1 + ']'
    else if (code.startsWith("prev_posture")) code = 'prev_posture[' + arg1 + ']'
    else if (code.startsWith("prev_posture_opp")) code = 'prev_posture_opp[' + arg1 + ']'
  }
  if (code) {
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};