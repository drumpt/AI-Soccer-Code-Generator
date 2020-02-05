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
 * @fileoverview Generating Python for environment function blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.Environment_functions');

goog.require('Blockly.Python');

Blockly.Python['distance'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
    // var code = Math.sqrt(Math.pow(value_x1 - value_x2, 2) + Math.pow(value_y1 - value_y2, 2));
    var code = "helper.distance(" + value_x1 + ", " + value_x2 + ", " + value_y1 + ", " + value_y2 + ")";
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['degree2radian'] = function(block) {
    var value_deg = Blockly.Python.valueToCode(block, 'deg', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.degree2radian(' + value_deg + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['radian2degree'] = function(block) {
    var value_rad = Blockly.Python.valueToCode(block, 'rad', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.radian2degree(' + value_rad + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['predict_ball'] = function(block) {
    var value_cur_ball = Blockly.Python.valueToCode(block, 'cur_ball', Blockly.Python.ORDER_ATOMIC);
    var value_previous_ball = Blockly.Python.valueToCode(block, 'previous_ball', Blockly.Python.ORDER_ATOMIC);
    var code = 'helper.predict_ball(' + value_cur_ball + ", " + value_previous_ball + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['find_closest_robot'] = function(block) {
    var value_cur_ball = Blockly.Python.valueToCode(block, 'cur_ball', Blockly.Python.ORDER_ATOMIC);
    var value_cur_posture = Blockly.Python.valueToCode(block, 'cur_posture', Blockly.Python.ORDER_ATOMIC);
    var value_number_of_robots = Blockly.Python.valueToCode(block, 'number_of_robots', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.find_closest_robot(' + value_cur_ball + ", " + value_cur_posture + ", " + value_number_of_robots + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_goal'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_goal_area = Blockly.Python.valueToCode(block, 'goal_area', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_own_goal(" + value_predicted_ball + ", " + value_field + ", " + value_goal_area + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_penalty'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_penalty_area = Blockly.Python.valueToCode(block, 'penalty_area', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_own_penalty(' + value_predicted_ball + ", " + value_field + ", " + value_penalty_area + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_field'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_own_field(' + value_predicted_ball + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_goal'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_goal_area = Blockly.Python.valueToCode(block, 'goal_area', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_goal(' + value_predicted_ball + ", " + value_field + ", " + value_goal_area + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_penalty'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_penalty_area = Blockly.Python.valueToCode(block, 'penalty_area', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_penalty(' + value_predicted_ball + ", " + value_field + ", " + value_penalty_area + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_field'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_field(' + value_predicted_ball + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['get_defense_kick_angle'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_cur_ball = Blockly.Python.valueToCode(block, 'cur_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.get_defense_kick_angle(' + value_predicted_ball + ", " + value_field + ", " + value_cur_ball + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['get_attack_kick_angle'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.get_attack_kick_angle(' + value_predicted_ball + ", " + value_field + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['set_wheel_velocity'] = function(block) {
    var value_predicted_ball = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    var value_field = Blockly.Python.valueToCode(block, 'field', Blockly.Python.ORDER_ATOMIC);
    var value_cur_ball = Blockly.Python.valueToCode(block, 'cur_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.set_wheel_velocity(' + value_predicted_ball + ", " + value_field + ", " + value_cur_ball + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };