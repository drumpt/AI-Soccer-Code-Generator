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

// DEEP LEARNING

Blockly.Python['num_layers'] = function(block) {
  var num_layers = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.num_layers = ' + num_layers + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['hidden_dim'] = function(block) {
  var hidden_dim = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.hidden_dim = ' + hidden_dim + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['ddpg_batch_size'] = function(block) {
  var batch_size = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.ddpg_batch_size = ' + batch_size + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['ddpg_buffer_size'] = function(block) {
  var batch_size = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.ddpg_buffer_size = ' + batch_size + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['dqn_buffer_size'] = function(block) {
  var batch_size = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.dqn_buffer_size = ' + batch_size + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['ddpg_gamma'] = function(block) {
  var gamma = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.ddpg_gamma = ' + gamma + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['ddpg_dec_exploration'] = function(block) {
  var dec_epsilon = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.ddpg_dec_exploration = ' + dec_epsilon + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['dqn_dec_exploration'] = function(block) {
  var dec_epsilon = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.dqn_dec_exploration = ' + dec_epsilon + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

// RULE-BASED

Blockly.Python['distance'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
    // var code = Math.sqrt(Math.pow(value_x1 - value_x2, 2) + Math.pow(value_y1 - value_y2, 2));
    var code = "helper.distance(" + value_x1 + ", " + value_x2 + ", " + value_y1 + ", " + value_y2 + ")";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['relative_distance'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
    // var code = Math.sqrt(Math.pow(value_x1 - value_x2, 2) + Math.pow(value_y1 - value_y2, 2));
    var code = "helper.relative_distance(" + value_x1 + ", " + value_x2 + ", " + value_y1 + ", " + value_y2 + ")";
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
    var value_1 = Blockly.Python.valueToCode(block, 'prediction_step', Blockly.Python.ORDER_ATOMIC);
    var code = 'helper.predict_ball(cur_ball, prev_ball, '+ value_1 +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['find_closest_robot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'helper.find_closest_robot(cur_ball, cur_posture, 5)';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_goal'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_own_goal(" + value_1 + ", self.field, self.goal_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_penalty'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_own_penalty(' + value_1 + ", self.field, self.penalty_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_own_field'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_own_field(' + value_1 + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_goal'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_goal(' + value_1 + ", self.field, self.goal_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_penalty'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_penalty(' + value_1 + ", self.field, self.penalty_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_opp_field'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'predicted_ball', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.ball_is_opp_field(' + value_1 + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_gk_zone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_d1_zone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_d2_zone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_d2_zone(predicted_ball, self.field)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_f1_zone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_f1_zone(predicted_ball, self.field)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['ball_is_f2_zone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.ball_is_f2_zone(predicted_ball, self.field)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_state_default'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_state_default(game_state)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_state_goalkick'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_state_goalkick(game_state)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_state_cornerkick'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_state_cornerkick(game_state)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_state_kickoff'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_state_kickoff(game_state)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_state_penaltykick'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_state_penaltykick(game_state)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_closest_to_ball'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'robot_id', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.is_closest_to_ball(' + value_1 + ", idx)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['is_close_to_ball'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'robot_id', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.is_close_to_ball(cur_posture[' + value_1 + "], cur_ball)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['has_ball_possession'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.has_ball_possession(cur_posture[robot_id])";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['looking_to_target'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.looking_to_target(cur_posture[robot_id], robot_to_target)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['looking_to_ball'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.looking_to_ball(cur_posture[robot_id], robot_to_ball)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['looking_to_goal'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.looking_to_goal(cur_posture[robot_id], robot_to_goal)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['looking_to_robot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.looking_to_robot(cur_posture[robot_id], robot_to_robot)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['is_gk_in_goalcenter'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "helper.is_gk_in_goalcenter(cur_posture[self.id], self.field)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['robot_in_front_of_ball'] = function(block) {
    var value_1 = Blockly.Python.valueToCode(block, 'robot_id', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.robot_in_front_of_ball(cur_posture[' + value_1 + "], predicted_ball)";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['printconsole'] = function(block) {
    var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'helper.printConsole(' + value_message + ")\n";
    return code;
  };